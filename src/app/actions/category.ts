import axios from "axios";


export async function category(category: string){
    try {
        const posts=await axios.get(`http://api.mediastack.com/v1/news?access_key=5649d3129d88f357142acfa0ca50f841&languages=en&categories=${category}`);
        console.log((await posts).data.data);
        return  (await posts).data.data;
    } catch (error) {
        console.error(error);
        console.log('category not supported ');
        
    }
}