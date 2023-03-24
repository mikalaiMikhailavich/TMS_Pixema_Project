import { ChangeEvent, useEffect, useState } from "react";

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const clearValue = () => {
    setValue("");
  };

  const setCustomValue = (customValue: string) => {
    setValue(customValue);
  };
  const setToDefault = () => {
    setValue(initialValue);
  };

  return {
    value,
    handleChange,
    clearValue,
    setCustomValue,
    setToDefault,
  };
};

export { useInput };
