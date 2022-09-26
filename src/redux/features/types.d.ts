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
  errors: any;
}
interface ICountryState {
  countries: {
    id: string;
    code: string;
    shortname: string;
    name: string;
  }[];
  status: "idle" | "loading" | "success" | "failed";
  errors: any;
}

interface IPostState {
  post: { [props: string]: string }[];
  status: "idle" | "loading" | "success" | "failed";
  errors: any;
}

interface ICountryStateType {
  states: { id: string; name: string }[];
  status: "idle" | "loading" | "success" | "failed";
  errors: any;
}
