interface IRegisterState {
  register: boolean;
  status: "idle" | "loading" | "success" | "failed";
  error: any;
}
interface ILoginState {
  token: string | null;
  status: "idle" | "loading" | "success" | "failed";
  error: any;
}
interface IGoogleAuthState {
  status: "idle" | "loading" | "success" | "failed";
  error: any;
  target_url: string;
}
interface IUserProfileState {
  data: { [props: string]: string } | null;
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
