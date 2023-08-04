import React from 'react';
import blogsdata from './Jsonobject';

const Datacards = () => {
    return(
        <>
        {blogsdata.map((blog)=>(
             <div className="md:w-90 border-b p-4 mb-4">
             {/* Author Name */}
             <div className="text-lg font-bold mb-2">{blog.author}
             <span className="text-gray-400 text-sm ml-2">{blog.date}</span></div>
       
             {/* Content */}
             <div>
               <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
             </div>
             <div className="flex flex-wrap gap-2">
             {
                blog.categories.map((category)=>(
                    <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full cursor-pointer">
                  {category}
                  </div>
                ))
             }
            
               {/* Add more categories as needed */}
             </div>
       
             {/* Image */}
             <div className="flex justify-center items-center mb-4">
             <p className="text-gray-700 mb-4 overflow-hidden line-clamp-3">{blog.data}</p>
               <img
                 src={blog.image}
                 alt="Placeholder"
                 className="w-32 h-32 rounded-md object-cover"
               />
             </div>
             
             {/* Categories */}
             
           </div>
        ))
}</>
    )
}

const TabContent = ({ selectedTab }) => {
  // You can implement the content for each tab here
  // For demonstration purposes, we'll show some sample content for each tab
  const getContent = (tab) => {
    switch (tab) {
      case 'For You':
        return <Datacards/>;
      case 'Following':
        return <div>Following Content</div>;
      case 'Option 1':
        return <div>Option 1 Content</div>;
      case 'Option 2':
        return <div>Option 2 Content</div>;
      case 'Option 3':
        return <div>Option 3 Content</div>;
      case 'Option 4':
        return <div>Option 4 Content</div>;
      case 'Option 5':
        return <div>Option 5 Content</div>;
      case 'Option 6':
        return <div>Option 6 Content</div>;
      case 'Option 7':
        return <div>Option 7 Content</div>;
      case 'Option 8':
        return <div>Option 8 Content</div>;
      case 'Option 9':
        return <div>Option 9 Content</div>;
      case 'Option 10':
        return <div>Option 10 Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className="w-full bg-gray-200 rounded-lg p-4 mt-4">
      {getContent(selectedTab)}
    </div>
  );
};

export default TabContent;
