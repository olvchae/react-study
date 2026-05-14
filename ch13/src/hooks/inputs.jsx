import { REGEX } from "../constants/regex";
import { useEffect, useState } from 'react';

export function useInput({initValue}) {
    const [ inputValues, setInputValues ] = useState(initValue);
    const [ isValid, setValid ] = useState(false);
    
    useEffect(() => {
      const entries = Object.entries(inputValues);
      const ValidList = entries.filter(([key, value]) => {
        const regex = REGEX[key];
        if (!regex) return true;
        return regex.test(value);
      })

      setValid(ValidList.length === entries.length);

    }, [inputValues]);
    

    const handleInputOnChange = (e) => {
      const {name, value} = e.target;

      setInputValues({
        ...inputValues,
        [name]: value,
      })
    }

    return {
        inputValues,
        setInputValues,
        isValid,
        handleInputOnChange
    }
}