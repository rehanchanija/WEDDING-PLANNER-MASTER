import { gql } from "@apollo/client";

export const GET_EVENT = gql`
  query GetEvent {
    getEvents {
      event_name
      event_category
      _id
      event_date
      event_start_at
      event_description
      event_terms
      event_instructions
      event_FAQ
      event_artist
      event_duration
      event_location
      event_address
      event_city
      event_state
      event_banner
      event_banner_desktop
      event_youtube_url
      event_status
      state
    }
  }
`;

export const GET_EVENT_BY_PARAM = gql`
  query GetEventByParam($_id: ID, $event_category: String) {
    getEventByParams(input: { _id: $_id, event_category: $event_category }) {
      event_name
      event_category
      _id
      event_date
      event_start_at
      event_description
      event_terms
      event_instructions
      event_FAQ
      event_artist
      event_duration
      event_location
      event_address
      event_city
      event_state
      event_banner
      event_banner_desktop
      event_youtube_url
      event_convenience_fees
      event_status
      state
      artists {
        _id
        name
        ratings
        image
        description
      }
    }
  }
`;

export const GET_ARTISTS = gql`
  query GetArtists {
    getArtists {
      _id
      name
      ratings
      image
      desktopImage
      description
    }
  }
`;

export const GET_TICKETS = gql`
  query GetTickets {
    getTickets {
      _id
      eventId
      ticketType
      ticketPrice
      ticketDescription
      ticketColor
      isBooked
      ticketId
    }
  }
`;

export const GET_TICKETS_BY_PARAMS = gql`
  query GetTicketsParams(
    $eventId: ID
    $quantity: Int
    $ticketType: String
    $isBooked: Boolean
    $_id: ID
  ) {
    getTicketByParams(
      input: {
        eventId: $eventId
        quantity: $quantity
        ticketType: $ticketType
        isBooked: $isBooked
        _id: $_id
      }
    ) {
      _id
      eventId
      ticketType
      ticketPrice
      ticketDescription
      ticketColor
      isBooked
      ticketId
    }
  }
`;

export const GET_TICKETS_BY_GROUP = gql`
  query GetTicketsGroup($eventId: ID!) {
    getTicketByGroup(input: { eventId: $eventId }) {
      _id
      count
      color
      price
      description
      BookedCount
      UnBookedCount
      ticket {
        _id
        ticketType
        ticketPrice
        ticketDescription
        ticketColor
        isBooked
        ticketId
      }
    }
  }
`;

export const GET_AGENT = gql`
  query getAgent {
    getUserByParams(input: { type: "Agent" }) {
      name
      _id
      email
      mobile
      type
    }
  }
`;

export const DELETE_AGENT = gql`
  mutation DeleteAgent($id: ID!) {
    deleteUser(id: $id) {
      _id
    }
  }
`;

export const GET_BOOKINGS = gql`
  query getBookings {
    getBookings {
      _id
      event_id
      user_id
      ticket_id
      ticket_type
      booking_status
      booking_quantity
      booking_total_amount
      booking_payment_method
      name_of_persons
      seats
      paymentStatus
      bookedBy
      bookedFrom
      event_name
      event_date
      event_name
      event_date
    }
  }
`;

export const GET_PARTNERS = gql`
  query GetPartners {
    getPartners {
      _id
      name
      description
      image
      location
    }
  }
`;

export const GET_BOOKINGS_BY_PARAMS = gql`
  query GetBookingByParams($_id: ID, $user_id: ID) {
    getBookingByParams(input: { _id: $_id, user_id: $user_id }) {
      _id
      event_id
      user_id
      ticket_id
      ticket_type
      booking_status
      booking_quantity
      booking_total_amount
      booking_payment_method
      name_of_persons
      seats
      paymentStatus
      event_name
      event_date
      bookedBy
      paymentId
      bookedFrom
      event_banner
    }
  }
`;

export const GET_CHIEFGUESTS = gql`
  query GetChiefGuests {
    getChiefGuests {
      _id
      name
      description
      image
    }
  }
`;

export const GET_ARTIST_BY_ID = gql`
  query GetArtistById($_id: ID!) {
    getArtistByID(_id: $_id) {
      _id
      name
      ratings
      image
      desktopImage
      description
    }
  }
`;

export const GET_EVENT_CATEGORIES = gql`
  query GetEventCategories {
    getEventCategories {
      _id
      name
    }
  }
`;
