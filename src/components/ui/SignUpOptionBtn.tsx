import { Link } from "react-router-dom";

const SignUpOptionBtn = ({ text, icon, url }: { text: string, icon: string; url: string; }) => {
    return (
        <Link to={url}>
            <div className="cursor-pointer flex justify-center items-center md:py-4 py-3 border-2 border-gray-500 w-full mt-7 gap-4">
                <img src={icon} className='cursor-pointer w-5 h-5 md:w-7 md:h-7' alt="google" />
                <p className="text-signupTextColor md:text-sm text-xs">{text}</p>
            </div>
        </Link>
    );
};

export default SignUpOptionBtn;