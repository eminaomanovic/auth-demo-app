import React, {useEffect} from 'react';
import {getUser, removeSession, validToken} from "../../utilities/Common";

const MainPage = () => {
    const user = getUser();

    useEffect(() => {
    }, []);

    try {
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
        if (!validToken()) {
            removeSession();
        }
    }

}

export default MainPage;
