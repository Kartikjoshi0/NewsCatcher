import axios from "axios";
import { NextResponse } from "next/server";


export async function GET(){
    try {
        const posts=axios.get('http://api.mediastack.com/v1/news?access_key=5649d3129d88f357142acfa0ca50f841&languages=en');
        console.log((await posts).data.data);
        return  NextResponse.json((await posts).data.data);
    } catch (error) {
        console.error('error while retreving posts ',error)
        return NextResponse.json({error: 'error retrieving posts '})
    }
}