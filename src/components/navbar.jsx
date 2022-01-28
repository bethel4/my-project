
export default function Navbar(){
    return(
        <nav className="bg-gray-800 shadow-lg">
		<div className="max-w-6xl mx-auto px-4">
			<div className="flex justify-between">
				<div className="flex space-x-10">
					
					<div>
                    <a className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 
                    py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="/blog">
                        <i className="lg:text-gray-300 text-gray-500 far fa-file-alt text-lg leading-lg mr-2"></i> Blog</a>
					</div>
				
					<div className="hidden md:flex items-center space-x-1">
					
						<a
							href=""
							className="py-4 px-2 text-gray-500 font-semibold hover:text-white-500 transition duration-300"
							>Services</a
						>
						<div  className="hidden lg:flex items-right space-x-5">
                        <a
							href=""
							className="py-4 px-2 text-gray-500 font-semibold hover:text-white-500 transition duration-300"
							>About</a
						>
						<a
							href=""
							className="py-4 px-2 text-gray-500 font-semibold hover:text-white-500 transition duration-300"
							>Contact Us</a
						>
                        </div>
					</div>
				</div>
			</div>
		</div>
	</nav>
    )
}