import { useState } from "react";
import refrigerateIcon from "../../assets/icons/refrigerate.svg";
import "./Navbar.css";
import { Form } from "../form/Form";

export const Navbar = () => {
  const [hide, setHide] = useState(false);
  const handleChange = () => {
    hide !== true ? setHide(true) : setHide(false);
  };
  return (
    <nav>
      <div className="navbar-container">
        <div className="container navbar-items">
          <div className="logo-contianer">
            <img
              src={refrigerateIcon}
              className="logoIcon"
              alt="refrigerateIcon"
            />
            <p>Your Fridge</p>
          </div>
          {/* mark for the add item button */}
          <button onClick={handleChange} className="navbar-btn">
            Add Item
          </button>
        </div>
      </div>

      {/* markup for the modal */}
      {hide && (
        <div className="modal">
          <div className="modal-container">
            <div className="modal-info">
              <div>
                <h2 className="modal-sub-header">NEW ITEM</h2>
                <h1 className="modal-header">Add to frigde</h1>
              </div>
              <button onClick={handleChange} className="modal-close-btn">
                +
              </button>
            </div>
            <Form />
          </div>
        </div>
      )}
    </nav>
  );
};
