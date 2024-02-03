import Button from "./Button";
import Menu from "./menu";
import { Link } from "react-router-dom";
import { HiUser, HiOutlineUserCircle } from "react-icons/hi2";
import { IoLogOutOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/userSlice";

function Profile({ width=32, height=32 }) {
    const session = useSelector(state => state.user.user)
    const dispatch = useDispatch()

    if(!session?.token) {
        return (
            <Link to="/signin">
                <Button>
                    Signin
                </Button>
            </Link>
        )
    }

    const profilePic = session?.image ? (
        <image 
            src={session?.image}
            alt={`${session?.name} image.`}
            width={width}
            height={height}
            className="rounded-full"
        />
    ) : (
        <HiOutlineUserCircle className={`block w-8 h-8 rounded-full`} />
    )

    return (
            <Menu>
                <Menu.Button>
                    {profilePic}
                </Menu.Button>
                <Menu.Dropdown className="border border-slate-800 border-solid shadow-md shadow-slate-800 right-0 top-full mt-2 bg-slate-900 flex flex-col divide-y divide-slate-800 overflow-hidden rounded-md">
                    <Menu.Item className="py-2 px-4 hover:bg-slate-700 cursor-pointer">
                        <Link className="flex items-center gap-3" to="/profile">
                            <HiUser className="text-lg" />
                            <span>Profile</span> 
                        </Link>
                    </Menu.Item>
                    <Menu.Item className="py-2 px-4 hover:bg-slate-700 cursor-pointer">
                        <Button 
                            className="flex items-center gap-3" 
                            onClick={() => {
                                dispatch(logoutUser())
                                window.location.reload()
                            }}
                        >
                            <IoLogOutOutline className="text-lg" />
                            <span>Logout</span>
                        </Button>
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>
        )
}
    
export default Profile