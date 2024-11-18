import { useState } from "react";
import { GoCheckCircleFill } from "react-icons/go";
import { Link } from "react-router-dom";

function Planform() {
    const [activeDiv, setActiveDiv] = useState(null);

    const handleClick = (id) => {
        setActiveDiv(activeDiv === id ? null : id);
    };
    return (
        <main className="max-w-[1200px] px-5 mx-auto">
            <div>
                <p className="uppercase text-sm">step <span className="font-semibold"> 2 </span> of <span className="font-semibold">3</span></p>
                <h1 className="text-3xl font-semibold text-[#333]">Choose the plan that’s right for you</h1>
                <div className="flex w-full justify-center items-end flex-wrap gap-3 py-6">
                    <div
                        className={`border-[1px] p-3 border-[#9e9e9e] ${activeDiv === 1
                            ? "bg-gradient-to-br from-[#1f509d] to-[#663bd9] text-white"
                            : "bg-white text-[#333]"
                            } min-w-[120px] w-[160px] h-[110px] rounded-xl cursor-pointer relative`}
                        onClick={() => handleClick(1)}
                    >
                        <h2 className="font-bold ">Basic</h2>
                        <p>720p</p>
                        {activeDiv === 1 && <GoCheckCircleFill className="absolute text-xl bottom-3 right-3" />}
                    </div>
                    <div
                        className={`border-[1px] p-3 border-[#9e9e9e] ${activeDiv === 2
                            ? "bg-gradient-to-br from-[#1f509d] to-[#a239d5] text-white"
                            : "bg-white text-[#333]"
                            } min-w-[120px] w-[160px] h-[110px] rounded-xl cursor-pointer relative`}
                        onClick={() => handleClick(2)}
                    >
                        <h2 className="font-bold ">Standart</h2>
                        <p>1080p</p>
                        {activeDiv === 2 && <GoCheckCircleFill className="absolute text-xl bottom-3 right-3" />}
                    </div>
                    <div className="min-w-[120px] w-[160px]">
                        <div className={`${activeDiv === 3 ? "bg-red-600" : "bg-[#4c4c4c]"}  py-2 rounded-t-xl text-white w-full text-sm font-semibold flex justify-center items-center`}>Most Popular</div>
                        <div
                            className={`border-x-[1px] border-b-[1px] p-3 border-[#9e9e9e] ${activeDiv === 3
                                ? "bg-gradient-to-br from-[#1f509d] to-[#d50f21] text-white"
                                : "bg-white text-[#333]"
                                }  h-[110px] rounded-b-xl cursor-pointer relative`}
                            onClick={() => handleClick(3)}
                        >
                            <h2 className="font-bold ">Premium</h2>
                            <p>4K + HDR</p>
                            {activeDiv === 3 && <GoCheckCircleFill className="absolute text-xl bottom-3 right-3" />}
                        </div>
                    </div>
                </div>
                <ul className="w-full xs:max-w-[500px] mx-auto">
                    <li className="flex justify-between items-center py-3 border-b-[1px]">
                        <p className="text-[#787878] font-semibold text-sm w-[40%]">Monthly price</p>
                        <h3 className="text-[#212121] text-lg font-semibold w-[30%] text-right">EUR 7.99</h3>
                    </li>
                    <li className="flex justify-between items-center  py-3 border-b-[1px]">
                        <p className="text-[#787878] font-semibold text-sm w-[40%]">Video and sound quality</p>
                        <h3 className="text-[#212121] text-sm font-semibold w-[30%] text-right">Good</h3>
                    </li>
                    <li className="flex justify-between items-center  py-3 border-b-[1px]">
                        <p className="text-[#787878] font-semibold text-sm w-[40%]">Resolution</p>
                        <h3 className="text-[#212121] text-sm font-semibold w-[30%] text-right">720p (HD)</h3>
                    </li>
                    <li className="flex justify-between items-center  py-3 border-b-[1px]">
                        <p className="text-[#787878] font-semibold text-sm w-[40%]">Supported devices</p>
                        <h3 className="text-[#212121] text-sm font-semibold w-[30%] text-right">TV, computer, mobile phone, tablet</h3>
                    </li>
                    <li className="flex justify-between items-center  py-3 border-b-[1px]">
                        <p className="text-[#787878] font-semibold text-sm w-[40%]">Devices your household can watch at the same time</p>
                        <h3 className="text-[#212121] text-sm font-semibold w-[30%] text-right">1</h3>
                    </li>
                    <li className="flex justify-between items-center  py-3 border-b-[1px]">
                        <p className="text-[#787878] font-semibold text-sm w-[40%]">Download devices</p>
                        <h3 className="text-[#212121] text-sm font-semibold w-[30%] text-right">1</h3>
                    </li>
                </ul>
                <div className="text-xs w-full xs:max-w-[500px] mx-auto text-[#787878] font-semibold pt-3 pb-6">
                    <p className="pt-5">HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our <span className="text-blue-600 cursor-pointer">Terms of Use</span> for more details.</p>
                    <p className="py-3">Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard and 1 with Basic.</p>
                    <Link to={'/signup/paymentPicker'} >
                        <button className="relative w-full mb-6 my-4 bg-red-600 hover:bg-red-500 h-[55px] text-white text-2xl rounded-sm">
                            Next
                        </button>
                    </Link>
                </div>
            </div>
        </main >
    )
}
export default Planform