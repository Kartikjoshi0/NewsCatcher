'use client'

import { useRouter } from "next/navigation";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { selectedCategoryState } from "../atom/code";
import { useEffect } from "react";

interface HeroProps {
  onGetStartedClick: () => void;
}


export const Hero=({onGetStartedClick}: HeroProps)=>{
  const router= useRouter();
    const selectedCategory=useRecoilValue(selectedCategoryState);
    const setSelectedCategory=useSetRecoilState(selectedCategoryState);


    const categories = ['Sports', 'Technology', 'Politics', 'Health', 'Entertainment'];

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const category = event.target.value;
        setSelectedCategory(category);
        router.push('/category');
        console.log("Selected category:", category); 

      };
      useEffect(() => {
        setSelectedCategory('category');
      }, [setSelectedCategory]);

    return<>
    <div className="w-screen h-[500px] bg-emerald-900 flex flex-col">
        <div className="flex flex-row justify-around items-center mb-10 mt-3">
            <div className="ml-[400px]">
            
            <select
              id="category"
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="px-3 py-2 bg-emerald-900 text-white rounded-md hover:cursor-pointer"
            >
              <option  value="category" disabled>Category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            </div>






            <button onClick={onGetStartedClick} className="text-2xl text-white border border-white rounded border-2 p-1">Get Started</button>
        </div>
        <div className="flex flex-row justify-around items-center">
        <div className="text-7xl m-3 text-white">NewsCatcher</div>
        <div className="w-[500px] h-[300px]  border border-2 shadow-2xl rounded-md ">

        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/assests/istockphoto-1384856881-640_adpp_is.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
        </div>
        

    </div>
    </> 
}