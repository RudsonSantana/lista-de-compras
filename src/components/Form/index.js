import React from "react";
import { FaPlus } from "react-icons/fa";
import { PropTypes } from "prop-types";
import './Form.css';


export default function Form({ handleChange, handleSubmit, newItem }) {
  return (
    <form className="form" action="#" onSubmit={handleSubmit}>
      <input className="input-name" onChange={handleChange} type="text" value={newItem} />
      <button type="submit"><FaPlus /></button>

    </form>
  )
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  newItem: PropTypes.string.isRequired,
}
