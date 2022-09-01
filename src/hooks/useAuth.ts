import { useAppSelector } from "../redux/app/hooks";
import { getUserInfo } from "../redux/features/authentication/authSlice";


const useAuth = () => {
    return useAppSelector(getUserInfo);
 };

export default useAuth;
