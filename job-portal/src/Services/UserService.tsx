import axios from "axios";
const baseUrl = "http://localhost:8080/users";

const registerUser = async (user: any) => {
    return axios.post(`${baseUrl}/register`, user).then((res) => res.data)
        .catch((err) => {
            throw err;
        });
}

const loginUser = async (user: any) => {
    return axios.post(`${baseUrl}/login`, user).then((res) => res.data)
        .catch((err) => {
            throw err;
        });
}

export {registerUser, loginUser};