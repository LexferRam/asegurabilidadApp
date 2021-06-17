import axios from 'axios'

const baseURl = process.env.REACT_APP_URL2;

export const fetchData = async(route,body) => {
    return await axios.post(`${baseURl}/${route}`,body);
}



