interface IFormInput {
    label: string;
    placeholder: string;
    htmlFor: string;
    type?: string;
    name: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    className?: string;
    errors: string;
}
interface IFormSelect {
    label: string;
    htmlFor: string;
    onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

// interface IStepOneForm {
//     nextForm: Function;
//     errors: IErrors | null;
//     form: InputValidator;

// }
// interface IStepTwoForm {

//     errors: IErrors | null;
//     form: InputValidator;
// }