interface IFormInput {
    label: string;
    placeholder: string;
    htmlFor: string;
    type?: string;
    name: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    className?: string;
}
interface IFormSelect {
    label: string;
    htmlFor: string;
}