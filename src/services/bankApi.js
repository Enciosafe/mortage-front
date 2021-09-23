import axios from "axios";



const BASE_URL = 'https://agile-thicket-82517.herokuapp.com/'


export const getList = () => {
    return axios
        .get(`${BASE_URL}api/banks/`)
        .then(response => response.data)
}

export const addBank = (body) => {
    return axios
        .post(`${BASE_URL}api/banks/`, body)
        .then(response => console.log(response.status))
}

export const delBank = (id) => {
    return axios
        .delete(`${BASE_URL}api/banks/${id}`)
        .then(response => console.log(`BANK was deleted`))
}

