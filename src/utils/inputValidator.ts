export default class InputValidator {
    private _setFields: React.Dispatch<React.SetStateAction<IFormFieldObj>>;
    private _fields: IFormFieldObj;
    private _errorBag: React.Dispatch<React.SetStateAction<IErrors | null>>;
    private _errors: IErrors | null;
    private _rules: IRules;
    _tempErrorBag: { [props: string]: string; } = {};


    constructor (setFields: React.Dispatch<React.SetStateAction<IFormFieldObj>>, fields: IFormFieldObj, errorBag: React.Dispatch<React.SetStateAction<IErrors | null>>, errors: IRules | null, rules: IRules) {
        this._setFields = setFields;
        this._fields = fields;
        this._errorBag = errorBag;
        this._errors = errors;
        this._rules = rules;

        this.getAllFieldRules();
    }

    private get _isFieldsAndRulesValid() {
        return Object.keys(this._fields).every(field => {
            return Object.keys(this._rules).includes(field);
        });
    }


    getAllFieldRules() {
        if (this._isFieldsAndRulesValid) {
            let obj = Object.keys(this._fields).reduce((prev, current) => {
                if (Object.keys(this._rules).includes(current)) {
                    prev[current] = this._rules[current];
                }
                return prev;
            }, {} as { [props: string]: string; });

            


            // console.log(obj);
        }
    }

    get isFormValid(): boolean {
        if (this._errors === null) return false;
        if (Object.keys(this._errors).length === 0) return true;
        return false;
    }


    isErrorEmpty() {
        this._validate('required', 'email', this._fields['email']);
    }




    private _validate(rules: string, keys: string, value: string) {
        if (rules === 'required') {
            if (this._required(value)) {
                this._errorBag((prev) => ({
                    ...prev,
                    [keys]: `${keys} is required`
                }));
            } else {
                this._errorBag({});
            }
        }

    }

    private _required(value: string): boolean {
        if (value.trim().length < 1) {
            return true;
        }
        return false;
    }

    handleChangeEvent(e: React.ChangeEvent<HTMLInputElement>) {
        this._setFields((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
        this._validate('required', 'email', e.target.value);
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