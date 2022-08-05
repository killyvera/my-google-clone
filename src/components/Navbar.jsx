import React from 'react'
import { Link } from 'react-router-dom';

export const Navbar = ({darkTheme, setDarkTheme}) => {
    return (
        <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
            <div className="flex justify-between items-center space-x-5 w-screen">
                <Link to='/' >
                    <p className="text-2xl text-gray-100 bg-blue-500 p-2 rounded-md font-semibold dark:bg-gray-500 dark:text-gray-300 " >
                        My Google Clone🔎
                    </p>
                </Link>
                <button type="button" className=" dark:bg-gray-300 dark:text-gray-900 bg-gray-100 border rounded-full px-2 py-1 hover:shadow-lg " onClick={() => setDarkTheme(!darkTheme) }>
                    {darkTheme ? 'Light 💡' : 'Dark 🌙'}
                </button>

            </div>
        </div>
    )
}
