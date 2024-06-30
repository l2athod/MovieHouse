import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <>
            <div className="container mx-auto flex w-full max-w-screen-lg justify-between py-6">
                <h1 className="flex flex-1 items-center gap-2 text-2xl font-bold">
                    <img src="/react.svg" alt="Vite icon" className="w-10" />
                    <NavLink to="/">MovieHouse</NavLink>
                </h1>
                <nav className="flex gap-2">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `rounded-full px-6 py-2 ${
                                isActive
                                    ? 'border-2 border-gray-200 font-medium shadow-sm'
                                    : 'border-2 border-transparent text-gray-500 transition-all duration-300 ease-in-out hover:bg-gray-100'
                            }`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `rounded-full px-6 py-2 ${
                                isActive
                                    ? 'border-2 border-gray-200 font-medium shadow-sm'
                                    : 'border-2 border-transparent text-gray-500 transition-all duration-300 ease-in-out hover:bg-gray-100'
                            }`
                        }
                    >
                        About
                    </NavLink>
                </nav>
            </div>
        </>
    )
}

export default Navigation
