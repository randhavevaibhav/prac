import Modal from "../../components/common/Modal";
import { useState } from "react";
import { SelectNoOfGuests } from "./components/SelectNoOfGuests";
import { SelectDate } from "./components/SelectDate";
import { SelectTime } from "./components/SelectTime";
import { ContactForm } from "./components/ContactForm";
import { RestaurantContextProvider, useRestaurantContext } from "./context/RestaurantContext";


const Restaurant = () => {
  const [bookingModal, setBookingModal] = useState(false);
  const [contactModal, setContactModal] = useState(false);
  const { resStore } = useRestaurantContext();

  const validateBooking = () => {
    //validate if need
  };
  return (
    <div>
      <h2 className="text-xl font-semibold underline tracking-wide">
        Restaurant Booking
      </h2>

      <button onClick={() => setBookingModal(true)}>Book Table</button>
      {bookingModal ? (
        <Modal>
          <Modal.ModalBody
            onClose={() => setBookingModal(false)}
            title="Book a table"
          >
            <div>
              <SelectNoOfGuests />
              <SelectDate />
              <SelectTime />
              <button
                className="px-4 py-2 font-semibold bg-blue-500 text-white rounded-md"
                onClick={() => {
                  validateBooking();
                  setBookingModal(false);
                  setContactModal(true);
                }}
              >
                Book Now
              </button>
            </div>
          </Modal.ModalBody>
        </Modal>
      ) : null}

      {contactModal ? (
        <Modal>
          <Modal.ModalBody title="Contact details" isControlled={false}>
            <div>
              <p>
                You are making a reservation for{" "}
                <b>{`${resStore.guests} persons`}</b> on{" "}
                <b>{`${resStore.date}`}</b> at <b>{`${resStore.time}`}</b>
                <ContactForm onCancel={() => setContactModal(false)} onGoBack={()=>{
                  setContactModal(false);
                  setBookingModal(true)
                }}/>
              </p>
            </div>
          </Modal.ModalBody>
        </Modal>
      ) : null}
    </div>
  );
};

const App = () => {
  return (
    <RestaurantContextProvider>
      <Restaurant />
    </RestaurantContextProvider>
  );
};

export default App;
