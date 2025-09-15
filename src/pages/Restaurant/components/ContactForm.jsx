import { useState } from "react";
import { useRestaurantContext } from "../context/RestaurantContext";

export const ContactForm = ({ onCancel, onGoBack }) => {
  const [contactFormData, setContactFormData] = useState({
    name: null,
    phone: null,
  });
  const { setContactForm, resStore } = useRestaurantContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!contactFormData.name || !contactFormData.phone) {
      alert("please enter name and phone no.");
      return;
    } else {
      setContactForm({
        formData: contactFormData,
      });
      console.log("resStore ==> ", resStore);
    }
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        className="border border-black rounded"
        onChange={(e) =>
          setContactFormData({
            ...contactFormData,
            name: e.target.value,
          })
        }
        onFocus={(e) =>
          setContactFormData({
            ...contactFormData,
            name: e.target.value,
          })
        }
      />
      <label htmlFor="phone">Phone:</label>
      <input
        type="number"
        id="phone"
        className="border border-black rounded"
        onChange={(e) =>
          setContactFormData({
            ...contactFormData,
            phone: e.target.value,
          })
        }
        onFocus={(e) =>
          setContactFormData({
            ...contactFormData,
            phone: e.target.value,
          })
        }
      />
      <button className="bg-blue-500 text-white font-semibold rounded-md px-4 py-2">
        Submit
      </button>
      <button onClick={onCancel} type="button">
        Cancel
      </button>
      <button onClick={onGoBack} type="button">
        Go back
      </button>
    </form>
  );
};
