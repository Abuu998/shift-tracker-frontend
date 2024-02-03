import { useDispatch, useSelector } from "react-redux"
import RenderShift from "./shift/RenderShift"
import { useEffect } from "react"
import { getAllShifts } from "../../redux/shiftSlice"

function ShiftList() {
    const dispatch = useDispatch()
    const allMyShifts = useSelector(state => state.shifts.allShifts)
    // const loading = useSelector(state => state.shifts.isLoading)
    const user = useSelector(state => state.user.user)

    useEffect(() => {
        dispatch(getAllShifts(user?.id))
    }, [])

    const emptyShifts = allMyShifts?.length < 1 && <p className="text-2xl font-semibold text-slate-700 text-center">You did not start a shift.</p>

    const allShifts = allMyShifts?.map(shift => (
        <RenderShift key={shift.id} shift={shift} />
    ))

    return (
        <div className="flex flex-col gap-8">
            <h1 className="text-2xl font-bold underline underline-offset-8 text-center">My Shifts</h1>
            {allShifts}
            {emptyShifts}
        </div>
    )
}

export default ShiftList