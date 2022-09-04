import React, { Fragment, useState, useEffect } from 'react';
import InputValidator from '../utils/inputValidator';

const useFormInputValidation = (formFields: IFormFieldObj, rules: IRules): [fields: IFormFieldObj, errors: any, form: InputValidator] => {
    const [fields, setFields] = useState<IFormFieldObj>(formFields);
    let [errors, setErrors] = useState<IErrors | null>(null);
    let form = new InputValidator(setFields, fields, setErrors, errors, rules);

    return [fields, errors, form];
};

export default useFormInputValidation;

