import Button from "../Button"
import { startAShift, endAShift } from "../../../redux/shiftSlice"
import { useDispatch } from "react-redux"

function HandleShift({ label="", shift={} }) {
    const dispatch = useDispatch()

    if(label === "Start Shift") {
        return (
            <Button 
                className="py-2 px-3 bg-blue-300 hover:bg-blue-400 font-semibold rounded-md text-slate-950"
                onClick={() => dispatch(startAShift({shiftId: shift.id, userId: shift.workerId}))}
            >
                {label}
            </Button>
        )
    } else {
        return (
            <Button 
                className="py-2 px-3 bg-blue-300 hover:bg-blue-400 font-semibold rounded-md text-slate-950"
                onClick={() => dispatch(endAShift({shiftId: shift.id, userId: shift.workerId}))}
            >
                {label}
            </Button>
        )
    }

}

export default HandleShift