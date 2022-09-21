
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { getLoginState, gooogleAuthToken, resetState } from '../../redux/features/authentication/loginSlice';

const GoogleCallback = () => {

    // const [loading, setLoading] = useState(true);
    // const [data, setData] = useState<{ [props: string]: string; }>({});
    // const [user, setUser] = useState(null);
    const location = useLocation();
    const { status } = useAppSelector(getLoginState);


    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    useEffect(() => {

        fetch(`https://thombrix-backend.herokuapp.com/auth/google/callback${location.search}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                // setLoading(false);
                dispatch(gooogleAuthToken(data));
                navigate('/');

                // setData(data);
            }).catch((error) => {
                dispatch(resetState());
            });
        console.count('ran');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, location.search, status]);

    // if (loading) {
    //     return <DisplayLoading />;
    // } else {
    //     if (user != null) {
    //         return <DisplayData data={user} />;
    //     } else {
    //         return (
    //             <div>
    //                 <DisplayData data={data} />
    //                 {/* <div style={{ marginTop: 10 }}>
    //                     <button onClick={fetchUserData}>Fetch User</button>
    //                 </div> */}
    //             </div>
    //         );
    //     }
    // }
    return (
        <div>GoogleCallback Page</div>
    );
};

// function DisplayLoading() {
//     return <div>Loading....</div>;
// }

// function DisplayData(data: any) {
//     return (
//         <div>
//             <samp>userInfo: {JSON.stringify(data, null, 2)}</samp>
//         </div>
//     );
// }

export default GoogleCallback;


