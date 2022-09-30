import axios from "axios";
import BaseService from "../base.service";

export default class UserService extends BaseService {
  async getCountries() {
    try {
      const response = await axios.get(this.BASE_URL + "/api/countries");
      return response.data;
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return message;
    }
  }

  async getCountryState(id: string) {
    try {
      const response = await axios.get(
        this.BASE_URL + "/api/Country/states/" + id
      );
      return response.data;
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return message;
    }
  }

  async getCategories() {
    try {
      const response = await axios.get(this.BASE_URL + "/api/categories");
      return response.data;
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return message;
    }
  }

  private get checkLocalStorageforUserProfile() {
    let retrievedObject = localStorage.getItem("profile");
    if (retrievedObject === null) {
      return false;
    }
    return retrievedObject;
  }

  get getUserProfileFromLocalStorage() {
    try {
      if (this.checkLocalStorageforUserProfile === false) {
        return [];
      } else {
        return JSON.parse(this.checkLocalStorageforUserProfile);
      }
    } catch (error) {
      return [];
    }
  }

  updateUserProfileInLS(profile: { [props: string]: string }) {
    localStorage.setItem("profile", JSON.stringify(profile));
  }
  async userProfile(token: string) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(
      this.BASE_URL + "/api/user/profile",
      config
    );

    return response.data;
  }
  async userProfileEdit(data: EditProfileType, token: string) {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    let formdata = new FormData();
    formdata.append("profile_picture", data.profile_picture);
    formdata.append("cover_picture", data.cover_picture);
    formdata.append("name", "joghn paul");
    formdata.append("phone", data.phone);
    formdata.append("state_id", data.state_id);
    formdata.append("country_id", data.country_id);
    const response = await axios.post(
      this.BASE_URL + "/api/user/profile/edit",
      formdata,
      config
    );
    console.log(response.data);
    return response.data;
  }
}
