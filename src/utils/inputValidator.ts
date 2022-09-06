import validator from 'validator';
import { toast } from 'react-toastify';


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
        // console.log(this._minLength('min:3', '4kuo'));
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

    private _arratToStringLastPosition(rule: string) {
        const result = rule.split(':');
        return result[result.length - 1];
    }

    private _validate(rules: string[], keys: string, value: string) {

        if (rules.includes('required')) {
            if (this._required(value)) {
                this._errorBag((prev) => ({
                    ...prev,
                    [keys]: `${keys} is required`
                }));
                return;
            } else {
                this._errorBag((prev) => {
                    const copy = { ...prev };
                    delete copy[keys];
                    return copy;
                });
            }
        }

        if (rules.includes('email')) {
            if (this._email(value)) {
                this._errorBag((prev) => ({
                    ...prev,
                    [keys]: `Invalid ${keys}`
                }));
                return;
            } else {
                this._errorBag((prev) => {
                    const copy = { ...prev };
                    delete copy[keys];
                    return copy;
                });
            }
        }

        if (rules.includes('password')) {
            if (this._password(value)) {
                this._errorBag((prev) => ({
                    ...prev,
                    [keys]: `${keys} is not strong`
                }));
                return;
            } else {
                this._errorBag((prev) => {
                    const copy = { ...prev };
                    delete copy[keys];
                    return copy;
                });
            }
        }
        // if (rule === 'confirm_password') {
        //     if (this._confirmPassword(value)) {
        //         this._errorBag((prev) => ({
        //             ...prev,
        //             [keys]: `${keys} doesn't match.`
        //         }));
        //     } else {
        //         this._errorBag((prev) => {
        //             const copy = { ...prev };
        //             delete copy[keys];
        //             return copy;
        //         });
        //     }
        // }

        let minLengthRule = rules.find(value => /minLength:/.test(value));
        if (typeof minLengthRule !== "undefined") {
            const min = this._arratToStringLastPosition(minLengthRule);
            if (this._minLength(min, value)) {
                this._errorBag((prev) => ({
                    ...prev,
                    [keys]: `Input value should be greater than or equal to ${min} characters`
                }));
                return;
            } else {
                this._errorBag((prev) => {
                    const copy = { ...prev };
                    delete copy[keys];
                    return copy;
                });
            }
        }

        let maxLengthRule = rules.find(value => /maxLength:/.test(value));
        if (typeof maxLengthRule !== "undefined") {
            const max = this._arratToStringLastPosition(maxLengthRule);
            if (this._maxLength(max, value)) {
                this._errorBag((prev) => ({
                    ...prev,
                    [keys]: `Input value should be less than or equal to ${max} characters`
                }));
                return;
            } else {
                this._errorBag((prev) => {
                    const copy = { ...prev };
                    delete copy[keys];
                    return copy;
                });
            }
        }

        let minRule = rules.find(value => /min:/.test(value));
        if (typeof minRule !== "undefined") {
            const min = this._arratToStringLastPosition(minRule);
            if (this._min(min, value)) {
                this._errorBag((prev) => ({
                    ...prev,
                    [keys]: `Input value should be greater than or equal to ${min}`
                }));
                return;
            } else {
                this._errorBag((prev) => {
                    const copy = { ...prev };
                    delete copy[keys];
                    return copy;
                });
            }
        }

        let maxRule = rules.find(value => /max:/.test(value));
        if (typeof maxRule !== "undefined") {
            const max = this._arratToStringLastPosition(maxRule);
            if (this._max(max, value)) {
                this._errorBag((prev) => ({
                    ...prev,
                    [keys]: `Input value should be less than or equal to ${max}`
                }));
                return;
            } else {
                this._errorBag((prev) => {
                    const copy = { ...prev };
                    delete copy[keys];
                    return copy;
                });
            }
        }
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
        if (!result) {
            this._tempPasswordValue = value;
            return true;
        }
        this._tempPasswordValue = "";
        return false;

    }

    private _confirmPassword(value: string) {
        if (this._tempPasswordValue !== value) {
            return true;
        }
        return false;
    }

    private _minLength(minLengthValue: string, value: string) {
        if (value.length < +minLengthValue) {
            return true;
        }
        return false;
    }

    private _maxLength(maxLengthValue: string, value: string) {
        if (value.length > +maxLengthValue) {
            return true;
        }
        return false;
    }

    private _min(minLength: string, value: string) {
        if (+value < +minLength) {
            return true;
        }
        return false;
    }

    private _max(maxLength: string, value: string) {
        if (+value > +maxLength) {
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
        this._tempFieldBag = { ...this._tempFieldBag, [e.target.name]: e.target.value };
        this._getAllFieldRules();
    };





    customToast({ type, message }: IToast) {

        if (type === 'success') {
            toast.success(message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else if (type === 'warning') {
            toast.warning(message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else if (type === 'error') {
            toast.error(message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {

        }
        return [type, message];
    };
    // onSubmit(e: React.FormEvent<HTMLFormElement>) {
    //     e.preventDefault();
    //     console.log('Submitted');
    //     // if (Object.keys(error).length === 0) {
    //     //     toast.success('Form submitted successfully', {
    //     //         position: "top-right",
    //     //         autoClose: 5000,
    //     //         hideProgressBar: false,
    //     //         closeOnClick: true,
    //     //         pauseOnHover: true,
    //     //         draggable: true,
    //     //         progress: undefined,
    //     //     });
    //     // } else {
    //     //     Object.entries(error).forEach(([name, message]) => {
    //     //         toast.error(message, {
    //     //             position: "top-right",
    //     //             autoClose: 5000,
    //     //             hideProgressBar: false,
    //     //             closeOnClick: true,
    //     //             pauseOnHover: true,
    //     //             draggable: true,
    //     //             progress: undefined,
    //     //         });
    //     //     });

    //     // }
    // };


    // const validateData = ({ prop, message }: { [prop: string]: string; message: string; }) => {
    //     setError((prev) => ({
    //         ...prev,
    //         [prop]: message
    //     }));
    // };


    // const errorExist = Object.keys(error).length !== 0;
    // console.log(error);



}