
const LitButton = ( { children } ) => {
    return (
        <button className="relative py-[2px] after:content-[''] after:absolute  after:w-full after:h-full after:top-0 after:left-0 after:bg-gradient-to-r after:from-[#172C35] after:from-5% after:via-[#475E68] aftervia-40% after:to-[#172C35]  hover:after:via-cyan-500 overflow-hidden transition-transform duration-300">
            <div
                className="relative z-20 text-white px-6 bg-gradient-to-r from-[#19637B] from-10% via-100% to-10%  via-[#1A4C5F]  to-[#19637B] py-1.5 flex items-center"
            >
                {children}
            </div>
        </button>
    );
};

export default LitButton;