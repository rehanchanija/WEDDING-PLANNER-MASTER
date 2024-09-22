import { useMutation } from "@apollo/client";
import React from "react";
import { toast } from "react-toastify";
import { ADD_CONTACT_REQ } from "../utils/mutations";

const ContactUs = () => {
  const [addContact, { error }] = useMutation(ADD_CONTACT_REQ, {
    onCompleted: (data) => {
      console.log(data);
      toast.success("Your message has been sent successfully");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Something went wrong");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.getElementById("my_form");
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log(data);
    addContact({
      variables: {
        name: data.name,
        email: data.email,
        message: data.message,
        mobile: data.mobile,
        category: data.category,
      },
    });
    form.reset();
  };

  return (
    <div className="text-black">
      <section className="text-white body-font">
        <div className="container px-5 pt-6 pb-10 mx-auto">
          <div className="text-center mb-6">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-black mb-4">
              Contact Us
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-black">
              If you have any questions or concerns, please feel free to contact
              us at the conatct details given below any time. We will get back
              to you as soon as possible.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
            </div>
          </div>
          <div className="sm:w-1/2 flex flex-col mx-auto md:ml-auto w-full md:py-4 mt-4 md:mt-0 px-2 pb-4">
            <h2 className="text-black text-lg mb-1 font-medium title-font text-center">
              Drop Us A Line
            </h2>
            <p className="leading-relaxed mb-5 text-black text-center">
              Contact us for any questions or concerns.
            </p>
            <form method="post" id="my_form" onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-black">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  name="name"
                  className="w-full bg-gray-700 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-black">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-gray-700 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="mopbile"
                  className="leading-7 text-sm text-black"
                >
                  Mobile Number (10 digits)
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  required
                  pattern="[0-9]{10}"
                  className="w-full bg-gray-700 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-black">
                  Select Category
                </label>
                <select
                  name="category"
                  id="category"
                  className="w-full bg-gray-700 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                >
                  <option value="ticketsupport">Ticket Support</option>
                  <option value="refund">Refund</option>
                  <option value="enquiry">Enquiry</option>
                  <option value="complaints">Complaints</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-black"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full bg-gray-700 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  defaultValue={""}
                />
              </div>
              <div className="flex justify-center">
                <a href="tel:+919827159595"
                  className="px-7 py-2 font-medium   hover:shadow-2xl shadow-primary  bg-primary text-white border border-primary rounded-lg"
                >
                  Submit
                </a>
              </div>
            </form>
          </div>
          <div className="flex flex-wrap ">
            <div className="p-4 md:w-[32%] w-full flex flex-col text-center items-center border rounded-2xl m-2">
              <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg
                  className="eUuXwBkW5W4__eatjSfd RRXFBumaW2SHdseZaWm6 ErtfuPDAbVhbrEDAXyPl _dvU7XkD_gq8rV5MWJnx cmyOlpMdB9WCo6ZbMyYL jt7K__cy_iHy7aMDMaLX"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-black text-lg title-font font-medium mb-3">
                  Company information:
                </h2>
                <p className="leading-relaxed text-base text-black">
                Dreamz 24 - Events & Entertainment Solutions.

                </p>
              </div>
            </div>
            <div className="p-4 md:w-[32%] w-full flex flex-col text-center items-center border rounded-2xl m-2">
              <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg
                  className="eUuXwBkW5W4__eatjSfd RRXFBumaW2SHdseZaWm6 ErtfuPDAbVhbrEDAXyPl _dvU7XkD_gq8rV5MWJnx cmyOlpMdB9WCo6ZbMyYL jt7K__cy_iHy7aMDMaLX"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-black text-lg title-font font-medium mb-3">
                  Address:
                </h2>
                <p className="leading-relaxed text-base">
                  <a
                    className=" text-black inline-flex items-center"
                  >
                    Arihant Complex, #13, Ground, Raipur, Chhattisgarh 492001

                  </a>
                </p>
              </div>
            </div>
            <div className="p-4 md:w-[32%] w-full flex flex-col text-center items-center border rounded-2xl m-2">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx={12} cy={7} r={4} />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-black text-lg title-font font-medium mb-3">
                  Call us:
                </h2>
                <p className="leading-relaxed text-base text-black">98271 59595</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
