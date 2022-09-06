import validator from 'validator';
import { toast } from 'react-toastify';


export default class InputValidator {
    private _setFields: React.Dispatch<React.SetStateAction<IFormFieldObj>>;
    private _fields: IFormFieldObj;
    private _errorBag: React.Dispatch<React.SetStateAction<IErrors>>;
    private _errors: IErrors;
    private _rules: IRules;
    private _tempFieldBag: { [props: string]: string; } = {};
    private _setTempPassword: React.Dispatch<React.SetStateAction<string>>;
    private _tempPassword: string;



    constructor (setFields: React.Dispatch<React.SetStateAction<IFormFieldObj>>, fields: IFormFieldObj, errorBag: React.Dispatch<React.SetStateAction<IErrors>>, errors: IRules, rules: IRules, tempPassword: string, setTempPassword: React.Dispatch<React.SetStateAction<string>>) {
        this._setFields = setFields;
        this._fields = fields;
        this._errorBag = errorBag;
        this._errors = errors;
        this._rules = rules;
        this._tempPassword = tempPassword;
        this._setTempPassword = setTempPassword;
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

    get isFormValid(): boolean {
        if (Object.keys(this._errors).length === 0) return false;
        return true;
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
        if (rules.includes('confirm_password')) {
            if (this._confirmPassword(value)) {
                this._errorBag((prev) => ({
                    ...prev,
                    [keys]: `password doesn't match`
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
            this._setTempPassword("");
            return true;
        }
        this._setTempPassword(value);
        return false;

    }

    private _confirmPassword(value: string) {
        if (this._tempPassword !== value) {
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
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else if (type === 'warning') {
            toast.warning(message, {
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else if (type === 'error') {
            toast.error(message, {
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
}