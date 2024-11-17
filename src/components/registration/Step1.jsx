function Step1() {
    return (
        <main className="px-4 max-w-[1100px] mx-auto">
            <div className="max-w-[500px] mx-auto py-8">
                <p className="uppercase text-sm">step <span className="font-semibold"> 1 </span> of <span className="font-semibold">3</span></p>
                <h1 className="text-3xl font-semibold text-[#333]">Welcome back! <br /> Joining Netflix is easy.</h1>
                <p className="text-lg py-4">Enter your password and you'll be watching in no time.</p>
                <div>
                    <p className="text-lg pt-2">Email</p>
                    <p className="font-semibold text-[#333]">sabiinajm@gmail.com</p>
                    <div className="relative w-[90%] my-4">
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className={`peer focus:outline-2 outline-offset-2 h-[55px] pl-3 rounded-sm  text-[#333] border-[#767676] border-[1px] w-full 
                placeholder:text-transparent focus:pt-6 focus:pb-6 py-2 `}
                        />
                        <label
                            className="absolute top-1 left-0 p-3 h-full text-[#767676] text-sm truncate pointer-events-none transition-all ease-in-out duration-100
        origin-[0_0] peer-focus:scale-90 peer-focus:-translate-x-1 peer-focus:-translate-y-4 peer-focus:text-gray-400
        peer-[:not(:placeholder-shown)]:scale-90  peer-[:not(:placeholder-shown)]:-translate-x-1  peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:text-gray-400"
                        >
                            Enter your password
                        </label>
                    </div>
                </div>
                <p className="text-blue-500 mb-3 cursor-pointer hover:underline">Forgot your password? </p>
                <button className="relative w-[90%] mb-6 my-4 bg-red-600 hover:bg-red-500 h-[55px] text-white text-2xl rounded-sm">
                    Next
                </button>
            </div>
        </main>
    )
}
export default Step1