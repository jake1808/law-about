import Link from "next/link";


const NavBar = () => {
    return (
        <div className="navbar bg-primary sticky top-0 z-30">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-primary lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                        <li >
                            <a className='link 'href='#hero'>Home</a>
                        </li>
                        <li>
                            <a className='link'href='#about'>About</a>
                        </li>
                        <li>
                            <a className='link'href='#contactUs'>Contact us</a>
                        </li>
                    </ul>
                </div>
                <a href='#hero' className="btn btn-ghost normal-case text-xl">Law help Africa</a>
                <ul className="menu menu-horizontal px-1 hidden lg:flex">
                    <li>
                        <a className='link'href='#hero'>Home</a>
                    </li>
                    <li>
                        <a className='link'href='#about'>About</a>
                    </li>
                    <li>
                        <a className='link'href='#contactUs'>Contact us</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;