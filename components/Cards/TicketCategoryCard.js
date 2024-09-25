import { useMutation, useQuery } from "@apollo/client";
import { Button, Form, Input, Modal } from "antd";

import jwt from "jsonwebtoken";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useUser } from "../../context/UserAuthContext";
import { CREATE_BOOKING, UPDATE_BOOKING } from "../../utils/mutations";
import { GET_EVENT_BY_PARAM, GET_TICKETS_BY_PARAMS } from "../../utils/queries";
const TicketCategoryCard = ({ ticket, setLoaderLoading }) => {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [Tickets, setTickets] = useState([]);
  const [userId, setUserId] = useState("");
  const [userType, setUserType] = useState("");
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const router = useRouter();
  const { query } = useRouter();
  const { eventid } = query;

  const { userData } = useUser();

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
        setLoaderLoading(false);
      };

      document.body.appendChild(script);
    });
  };
  const makePayment = async (datas) => {
    const res = await initializeRazorpay();
    if (!res) {
      alert("Razorpay SDK Failed to load");
      setLoaderLoading(false);
      return;
    }
    const data = await fetch("/api/razorpay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: parseInt(datas?.booking_total_amount) }),
    }).then((t) => t.json());
    setTimeout(() => {
      setLoaderLoading(false);
    }, 1500);
    var options = {
      key: process.env.RAZORPAY_KEY,
      name: "Showsguru.com",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thankyou for booking with us",
      handler: function (response) {
        if (response?.razorpay_payment_id) {
          console.log(response);
          updateBooking({
            variables: {
              booking_id: datas?._id,
              booking_status: "Booked",
              paymentStatus: "Paid",
              paymentId: response?.razorpay_payment_id,
            },
          });
          form.resetFields();
          setIsModalOpen(false);
        } else {
          toast.error("Payment Failed");
          form.resetFields();
          setIsModalOpen(false);
        }
      },
      prefill: {
        name: userData?.name,
        email: userData?.email,
        contact: userData?.mobile,
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const [updateBooking] = useMutation(UPDATE_BOOKING, {
    onCompleted: (data) => {
      console.log(data);
      toast.success("Payment Sucessful");
      router.push(`/ticket?id=${data?.updateBooking?._id}`);
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userType = localStorage.getItem("User Type");
    if (!token) {
      router.push("/login");
    }
    if (!userType) {
      router.push("/login");
    }
    if (userType && token) {
      const userId = jwt.decode(token);
      setUserId(userId.userId);
      setUserType(userType);
    }
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const { data: TicketData } = useQuery(GET_TICKETS_BY_PARAMS, {
    variables: {
      eventId: eventid,
      ticketType: Tickets?._id,
      quantity: parseInt(ticketQuantity),
      isBooked: false,
    },
  });

  const { loading, error, data } = useQuery(GET_EVENT_BY_PARAM, {
    variables: { _id: eventid },
  });
  const EventData = data?.getEventByParams[0];
  const SelectedTickets = TicketData?.getTicketByParams;

  const [addBooking, { data: BookingData }] = useMutation(CREATE_BOOKING, {
    onCompleted: (data) => {
      console.log(data);
      toast.success("Loading Payment Gateway");
      makePayment(data?.addBooking);
      setTickets([]);
    },
    onError: (err) => {
      console.log(err);
      toast.error("Error", err.message);
    },
  });

  const onFinish = (values) => {
    try {
      if (SelectedTickets?.length < ticketQuantity) {
        toast.error("Ticket Quantity Exceeded");
        return;
      }
      addBooking({
        variables: {
          event_id: eventid,
          user_id: userId,
          ticket_type: Tickets._id,
          booking_status: "Pending",
          paymentStatus: "Pending",
          name_of_persons: values.name_of_persons,
          email: values.email,
          dob: values.dob,
          anniversary: values.anniversary,
          address: values.address,
          phone_number: values.phone_number,
          booking_total_amount:
            (Tickets.price + EventData?.event_convenience_fees) *
            ticketQuantity,
          ticket_id: SelectedTickets?.map((ticket) => ticket._id),
          booking_quantity: parseInt(ticketQuantity),
          booking_payment_method: "UPI",
          seats: SelectedTickets?.map((ticket) => ticket.ticketId),
          bookedBy: userType,
          bookedFrom: "Website",
        },
      });
      form.resetFields();
      setIsModalOpen(false);
      setLoaderLoading(true);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="w-full min-h-52 bg-[#333537] rounded-xl sm:p-8 p-4 sm:px-16 flex sm:flex-row flex-col justify-between my-4">
        <div className="flex flex-col justify-evenly">
          <h1 className="text-white font-semibold text-2xl">{ticket?._id}</h1>
          <div className="sm:py-0 py-4">
            <p className="text-white flex items-center py-2">Details :</p>
            <div className="flex items-start  overflow-y-scroll text-gray-100 sm:w-[80%] ">
              {ticket?.description}
            </div>
          </div>
        </div>
        <div className="flex sm:flex-col justify-between sm:pt-0 pt-4">
          <h2 className="text-secondary text-2xl font-medium flex w-full sm:pb-0 pb-4">
            ₹{ticket?.price}
          </h2>

          <div>
            <button
              onClick={() => {
                setTickets(ticket);
                showModal();
              }}
              className="rounded-xl text-white bg-primary flex items-center justify-center w-36 h-10 text-lg p-0"
            >
              Select
            </button>
          </div>
        </div>
      </div>
      <Modal
        title={
          <div className="flex justify-center w-full pb-3">
            <p>Enter Details</p>
          </div>
        }
        open={isModalOpen}
        onCancel={handleCancel}
        className="bg-slate-900"
        footer={[]}
      >
        <Form
          name="Book Tickets"
          onFinish={onFinish}
          form={form}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          requiredMark={false}
          initialValues={{
            name_of_persons: userData?.name,
            email: userData?.email,
            mobile: userData?.mobile,
          }}
        >
          <Form.Item
            name="ticketQuantity"
            label="Ticket Quantity"
            rules={[
              {
                required: true,
                message: "Please input your Ticket Quantity!",
              },
            ]}
          >
            <Input
              onChange={(e) => setTicketQuantity(e.target.value)}
              type="number"
              placeholder="Enter Ticket Quantity"
              className="text-white placeholder:text-gray-500 "
            />
          </Form.Item>
          <Form.Item
            name="phone_number"
            label="Mobile Number"
            rules={[
              {
                required: true,
                message: "Please input your Mobile Number",
              },
            ]}
          >
            <Input
              type="number"
              placeholder="Mobile"
              // defaultValue={userData?.mobile}
              className="text-white placeholder:text-gray-500"
            />
          </Form.Item>
          <Form.Item
            name="name_of_persons"
            label="Your Full Name"
            rules={[
              {
                required: true,
                message: "Please input your Name",
              },
            ]}
          >
            <Input
              type="text"
              placeholder="Name of Person"
              className="text-white placeholder:text-gray-300"
            />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email Address"
            rules={[
              {
                required: true,
                message: "Please input your Email",
              },
            ]}
          >
            <Input
              type="text"
              placeholder="Email"
              className="text-white placeholder:text-gray-300"
            />
          </Form.Item>

          <Form.Item label="Ticket Quantity">
            <div className="flex justify-between">
              <p className="text-white"> {ticketQuantity}</p>
              <p className="text-white">
                <span>Conv Fees :</span> ₹ {EventData?.event_convenience_fees}
              </p>
              <p className="text-white">
                <span>Amount :</span> ₹{" "}
                {(Tickets.price + EventData?.event_convenience_fees) *
                  ticketQuantity}
              </p>
            </div>
          </Form.Item>

          <Form.Item className="w-full flex  justify-center">
            <Button
              type="primary"
              htmlType="submit"
              className="sm:w-96 w-44 h-10 "
            >
              Book Tickets
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default TicketCategoryCard;
