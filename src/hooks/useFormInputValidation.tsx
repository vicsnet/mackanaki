import { useState, useEffect } from 'react';
import InputValidator from '../utils/inputValidator';

const useFormInputValidation = (formFields: IFormFieldObj, rules: IRules): [fields: IFormFieldObj, errors: IErrors | null, form: InputValidator, isvalidForm: boolean] => {
    const [fields, setFields] = useState<IFormFieldObj>(formFields);
    let [errors, setErrors] = useState<IErrors>({});
    let [tempPassword, setTempPassword] = useState("");
    let form = new InputValidator(setFields, fields, setErrors, errors, rules, tempPassword, setTempPassword);


    let isEmptyInput = Object.values(fields).some(field => field.trim().length === 0);
    console.log(form.isFormValid, isEmptyInput);
    let validFormData: boolean;
    if (form.isFormValid === false && isEmptyInput === false) {
        validFormData = false;
    } else {
        validFormData = true;
    }
    // useEffect(() => {
    // form.isFormValid &&
    //     form._getFieldsValuesOnLoad();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);
    return [fields, errors, form, validFormData];
};

export default useFormInputValidation;

