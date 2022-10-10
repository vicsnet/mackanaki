interface IFormInput {
  label: string;
  placeholder?: string;
  htmlFor: string;
  type?: string;
  name: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  errors: string;
  value?: string;
  isDisabled?: boolean;
}
interface IFormSelect {
  prevValue?: string;
  label: string;
  htmlFor: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  name: string;
  className?: string;
  errors: string;
  categories?: {
    id: string;
    name: string;
  }[];
  states?: {
    id: string;
    name: string;
  }[];
  countries?: {
    id: string;
    code: string;
    shortname: string;
    name: string;
  }[];
  status?: "idle" | "loading" | "success" | "failed";
}
