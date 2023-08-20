import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../Redux/actions";
import React from "react";
function ContactForm() {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    status: "active",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSave = () => {
    dispatch(addContact(form));
  };

  return (
    <div className="w-1/2 mx-auto my-4 pt-16">
      <h2 className="text-2xl text-white font-bold mb-4">
        <button className="rounded-full shadow shadow-slate-700 font-bold bg-blue-600 p-3 text-2xl">
          Create Contact
        </button>
      </h2>
      <div className="mb-4">
        <label className="block font-bold mb-2" htmlFor="first-name">
          First Name
        </label>
        <input
          className="w-full border text-center border-blue-400 p-2 rounded-full"
          id="first-name"
          type="text"
          name="first_name"
          value={form.first_name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-2" htmlFor="last-name">
          Last Name
        </label>
        <input
          className="w-full border text-center border-blue-400 p-2 rounded-full"
          id="last-name"
          type="text"
          name="last_name"
          value={form.last_name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <h2>Select Status</h2>
        <label>
          <input
            className="accent-green-700"
            name="status"
            type="radio"
            value="active"
            checked={form.status === "active"}
            onChange={handleChange}
          />
          Active
        </label>
        <label className="m-2">
          <input
            className="accent-red-700"
            name="status"
            type="radio"
            value="inactive"
            checked={form.status === "inactive"}
            onChange={handleChange}
          />
          Inactive
        </label>
      </div>
      <button
        className="bg-blue-700 hover:bg-blue-600 shadow-md text-white font-bold py-2 px-4 rounded"
        onClick={handleSave}
      >
        Save Contact
      </button>
    </div>
  );
}
export default ContactForm;
