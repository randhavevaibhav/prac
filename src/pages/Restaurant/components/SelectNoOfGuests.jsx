import { useState } from "react";
import { useRestaurantContext } from "../context/RestaurantContext";
import Modal from "../../../components/common/Modal";

export const SelectNoOfGuests = () => {
  const [openModal, setOpenModal] = useState(false);
  const { resStore, addGuests } = useRestaurantContext();
  return (
    <div className="p-2 border border-black flex justify-between">
      <span className="font-semibold">Select Guests :</span>
      <button onClick={() => setOpenModal(true)}>
        {resStore.guests} Guests
      </button>
      {openModal ? (
        <div>
          <Modal>
            <Modal.ModalBody isControlled={false} title="Select Guests">
              <div className="flex items-center justify-between">
                <span>Select Guests:</span>
                <div
                  onClick={(e) => {
                    setOpenModal(false);
                    const totalGuests = parseInt(
                      e.target.getAttribute("data-no-guests")
                    );
                    if (totalGuests) {
                      addGuests({ guests: totalGuests });
                    }
                  }}
                >
                  <button className="p-2" data-no-guests={1}>
                    1
                  </button>
                  <button className="p-2" data-no-guests={2}>
                    2
                  </button>
                  <button className="p-2" data-no-guests={3}>
                    3
                  </button>
                  <button className="p-2" data-no-guests={4}>
                    4
                  </button>
                </div>
              </div>
            </Modal.ModalBody>
          </Modal>
        </div>
      ) : null}
    </div>
  );
};