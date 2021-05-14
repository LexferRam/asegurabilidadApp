import axios from 'axios'

const baseURl = process.env.REACT_APP_URL;

export const fetchData = async(route,body) => {
    return await axios.post(`${baseURl}/${route}`,body);
}



