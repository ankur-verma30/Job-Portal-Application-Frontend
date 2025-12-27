import axios from "axios";
const baseUrl = "http://localhost:8080/users";

const registerUser = async (user: any) => {
    return axios.post(`${baseUrl}/register`, user).then((res) => res.data)
        .catch((err) => {
            throw err;
        });
}

const loginUser = async (login: any) => {
    return axios.post(`${baseUrl}/login`, login).then((res) => res.data)
        .catch((err) => {
            throw err;
        });
}

const sendOTP = async (email: any) => {
    return axios.post(`${baseUrl}/send-otp`, email).then((res) => res.data)
        .catch((err) => {
            throw err;
        });
}

const changePassword = async (email:string,password:string) => {
    return axios.post(`${baseUrl}/change-password`, {email,password}).then((res) => res.data)
        .catch((err) => {
            throw err;
        });
}

const verifyOTP = async (email: string, otp: string) => {
    return axios.get(`${baseUrl}/verify-otp/${email}/${otp}`).then((res) => res.data)
        .catch((err) => {
            throw err;
        })
}
export { registerUser, loginUser, sendOTP, changePassword, verifyOTP };