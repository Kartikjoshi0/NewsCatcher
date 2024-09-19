'use client'
import { useEffect } from "react"
import { category } from "../actions/category"
import { useRecoilValue } from "recoil"
import { selectedCategoryState } from "../atom/code"
import { NewsCard } from "../components/NewsCard"
import { Navbar } from "../components/Navbar"


export default function Category(){
    const categoryValue=useRecoilValue(selectedCategoryState)
    useEffect(()=>{
        category(categoryValue)
    },[])
    return <div className="m-10">
          <div className="z-3">
          <Navbar bgcolor={"bg-emerald-900"} />
            </div> 
        <div className="grid grid-cols-2 z-1 ">
        <NewsCard author={"dsfag"} title={"adsfj"} description={"asdfk"} image={"afsk"} url={"adsgd"} category={"asdgdsg"} language={"asfd"} country={"asdgfsadg"} />
        <NewsCard author={"dsfag"} title={"adsfj"} description={"asdfk"} image={"afsk"} url={"adsgd"} category={"asdgdsg"} language={"asfd"} country={"asdgfsadg"} />
        <NewsCard author={"dsfag"} title={"adsfj"} description={"asdfk"} image={"afsk"} url={"adsgd"} category={"asdgdsg"} language={"asfd"} country={"asdgfsadg"} />
        <NewsCard author={"dsfag"} title={"adsfj"} description={"asdfk"} image={"afsk"} url={"adsgd"} category={"asdgdsg"} language={"asfd"} country={"asdgfsadg"} />
        <NewsCard author={"dsfag"} title={"adsfj"} description={"asdfk"} image={"afsk"} url={"adsgd"} category={"asdgdsg"} language={"asfd"} country={"asdgfsadg"} />
        <NewsCard author={"dsfag"} title={"adsfj"} description={"asdfk"} image={"afsk"} url={"adsgd"} category={"asdgdsg"} language={"asfd"} country={"asdgfsadg"} />
        <NewsCard author={"dsfag"} title={"adsfj"} description={"asdfk"} image={"afsk"} url={"adsgd"} category={"asdgdsg"} language={"asfd"} country={"asdgfsadg"} />
        </div>
        
    </div>
}