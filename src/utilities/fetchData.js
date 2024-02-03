import axios from "axios";

axios.defaults.baseURL = `http://localhost:3000/api`
// axios.defaults.baseURL = `https://shift-tracker-rust.vercel.app/api`

export const getAllUsersShifts = async userId => {
    try {
        const res = await axios.get(`/users/${userId}/shifts`)
        return res.data
    } catch (err) {
        return err?.response?.data
    }
}


export const deleteShift = async shiftId => {
    try {
        const res = await axios.delete(`/shifts/${shiftId}`, {
            headers: {
                Accept: "application/json"
            },
            withCredentials: true
        })
        
        return res.data
        
    } catch (err) {
        return err?.response?.data
    }
}


export const startNewShift = async userId => {
    try {
        const res = await axios.post(`/shifts`, { workerId: userId }, {
            headers: {
                Accept: "application/json"
            },
            withCredentials: true
        })
    
        return res.data
    } catch (err) {
        return err?.response?.data
    }
}


export const startShift = async (shiftId) => {
    try {
        const res = await axios.put(`/shifts/${shiftId}`, {
                start: new Date().toUTCString(),
                status: "IN_PROGRESS"
            },
            {
                headers: {
                    Accept: "application/json"
                },
                withCredentials: true
            }
            )
    
        return res.data
        
    } catch (err) {
        return err?.response?.data
    }
}

export const endShift = async (shiftId) => {
    try {
        const res = await axios.put(`/shifts/${shiftId}`, {
                end: new Date().toUTCString(),
                status: "ENDED"
            },
            {
                headers: {
                    Accept: "application/json"
                },
                withCredentials: true
            }
        )
    
        return res.data
    } catch (err) {
        return err?.response?.data
    }
}
