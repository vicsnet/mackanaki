import { useAppSelector } from "../redux/app/hooks";
import { getRegisterState } from "../redux/features/authentication/registerSlice";


const useAuth = () => {
    return useAppSelector(getRegisterState);
};

export default useAuth;
