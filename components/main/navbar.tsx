

export default function Navbar(){

    return (
        <nav className="w-[95%] md:w-[30%] mx-auto shadow-lg fixed bottom-2 left-[2.5%] md:left-[35%] h-12 bg-emerald-50/50 bg-opacity-5 backdrop-blur-md rounded-full">
            <div className="flex flex-row justify-around w-full gap-4 items-center px-2 pt-2 pb-4">
                <div className="p-2 cursor-pointer w-16 h-12 shadow-sm font-semibold text-center hover:shadow-md rounded-full">A</div>
                <div className="p-2 cursor-pointer w-16 h-12 shadow-sm font-semibold text-center hover:shadow-md rounded-full">B</div>
                <div className="p-2 cursor-pointer w-16 h-12 shadow-sm font-semibold text-center hover:shadow-md rounded-full">C</div>
                <div className="p-2 cursor-pointer w-16 h-12 shadow-sm font-semibold text-center hover:shadow-md rounded-full">D</div>
            </div>
        </nav>
    )
}