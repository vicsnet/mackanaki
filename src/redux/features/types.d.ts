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
  userEditStatus: "idle" | "loading" | "success" | "failed";
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
  post: { [props: string]: any }[];
  comments?: { [props: string]: any }[];
  status: "idle" | "loading" | "success" | "failed";
  likeStatus?: "idle" | "loading" | "success" | "failed";
  errors: any;
  likeMsg?: string;
  postAddedStatus?: "idle" | "loading" | "success" | "failed";
  commentStatus?: "idle" | "loading" | "success" | "failed";
}

interface ICountryStateType {
  states: { id: string; name: string }[];
  status: "idle" | "loading" | "success" | "failed";
  errors: any;
}

type EditProfileType = {
  profile_picture: string;
  cover_picture: string;
  name: string;
  bio: string;
  phone: string;
  state_id: string;
  country_id: string;
};
