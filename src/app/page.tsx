'use client'
import { useEffect, useState } from "react";
import { Hero } from "./components/Hero";
import { useRef } from "react";
import { NewsCard } from "./components/NewsCard";



interface Post{
  url: string;
  author:string,
  title:string,
  description:string,
  image: string,
  category:string,
  language:string,
  country:string


}
export default  function Home() { 
  const newsCardRef = useRef<HTMLDivElement | null>(null);
  const [posts,setPosts]= useState<Post[]>([]);
  const handleScrollToNewsCard = () => {
    if (newsCardRef.current) {
      newsCardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  
  // useEffect(()=>{
  //   async function fetchPosts(){
  //     try {
  //       const respons=await fetch('/api/news');
  //       const postData=await respons.json();
  //       console.log(postData);
        
  //       setPosts(postData);
        
  //     } catch (error) {
  //       console.log("Error fetching posts:", error);
  //     }
  //   }
  //   fetchPosts();
  // },[])
  return (<>
  
     <Hero  onGetStartedClick={handleScrollToNewsCard}/>
     <div ref={newsCardRef} className="grid grid-cols-2 ">
     {posts.map((post, index) => (
          <NewsCard key={index} title={post.title} description={post.description} image={post.image} language={post.language} author={post.author} url={post.url} category={post.category} country={post.country} />
        ))}
      

     </div>

  </>
    
  );
}
