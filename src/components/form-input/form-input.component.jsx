import React from "react";

const FormInput = ({
  onInputChangeHandler,
  label,
  direction,
  ...otherProps
}) => {
  return (
    <div className="input-group">
      <input
        className={`form-input ${direction ? "left-input" : ""}`}
        onChange={onInputChangeHandler}
        {...otherProps}
      />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
