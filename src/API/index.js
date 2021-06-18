import axios from 'axios'

export const fetchData = async ()=>{
    const {data:{data}} = await axios.get(`https://api.first.org/data/v1/news`)
    console.log(data)
    return data;
}