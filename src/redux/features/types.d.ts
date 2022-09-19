interface IRegisterState {
  register: boolean;
  status: "idle" | "loading" | "success" | "failed";
  error: any;
}
interface IVerifyState {
  verified: boolean;
  status: "idle" | "loading" | "success" | "failed";
  error: any;
}
interface ICategoryState {
  categories: { id: string; name: string }[];
  status: "idle" | "loading" | "success" | "failed";
  errors?: string;
}
interface ICountryState {
  countries: {
    id: string;
    code: string;
    shortname: string;
    name: string;
  }[];
  status: "idle" | "loading" | "success" | "failed";
  errors?: string;
}

interface ICountryStateType {
  states: { id: string; name: string }[];
  status: "idle" | "loading" | "success" | "failed";
  errors?: string;
}
