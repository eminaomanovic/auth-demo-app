import axios from 'axios';
import {getToken} from "./Common";

export const config = () => {
    const token = getToken();
    if (token === null) {
        return null;
    }
    return {
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-type": "application/json"
        },
    };
}
export const registerUser = async (user) => {
    return ((await createRequest())
        .post("/auth/register", user)
        .then((response) => response.data));
};

export const loginUser = async (user) => {
    return ((await createRequest())
        .post("/auth/login", user)
        .then((response) => response.data));
}

export const createRequest = async () => {
    return axios.create({
        baseURL: "http://localhost:8080",
        headers: {
            "Content-type": "application/json",
        },
    })
};
