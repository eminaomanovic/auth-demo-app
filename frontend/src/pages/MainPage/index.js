import React, {useEffect} from 'react';
import {getUser, removeSession, validToken} from "../../utilities/Common";

const MainPage = () => {
    const user = getUser();

    useEffect(() => {
    }, []);

    try {
        if (!validToken()) {
            removeSession();
        }
        return (
            <div>
                {getUser() != null ?
                    'User:' + user.firstName.toString() + " " + user.lastName.toString() :
                    'Please login or register'}
            </div>
        );
    } catch (e) {
        removeSession();
    }

}

export default MainPage;
