import { redirect } from "react-router-dom";
import store from "../../redux/store"
import axios from "axios";

const authAxios = axios.create({
    baseURL: `http://localhost:3000/api`
})
// baseURL = `https://shift-tracker-rust.vercel.app/api`
const baseURL = `http://localhost:3000/api`

export const loginUser = async ({ email, password }) => {
    try {
        const res = await authAxios.post("/login", {
            email: email,
            password: password
        }, {
            headers: {
                Accept: "application/json",
            }
        })
        return res.data

    } catch (err) {
        return err?.response?.data
    }
}

export const authUser = (request) => {
    const path = new URL(request.url).pathname || "/";
    const user = JSON.parse(localStorage.getItem("loggedIn"))

    if(!user?.token) {
		throw redirect(`/signin?redirectTo=${path}`)
    }

    return true
}