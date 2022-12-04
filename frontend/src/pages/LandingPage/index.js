import React, {useEffect} from 'react';
import {getUser, removeSession, validToken} from "../../utilities/Common";

const LandingPage = () => {
    const user = getUser();

    useEffect(() => {
    }, []);

    try {
        console.log(user != null);
        if (user != null) {
            return (
                <div>
                    {'User:' + user.firstName.toString() + " " + user.lastName.toString()}
                </div>
            );
        } else {
            return (<div>Please login or register</div>);
        }
    } catch (e) {
        console.log(e);
        if (!validToken()) {
            removeSession();
        }
    }

}

export default LandingPage;
