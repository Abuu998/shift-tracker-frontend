import { useDispatch } from "react-redux"
import { deleteOneShift } from "../../../redux/shiftSlice"
import Button from "../Button"

function DeleteShift({ shiftId, userId }) {
    const dispatch = useDispatch()

    return (
        <Button 
            className="py-2 px-3 bg-red-200 hover:bg-red-300 font-semibold rounded-md text-red-900 self-end"
            onClick={() => dispatch(deleteOneShift({shiftId, userId}))}
            >
            Delete Shift
        </Button>
    )
}

export default DeleteShift