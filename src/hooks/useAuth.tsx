import { useAppSelector } from "../redux/app/hooks";
import { getLoginState } from "../redux/features/authentication/loginSlice";


const useAuth = () => {
    const { token } = useAppSelector(getLoginState)
    return token;
};

export default useAuth;
