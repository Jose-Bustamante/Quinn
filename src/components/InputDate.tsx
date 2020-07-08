import React from "react";

interface InputDateProps {
  id: string;
  name: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputDate: React.FC<InputDateProps> = ({
  id,
  name,
  defaultValue = "2017-06-01",
}) => {
  return <input type="date" id={id} name={name} defaultValue={defaultValue} />;
};
