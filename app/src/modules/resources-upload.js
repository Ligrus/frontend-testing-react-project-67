import axios from "axios";

export const fetchResource = async (url) => {
    try {
        const res = await axios.get(url, {responseType: 'text'})
        return res.data
    } catch (error) {
        console.error(`There is an error while resource upload ${error.message}`)
    }
} 