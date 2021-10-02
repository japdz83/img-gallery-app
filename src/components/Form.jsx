import React from "react";
import PropTypes from "prop-types";

const Form = ({ handleSubmit }) => {
  return (
    <>
      <form onSubmit={handleSubmit} className="m-3 row">
        <label className="form-label w-100 p-1 ">
          {" "}
          <input
            className="form-control"
            type="text"
            name="inputText"
            placeholder="Buscar Imagen"
          />{" "}
        </label>
        <button type="submit" className="btn btn-primary m-2">
          <i className="fas fa-search"></i> Buscar...
        </button>
      </form>
    </>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func,
};

export default Form;
