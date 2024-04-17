// components/Navbar.tsx
const Navbar: React.FC = () => {
    return (
    <nav className="bg-gray-800 px-3 md:px-10 lg:px-20 pt-6 md:pt-12">
        <div className="container mx-auto flex items-center justify-between">
        <a href="#">
            <div className="text-darkgrey">shashank <span className="text-wheat bg-darkgrey">(deep)</span></div>
        </a>
        <div className="flex md:hidden">
            {/* Hamburger icon for mobile */}
            <button
            type="button"
            className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
            aria-label="Toggle menu"
            >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                />
            </svg>
            </button>
        </div>
        <ul className="hidden md:flex space-x-4">
            <li>
            <a href="#" className="text-white">Projects</a>
            </li>
            <li>
            <a href="#" className="text-white">Skills</a>
            </li>
            <li>
            <a href="#" className="text-white">Education</a>
            </li>
            <li>
            <a href="#" className="text-white">Contact Me</a>
            </li>
        </ul>
        </div>
    </nav>
    );
};
  
export default Navbar;  