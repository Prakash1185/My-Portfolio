export const WhiteBgButton = ({ text = "text" }) => {
    return (
        <>
            <button className="relative text-[15px] font-bold border-none cursor-pointer bg-black rounded-full">
                <span
                    className="block border-2 border-black rounded-full px-6 py-3 bg-Nwhite text-black transform -translate-y-1 transition-transform duration-100 ease-in hover:-translate-y-[0.4em] active:translate-y-0"
                >
                    {text}
                </span>
            </button>

        </>
    )
}


export const YellowBgButton = ({ text = "text" }) => {
    return (
        <>
            <button className="relative text-[15px] font-bold border-none cursor-pointer bg-black rounded-full">
                <span
                    className="block border-2 border-black rounded-full px-6 py-3 bg-bgYellow text-black transform -translate-y-1 transition-transform duration-100 ease-in hover:-translate-y-[0.4em] active:translate-y-0"
                >
                    {text}
                </span>
            </button>

        </>
    )
}
