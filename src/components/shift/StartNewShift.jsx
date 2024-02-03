import Button from "../Button"
import { useSelector, useDispatch } from "react-redux"
import { startANewShift } from "../../../redux/shiftSlice"

function StartNewShift() {
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()

    return (
        <Button
            className="bg-blue-500 hover:bg-blue-600 transition-all py-3 w-full text-center font-semibold rounded-md"
            onClick={() => dispatch(startANewShift(user?.id))}
        >
            Create New Shift
        </Button>
    )
}

export default StartNewShift
