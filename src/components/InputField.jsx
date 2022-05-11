import { useState } from "react";

export default function InputField({ setup, state, check }) {
  const [isTouched, setIsTouched] = useState(false);
  const { label, type, placeholder, error, key } = setup;
  const [getter, setter] = state;
  const hasError = !check(getter[key]) && isTouched;

  function onChangeHandler(event) {
    const cloneGetter = { ...getter };
    cloneGetter[key] = event.target.value;
    setter(cloneGetter);
  }
  function onBlurHandler() {
    setIsTouched(true);
  }

  return (
    <label>
      {label}
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        value={getter[key]}
      />
      <small>{hasError && error}</small>
    </label>
  );
}
