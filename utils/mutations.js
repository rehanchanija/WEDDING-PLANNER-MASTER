import { gql } from "@apollo/client";

export const USER_LOGIN = gql`
  mutation UserLogin($email: String!, $password: String!) {
    userLogin(email: $email, password: $password) {
      token
      user {
        _id
        name
        email
        mobile
        type
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser(
    $name: String!
    $email: String!
    $mobile: String!
    $password: String!
    $type: String!
  ) {
    addUser(
      name: $name
      email: $email
      mobile: $mobile
      password: $password
      type: $type
      registeredFrom: "Website"
    ) {
      _id
      name
      email
      mobile
      password
      type
    }
  }
`;

export const CREATE_BOOKING = gql`
  mutation CreateBooking(
    $event_id: ID!
    $ticket_id: [ID]!
    $ticket_type: String!
    $user_id: ID!
    $booking_status: String!
    $booking_quantity: Int!
    $booking_total_amount: Int!
    $email: String
    $name_of_persons: [String]
    $dob: String
    $anniversary: String
    $address: String
    $phone_number: String
    $booking_payment_method: String!
    $seats: [String]!
    $paymentStatus: String!
    $bookedBy: String!
    $bookedFrom: String!
  ) {
    addBooking(
      event_id: $event_id
      ticket_id: $ticket_id
      ticket_type: $ticket_type
      user_id: $user_id
      booking_status: $booking_status
      booking_quantity: $booking_quantity
      email: $email
      name_of_persons: $name_of_persons
      dob: $dob
      anniversary: $anniversary
      address: $address
      phone_number: $phone_number
      booking_total_amount: $booking_total_amount
      booking_payment_method: $booking_payment_method
      seats: $seats
      paymentStatus: $paymentStatus
      bookedBy: $bookedBy
      bookedFrom: $bookedFrom
    ) {
      _id
      booking_total_amount
    }
  }
`;

export const UPDATE_BOOKING = gql`
  mutation UpdateBooking(
    $booking_id: ID!
    $booking_status: String!
    $paymentStatus: String!
    $paymentId: String!
  ) {
    updateBooking(
      _id: $booking_id
      input: {
        booking_status: $booking_status
        paymentStatus: $paymentStatus
        paymentId: $paymentId
      }
    ) {
      _id
      booking_status
      paymentStatus
      paymentId
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($user_id: ID!, $password: String!) {
    updateUser(_id: $user_id, input: { password: $password }) {
      _id
      password
    }
  }
`;

export const FORGOT_PASSWORD = gql`
  mutation ForgotPassword($email: String!) {
    forgotPassword(email: $email) {
      message
    }
  }
`;

export const LOGIN_WITH_OTP = gql`
  mutation LoginWithOtp($mobile: String!) {
    loginWithOtp(mobile: $mobile) {
      otp
    }
  }
`;

export const VERIFY_OTP = gql`
  mutation verifyOtp($mobile: String!, $otp: String!) {
    verifyOtp(input: { mobile: $mobile, otp: $otp }) {
      token
      user {
        _id
        name
        email
        mobile
        type
      }
    }
  }
`;

export const RESEND_OTP = gql`
  mutation resendOtp($phone: String!) {
    resendOTP(phone: $phone) {
      otp
    }
  }
`;

export const USER_DETAILS_UPDATE = gql`
  mutation UpdateUser(
    $id: ID!
    $name: String
    $email: String
    $phone: String
    $userType: String
    $status: String
    $credit: Int
  ) {
    updateUserDetails(
      _id: $id
      input: {
        name: $name
        email: $email
        mobile: $phone
        type: $userType
        status: $status
        credit: $credit
      }
    ) {
      _id
    }
  }
`;

export const ADD_CONTACT_REQ = gql`
  mutation AddContactReq(
    $name: String!
    $email: String!
    $message: String!
    $mobile: String!
    $category: String!
  ) {
    addContact(
      name: $name
      email: $email
      message: $message
      mobile: $mobile
      category: $category
    ) {
      _id
    }
  }
`;
