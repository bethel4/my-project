import randomimage from "../data/randomimage"
import Card from "./card"
export default function Blog(){
   
    return(
     <div>
        <div>
        <div
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{minHeight: "75vh"}}
      >
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{ 
            backgroundImage: ` url("https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1267&amp;q=80")
            ` 
          }} >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">
                  Your story starts with us.
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  This is a simple example of a Landing Page you can build using
                  Cookie. You can see README file for installation and customization.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{height: "70px" ,transform:" translateZ(0px)"}}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
   <section  className="pb-20 bg-gray-300 -mt-24">
       <div className="container mx-auto px-4">
       <div className="flex flex-wrap">
       <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                className="relative flex  min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg "
              >
                  <div className="px-4 py-5 flex-auto">
               
                  <h6 className="text-xl font-semibold">Awarded Agency</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Divide details about your product or agency work into parts.
                    A paragraph describing a feature will be enough.
                  </p>
                </div>
                
                  </div>
                  
                  </div>
                  <div className="w-full md:w-4/12 px-4 text-center">
              <div
                className="relative flex mt-10 min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div className="px-4 py-5 flex-auto">
                 
                  <h6 className="text-xl font-semibold">Free Revisions</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Keep you user engaged by providing meaningful information.
                    Remember that by this time, the user is curious.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                className="relative flex mt-5 min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div className="px-4 py-5 flex-auto">
                  <div
                      >
                   
                  </div>
                  <h6 className="text-xl font-semibold">Verified Company</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Write a few lines about each one. A paragraph describing a
                    feature will be enough. Keep you user engaged!
                  </p>
                </div>
              </div>
            </div>
           </div>
           
       </div>
       <div className="flex flex-row items-center">
       <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
           
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Working with us is a pleasure
              </h3>
              <p
                className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700"
              >
                Don't let your uses guess by attaching tooltips and popoves to
                any element. Just make sure you enable them first via
                JavaScript.
              </p>
              <p
                className="text-lg font-light leading-relaxed mt-0 mb-8 text-gray-700"
              >
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go. Just make sure you enable them first via JavaScript.
              </p>
              <a
                href="https://github.com/abhinavs/cookie"
                className="font-bold text-gray-500 px-8 py-4 rounded-md bg-gray-50 hover:bg-gray-400 hover:text-gray-50"
                >Check Me!</a>
            </div>
 
</div>
   </section>
       
         </div>
         <div>
     
     <div  className="max-w-md sm:max-w-x1 lg:max-w-6x1 mx-auto px-8 lg:px-12 py-8 ">
  <h2 className="text-xl text-gray-900">Popular destination</h2>
    <p className="mt-2 text-grey-600">A selection of great work-friendly cities
    with lots to see and explore</p>
    <div  className="mt-6 grid gap-6 lg:grid-cols-2 x1:grid-cols-3 w-500 ">
    {randomimage.map((destination)=>(
   <Card destination={destination} key={destination.title}/>

))}
</div>
</div>
</div>
     </div>
   
    )
}