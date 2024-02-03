import Container from "./Container"
import Logo from "./Logo"
import Profile from "./Profile"
import { Link } from "react-router-dom"

function Navbar() {

    return (
        <header className="py-4 sticky top-0 border-b border-b-slate-800 border-b-solid bg-slate-900">
            <Container className="flex justify-between items-center">
                <Link to="/" className="cursor-pointer">
                    <Logo className="flex items-center gap-4" labelStyles="text-2xl" />
                </Link>
                <Profile />
            </Container>
        </header>
    )
}

export default Navbar