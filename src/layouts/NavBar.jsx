import React from 'react'

function NavBar() {
    return (
        <>
            <nav className="bg-blue-600 p-4 flex items-center justify-between shadow-md">
                {/* Logo */}
                <div className="flex items-center">
                    <svg className="w-6 h-6 text-white mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span className="text-white font-medium text-xl">Bookstore</span>
                </div>

                {/* Search Input */}
                <div className="flex-grow mx-4 max-w-lg">
                    <div className="relative">
                        <input
                            className="w-full bg-white px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-400"
                            type="text"
                            placeholder="Search..."
                        />
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="flex items-center space-x-6">
                    {/* Cart Button */}
                    <div className="flex items-center">
                        <span className="text-white mr-2">Cart</span>
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="size-6 text-white">
                                <path   d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                            <span className="absolute -top-2 -right-2 bg-white text-blue-600 rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold">1</span>
                        </div>
                    </div>
                    <div>
                        <a href="" className="flex items-center border border-gray-300 rounded-2xl px-2 py-1 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <span className="mr-2 text-white font-medium">User</span>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar