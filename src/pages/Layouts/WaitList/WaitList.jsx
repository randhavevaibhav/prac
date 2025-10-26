import { useRef, useState } from "react";
import { SelectList } from "./SelectList";
import { Input } from "./Input";

const specialtyList = [
  {
    id: 0,
    name: "Select specialty",
    value: "Default",
  },
  {
    id: 1,
    name: "Doctor",
    value: "DR",
  },
  {
    id: 2,
    name: "Engineer",
    value: "Eng",
  },
];

const stateList = [
  {
    id: 0,
    name: "State",
    value: "Default",
  },
  {
    id: 1,
    name: "Maharashtra",
    value: "MH",
  },
  {
    id: 2,
    name: "Delhi",
    value: "DL",
  },
];

const cityList = [
  {
    id: 0,
    name: "City",
    value: "Default",
  },
  {
    id: 1,
    name: "Pune",
    value: "Pn",
  },
  {
    id: 2,
    name: "Kanpur",
    value: "KP",
  },
];

const TwoColumn = ({ children }) => {
  return <div className="grid md:grid-cols-2 grid-cols-1 gap-4">{children}</div>;
};

const WaitList = () => {
  const [formData, setFormData] = useState({
    first_name:"",
    last_name:"",
    email:"",
  });

  const handleInputChange = (e) => {
    const inputFieldValue = e.target.value;
    const inputFieldName = e.target.name;

    const newFormData = {
      ...formData,
      [inputFieldName]: inputFieldValue,
    };
    setFormData(newFormData);
  };

  const handleSelectChange = ({ fieldName, value }) => {
    const selectFieldName = fieldName;
    const selectFieldValue = value;

    const newFormData = {
      ...formData,
      [selectFieldName]: selectFieldValue,
    };
    setFormData(newFormData);
  };

  const handleFormSubmit=(e)=>{
    e.preventDefault()
    console.log("formData ==> ",formData)
  }

  return (
    <main>
      WaitList
      <form className="border max-w-[600px] md:p-6 p-4" onSubmit={handleFormSubmit}>
        <header>
          <h3 className="font-extrabold text-xl text-center">Join Wait List</h3>
          <p className="text-[14px] text-center max-w-[30rem] mx-auto">
            Fill out the form below to stay up to date and be among the first to
            access to the Lume card.
          </p>
        </header>

        <div className=" grid grid-cols-1 gap-4">
          <TwoColumn>
            <Input
              type="text"
              placeholder="First Name"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              placeholder="Last Name"
              id="last_name"
              name="last_name"
               value={formData.last_name}
              onChange={handleInputChange}
            />
          </TwoColumn>
          <Input
            type="email"
            placeholder="E-mail"
            id="email"
            name="email"
             value={formData.email}
            onChange={handleInputChange}
          />

          <SelectList
            selectList={specialtyList}
            defaultValue={`Select Specialty`}
            fieldName={`Specialty`}
            onSelect={handleSelectChange}
          />

          <TwoColumn>
            <SelectList
              selectList={stateList}
              defaultValue={`State`}
              fieldName={`state`}
              onSelect={handleSelectChange}
            />
            <SelectList
              selectList={cityList}
              defaultValue={`City`}
              fieldName={`city`}
              onSelect={handleSelectChange}
            />
          </TwoColumn>
          <button className="border rounded p-2 text-white bg-violet-500 font-semibold rounded-xl"  type="submit">Submit</button>
        </div>
      </form>
    </main>
  );
};

export default WaitList;
