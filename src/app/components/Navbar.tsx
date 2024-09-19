'use client'

import { useRouter } from "next/navigation"



interface Navbarprop {
    bgcolor: string
}
export const Navbar= ({
    bgcolor
} : Navbarprop
)=>{
    const router=useRouter();
    return <div className={`fixed h-[80px] top-0 left-0 right-0  flex items-center justify-between mb-8 px-4  ${bgcolor}`  }>
    <div className="text-3xl  text-white text-bold flex flex-col justify-center ">
        NewsCatcher
    </div>
    <button onClick={()=>{router.push('/')}} className="flex w-[100px] h-[50px] text-2xl text-white border border-2 border-white rounded  jutify-center  px-4  py-2 mx-10">
        home
    </button>
    
</div>
}