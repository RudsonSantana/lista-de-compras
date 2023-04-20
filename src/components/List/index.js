import React from "react";
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import { PropTypes } from 'prop-types';
import './List.css';


export default function List({ items, handleEdit, handleDelete }) {
  return (
    <ul className="list">
      {items.map((item, index) => (
        <li key={item} > {item}
          <span>
            <FaEdit onClick={(e) => handleEdit(e, index)} className="edit" />
            <FaWindowClose onClick={(e) => handleDelete(e, index)} className="delete" />
          </span>
        </li>
      ))}
    </ul>
  )
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
}
