import { useState, useEffect } from "react";

function useForm() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const [errors, serErrors] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return { handleChange, values };
}

export default useForm;
