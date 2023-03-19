import { ChangeEvent, useState } from "react";

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const clearValue = () => {
    setValue("");
  };
  return {
    value,
    onChange: handleChange,
    clearValue,
  };
};

export { useInput };
