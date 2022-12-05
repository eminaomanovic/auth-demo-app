import axios from 'axios';
import {getToken, setSession} from "./Common";

export const config = () => {
    const token = getToken();
    if (token === null) {
        return null;
    }
    return {
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-type': 'application/json'
        },
    };
}
export const registerUser = async (user) => {
    return ((await createRequest())
        .post("/auth/register", user)
        .then((response) => {
            setSession(response.data.person, response.data.token)
        }));
};

export const loginUser = async (user) => {
    return ((await createRequest())
        .post("/auth/login", user)
        .then((response) => {
            setSession(response.data.person, response.data.token)
        }));
}

export const createRequest = async () => {
    return axios.create({
        baseURL: "http://localhost:8080",
        headers: {
            "Content-type": "application/json",
        },
    })
};
