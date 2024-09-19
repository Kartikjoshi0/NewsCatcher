

interface CardProp {
  author: string;
  title: string;
  description: string;
  image: string; 
  url: string;
  category: string;
  language: string;
  country: string;
}

export const NewsCard: React.FC<CardProp> = ({
  author,
  title,
  description,
  image,
  url,
  category,
  language,
  country,
}) => {
  return (
    <div className=" m-5 p-3 border border-shadow rounded overflow-hidden shadow-lg bg-white transform transition-transform duration-300 hover:scale-110 ">
      <div className="w-fit h-auto">
      <img src={image} className=' object-cover' alt="NewsCatcher" />
      </div>
        
      <div className="px-6 py-4 flex flex-col">
        <div className="font-bold text-4xl mb-2 underline"><a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >{title}</a></div>
        <p className="text-gray-700 text-base mb-2">{description}</p>
        <div className="grid grid-cols-2">
        <p className="text-sm text-gray-600">By: {author || "Unknown"}</p>
        <p className="text-sm text-gray-600">Category: {category}</p>
        <p className="text-sm text-gray-600">Language: {language}</p>
        <p className="text-sm text-gray-600 mb-3">Country: {country}</p>
        </div>
        
        
        
      </div>
    </div>
  );
};
