import { formatHours, hoursDifference } from "../../utilities/utils";
import Toggle from "../toggle/Toggle"
import ToggleOn from "../toggle/ToggleOn"
import ToggleDisplay from "../toggle/ToggleDisplay"
import ShiftTitle from "./ShiftTitle";
import HandleShift from "./HandleShift";
import DeleteShift from "./DeleteShift";
import Loader from "../Loader";


function RenderShift({ shift={} }) {

    return (
        <Toggle>
            <ToggleOn>
                <ShiftTitle shift={shift} />
            </ToggleOn>
            <ToggleDisplay>
                <div className="flex flex-col gap-4 ml-8 pb-8">
                    <span className="flex items-center justify-between">
                        <span className="flex items-center gap-6">
                            <span className="font-medium text-blue-400">Starting:</span>
                            <span>{shift.start ? `${formatHours(shift.start)}` : "Not started" }</span>
                        </span>
                        {!shift?.start && <HandleShift shift={shift} label="Start Shift" />}
                    </span>
                    <span className="flex items-center justify-between">
                        <span className="flex items-center gap-6">
                            <span className="font-medium text-blue-400">End:</span>
                            <span>{shift?.end && shift.status == "ENDED" ? `${formatHours(shift.end)}` : shift.status === "IN_PROGRESS" ? "Progressing..." : "Not started" }</span>
                        </span>
                        {(shift?.start && !shift?.end) && <HandleShift shift={shift} label="End Shift" />}
                    </span>
                    <span className="flex items-center gap-6">
                        <span className="font-medium text-blue-400">Hours Worked:</span>
                        <span>{shift.start && shift.end && `${hoursDifference(shift.start, shift.end)}`}{shift.status === "IN_PROGRESS" ? <span className="flex items-center text-sm gap-3"><Loader /> Counting time</span> : shift.status === "YET_TO_START" ? "-": "" }</span>
                    </span>
                    <div className="flex items-center gap-4">
                        <span className="font-medium text-blue-400">Status:</span>
                        <span className={`${shift.status === "YET_TO_START" ? "text-red-300" : shift.status === "IN_PROGRESS" ? "text-yellow-400" : "text-green-400"}`}>
                            {shift.status && shift.status === "YET_TO_START" ? "Pending" : shift.status === "IN_PROGRESS" ? "In Progress" : shift.status === "ENDED" ? "Ended" : "-" }
                        </span>
                    </div>
                    <hr className="border-slate-800" />
                    <DeleteShift shiftId={shift.id} userId={shift.workerId} />
                </div>
            </ToggleDisplay>
        </Toggle>
    )
}

export default RenderShift