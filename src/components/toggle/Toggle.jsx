import { createContext } from "react"
import useToggle from "../../hooks/useToggle"

export const ToggleContext = createContext()

function Toggle({ children }) {
    const [on, toggleOn] = useToggle({ initialValue: false })

    const params = {
        on, toggleOn
    }

    return (
        <ToggleContext.Provider value={params}>
            { children }
        </ToggleContext.Provider>
    )
}

export default Toggle