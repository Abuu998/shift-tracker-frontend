import { HiOutlineArrowLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";


function GoBackLink() {
    const navigate = useNavigate()

    return (
        <div className="flex items-center gap-4 cursor-pointer group" onClick={() => navigate(-1)}>
            <HiOutlineArrowLeft className="text-xl" />
            <span className="group-hover:underline underline-offset-4 transition-all">Back to home</span>
        </div>
    )
}

export default GoBackLink