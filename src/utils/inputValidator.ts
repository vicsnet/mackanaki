import validator from 'validator';


export default class InputValidator {
    private _setFields: React.Dispatch<React.SetStateAction<IFormFieldObj>>;
    private _fields: IFormFieldObj;
    private _errorBag: React.Dispatch<React.SetStateAction<IErrors | null>>;
    private _errors: IErrors | null;
    private _rules: IRules;
    private _tempFieldBag: { [props: string]: string; } = {};
    private _tempPasswordValue: string = "";



    constructor (setFields: React.Dispatch<React.SetStateAction<IFormFieldObj>>, fields: IFormFieldObj, errorBag: React.Dispatch<React.SetStateAction<IErrors | null>>, errors: IRules | null, rules: IRules) {
        this._setFields = setFields;
        this._fields = fields;
        this._errorBag = errorBag;
        this._errors = errors;
        this._rules = rules;

        // this._password('MaxPatrick12.');
        // console.log(this._confirmPassword('MaxPatrick12.'));
    }

    private get _isFieldsAndRulesValid() {
        return Object.keys(this._fields).every(field => {
            return Object.keys(this._rules).includes(field);
        });
    }


    _getAllFieldRules() {
        if (this._isFieldsAndRulesValid) {
            let obj = Object.keys(this._fields).reduce((prev, current) => {
                if (Object.keys(this._rules).includes(current)) {
                    prev[current] = this._rules[current];
                }
                return prev;
            }, {} as { [props: string]: string; });

            Object.entries(obj).forEach(([key, rules]) => {
                const rulesArr = rules.split('|');
                if (Object.keys(this._tempFieldBag).includes(key)) {
                    console.log(this._tempFieldBag[key]);
                    this._validate(rulesArr, key, this._tempFieldBag[key]);
                }
            });
        }
    }

    _getFieldsValuesOnLoad() {
        if (this._isFieldsAndRulesValid) {
            let obj = Object.keys(this._fields).reduce((prev, current) => {
                if (Object.keys(this._rules).includes(current)) {
                    prev[current] = this._rules[current];
                }
                return prev;
            }, {} as { [props: string]: string; });
            Object.entries(obj).forEach(([key, rules]) => {
                const rulesArr = rules.split('|');
                if (Object.values(rulesArr).includes('required')) {
                    this._errorBag((prev) => ({
                        ...prev,
                        [key]: `${key} is required`
                    }));
                }
            });
        }
    }

    get isFormValid(): boolean {
        if (this._errors === null) return true;
        if (Object.keys(this._errors).length === 0) return true;
        return false;
    }



    private _validate(rules: string[], keys: string, value: string) {

        rules.forEach(rule => {
            if (rule === 'required') {
                if (this._required(value)) {
                    this._errorBag((prev) => ({
                        ...prev,
                        [keys]: `${keys} is required`
                    }));
                } else {
                    this._errorBag((prev) => {
                        const copy = { ...prev };
                        delete copy[keys];
                        return copy;
                    });
                }
            }

            if (rule === 'email') {
                if (this._email(value)) {
                    this._errorBag((prev) => ({
                        ...prev,
                        [keys]: `Invalid ${keys}`
                    }));
                } else {
                    this._errorBag((prev) => {
                        const copy = { ...prev };
                        delete copy[keys];
                        return copy;
                    });
                }
            }
            
            if (rule === 'password') {
                if (this._password(value)) {
                    this._errorBag((prev) => ({
                        ...prev,
                        [keys]: `${keys} is not strong`
                    }));
                } else {
                    this._errorBag((prev) => {
                        const copy = { ...prev };
                        delete copy[keys];
                        return copy;
                    });
                }
            }
            if (rule === 'comfirm_password') {
                if (this._confirmPassword(value)) {
                    this._errorBag((prev) => ({
                        ...prev,
                        [keys]: `That ${keys} doesn't match.`
                    }));
                } else {
                    this._errorBag((prev) => {
                        const copy = { ...prev };
                        delete copy[keys];
                        return copy;
                    });
                }
            }
            if (rule === 'email') {
                if (this._email(value)) {
                    this._errorBag((prev) => ({
                        ...prev,
                        [keys]: `Invalid ${keys}`
                    }));
                } else {
                    this._errorBag((prev) => {
                        const copy = { ...prev };
                        delete copy[keys];
                        return copy;
                    });
                }
            }
            if (rule === 'email') {
                if (this._email(value)) {
                    this._errorBag((prev) => ({
                        ...prev,
                        [keys]: `Invalid ${keys}`
                    }));
                } else {
                    this._errorBag((prev) => {
                        const copy = { ...prev };
                        delete copy[keys];
                        return copy;
                    });
                }
            }

        });

    }


    // ******* INPUT VALIDATORS START ********* //
    private _required(value: string): boolean {
        if (value.trim().length < 1) {
            return true;
        }
        return false;
    }


    private _email(value: string) {
        if (!validator.isEmail(value)) {
            return true;
        }
        return false;
    }

    private _password(value: string) {
        let result = validator.isStrongPassword(value, { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1, returnScore: false });
        if (result) {
            this._tempPasswordValue = value;
            return true;
        }
        this._tempPasswordValue = "";
        return false;

    }

    private _confirmPassword(value: string) {
        if (this._tempPasswordValue === value) {
            return true;
        }
        return false;
    }

    private _minLength(minLengthValue: string, value: string) {
        const minLengthArr = minLengthValue.split(':');
        const min = minLengthArr[minLengthArr.length - 1];
        if (value.length <= +min) {
            return true;
        }
        return false;
    }

    private _maxLength(maxLengthValue: string, value: string) {
        const maxLengthArr = maxLengthValue.split(':');
        const max = maxLengthArr[maxLengthArr.length - 1];
        if (value.length <= +max) {
            return true;
        }
        return false;
    }

    private _min(minLength: string, value: number) {
        const minArr = minLength.split(':');
        const min = minArr[minArr.length - 1];
        if (value <= +min) {
            return true;
        }
        return false;
    }

    private _max(maxLength: string, value: number) {
        const maxArr = maxLength.split(':');
        const max = maxArr[maxArr.length - 1];
        if (value <= +max) {
            return true;
        }
        return false;
    }
    // ******* INPUT VALIDATORS END ******** //


    handleChangeEvent(e: React.ChangeEvent<HTMLInputElement>) {
        this._setFields((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));

        // this._tempFieldBag = { ...this._tempFieldBag, [e.target.name]: e.target.value, 'error': 'new field is required' };
        this._tempFieldBag = { ...this._tempFieldBag, [e.target.name]: e.target.value };
        this._getAllFieldRules();
    };

    onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log('Submitted');
        // if (Object.keys(error).length === 0) {
        //     toast.success('Form submitted successfully', {
        //         position: "top-right",
        //         autoClose: 5000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //     });
        // } else {
        //     Object.entries(error).forEach(([name, message]) => {
        //         toast.error(message, {
        //             position: "top-right",
        //             autoClose: 5000,
        //             hideProgressBar: false,
        //             closeOnClick: true,
        //             pauseOnHover: true,
        //             draggable: true,
        //             progress: undefined,
        //         });
        //     });

        // }
    };


    // const validateData = ({ prop, message }: { [prop: string]: string; message: string; }) => {
    //     setError((prev) => ({
    //         ...prev,
    //         [prop]: message
    //     }));
    // };


    // const errorExist = Object.keys(error).length !== 0;
    // console.log(error);



}