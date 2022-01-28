import React from "react";
export default function Card({destination}){
return(
    <div>
   
 <div className="flex item-center rounded-lg  bg-white shadow-lg overflow-hidden w-500 ">          
<img src={destination["image-url"]} className="h-100 w-100 flex-shirink-0"  />
<div className="px-6 py-4">
<h3 className="text-lg font-semibold text-grey-800">{destination.title}</h3>
<p className="text-gray-600">{destination.description}</p>
</div>
          </div>
      </div>

)
}