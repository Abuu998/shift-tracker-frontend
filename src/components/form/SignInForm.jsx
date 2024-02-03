import { useState } from "react"
import Input from "./Input"
import Label from "./Label"
import Button from "../Button"
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logInUser } from "../../../redux/userSlice";
import { loginUser } from "../../utilities/auth";
import Loader from "../Loader";

const initialState = {
    email: "",
    password: ""
}

function SignInForm() {
    const [formData, setFormData] = useState(initialState)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const [error, setError] = useState("")
    const [searchParams, setSearchParams] = useSearchParams()
    const redirectTo = searchParams.get("redirectTo") || "/"

    const handleChange = e => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async e => {
        e.preventDefault()
        setError("")
        setLoading(true)
        const user = await loginUser(formData)
        setFormData(initialState)
        
        if(!user?.success) {
            setLoading(false)
            setError(user?.error)
            return
        }
        
        setLoading(false)
        dispatch(logInUser(user?.user))
        navigate(redirectTo, { replace: true })
    }

    return (
        <form
            className="flex flex-col gap-6"
            onSubmit={handleSubmit}
        >
            <div className="flex flex-col gap-4">
                {error && <p className="text-sm text-red-400 text-center">{error}</p>}
                <Label label="Email" labelStyle="font-semibold">
                    <Input
                        className="py-2 px-4 bg-slate-950 rounded-md focus:outline-none focus:outline-blue-500"
                        type="email"
                        name="email"
                        placeholder="i.e: email@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </Label>
                <Label label="Password" labelStyle="font-semibold">
                    <Input
                        className="py-2 px-4 bg-slate-950 rounded-md focus:outline-none focus:outline-blue-500"
                        type="password"
                        name="password"
                        placeholder="********"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </Label>
            </div>
            <Button 
                type="submit"
                className="py-2 px-6 bg-blue-500 flex items-center justify-center gap-4 hover:bg-blue-600 rounded-md font-medium disabled:bg-gray-500 disabled:cursor-not-allowed"
                disabled={loading}
            >
                {loading ? <Loader className="text-base" /> : "" } <span>Sign{loading ? "ing you in" : "in"}</span>
            </Button>
        </form>
    )
}

export default SignInForm
