import { useState } from "react";
import { GoCheckCircleFill } from "react-icons/go";
import { Link } from "react-router-dom";

function Planform() {
    const [activeDiv, setActiveDiv] = useState(null);

    const handleClick = (id) => {
        setActiveDiv(activeDiv === id ? null : id);
    };
    return (
        <main className="max-w-[600px] lg:max-w-[1200px] p-6 mx-auto">
            <div>
                <p className="uppercase text-sm">step <span className="font-semibold"> 2 </span> of <span className="font-semibold">3</span></p>
                <h1 className="text-3xl font-semibold text-[#333]">Choose the plan that’s right for you</h1>
                <div className="flex lg:h-[770px] w-full justify-center items-end lg:items-start flex-wrap lg:flex-nowrap pt-8 gap-3">
                    <div
                        className="h-[90%] lg:w-[325px] flex-auto lg:flex-none lg:mt-[35px] lg:border-[1px] lg:p-2 rounded-2xl border-[#bcbcbc] hover:border-[#888] hover:shadow-lg"
                        onClick={() => handleClick(1)}>
                        <div
                            className={`border-[1px] p-3 border-[#9e9e9e] lg:bg-gradient-to-br lg:from-[#1f509d] lg:to-[#663bd9] lg:text-white ${activeDiv === 1
                                ? "bg-gradient-to-br from-[#1f509d] to-[#663bd9] text-white"
                                : "bg-white text-[#333]"
                                } min-w-[160px] lg:w-full lg:h-[90px] h-[110px] rounded-xl cursor-pointer relative`}
                        >
                            <h2 className="font-bold ">Basic</h2>
                            <p className="lg:font-semibold">720p</p>
                            {activeDiv === 1 && <GoCheckCircleFill className="absolute text-xl bottom-3 right-3" />}
                        </div>
                        <ul className="hidden lg:flex flex-col justify-center lg:gap-2 min-h-[500px] w-[90%] mx-auto">
                            <li className="flex flex-col justify-between items-center lg:items-start py-3 border-b-[1px]">
                                <p className="text-[#787878] font-semibold text-sm">Monthly price</p>
                                <h3 className="text-[#212121] text-lg font-semibold lg:w-auto text-right">EUR 7.99</h3>
                            </li>
                            <li className="flex flex-col justify-between items-center lg:items-start py-3 border-b-[1px]">
                                <p className="text-[#787878] font-semibold text-sm">Video and sound quality</p>
                                <h3 className="text-[#212121] text-sm font-semibold lg:w-auto text-right">Good</h3>
                            </li>
                            <li className="flex flex-col justify-between items-center lg:items-start py-3 border-b-[1px]">
                                <p className="text-[#787878] font-semibold text-sm">Resolution</p>
                                <h3 className="text-[#212121] text-sm font-semibold lg:w-auto text-right">720p (HD)</h3>
                            </li>
                            <li className="flex flex-col justify-between items-center lg:items-start py-3 border-b-[1px]">
                                <p className="text-[#787878] font-semibold text-sm">Supported devices</p>
                                <h3 className="text-[#212121] text-sm font-semibold lg:w-auto text-right">TV, computer, mobile phone, tablet</h3>
                            </li>
                            <li className="flex flex-col justify-between items-center lg:items-start py-3 border-b-[1px]">
                                <p className="text-[#787878] font-semibold text-sm">Devices your household can watch at the same time</p>
                                <h3 className="text-[#212121] text-sm font-semibold lg:w-auto text-right">1</h3>
                            </li>
                            <li className="flex flex-col justify-between items-center lg:items-start py-3">
                                <p className="text-[#787878] font-semibold text-sm">Download devices</p>
                                <h3 className="text-[#212121] text-sm font-semibold lg:w-auto text-right">1</h3>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="h-[90%] lg:w-[325px] flex-auto lg:flex-none lg:mt-[35px] lg:border-[1px] lg:p-2 rounded-2xl border-[#bcbcbc] hover:border-[#888] hover:shadow-lg"
                        onClick={() => handleClick(2)}>
                        <div
                            className={`border-[1px] p-3 border-[#9e9e9e]  lg:bg-gradient-to-br lg:from-[#1f509d] lg:to-[#a239d5] lg:text-white ${activeDiv === 2
                                ? "bg-gradient-to-br from-[#1f509d] to-[#a239d5] text-white"
                                : "bg-white text-[#333]"
                                } min-w-[160px] lg:w-full h-[110px] lg:h-[90px] rounded-xl cursor-pointer relative`}
                        >
                            <h2 className="font-bold ">Standart</h2>
                            <p className="lg:font-semibold">1080p</p>
                            {activeDiv === 2 && <GoCheckCircleFill className="absolute text-xl bottom-3 right-3" />}
                            <ul className="hidden lg:flex flex-col justify-center lg:gap-2 min-h-[560px] w-[90%] mx-auto">
                                <li className="flex flex-col justify-between items-center lg:items-start py-3 border-b-[1px]">
                                    <p className="text-[#787878] font-semibold text-sm">Monthly price</p>
                                    <h3 className="text-[#212121] text-lg font-semibold lg:w-auto text-right">EUR 7.99</h3>
                                </li>
                                <li className="flex flex-col justify-between items-center lg:items-start py-3 border-b-[1px]">
                                    <p className="text-[#787878] font-semibold text-sm">Video and sound quality</p>
                                    <h3 className="text-[#212121] text-sm font-semibold lg:w-auto text-right">Good</h3>
                                </li>
                                <li className="flex flex-col justify-between items-center lg:items-start py-3 border-b-[1px]">
                                    <p className="text-[#787878] font-semibold text-sm">Resolution</p>
                                    <h3 className="text-[#212121] text-sm font-semibold lg:w-auto text-right">720p (HD)</h3>
                                </li>
                                <li className="flex flex-col justify-between items-center lg:items-start py-3 border-b-[1px]">
                                    <p className="text-[#787878] font-semibold text-sm">Supported devices</p>
                                    <h3 className="text-[#212121] text-sm font-semibold lg:w-auto text-right">TV, computer, mobile phone, tablet</h3>
                                </li>
                                <li className="flex flex-col justify-between items-center lg:items-start py-3 border-b-[1px]">
                                    <p className="text-[#787878] font-semibold text-sm">Devices your household can watch at the same time</p>
                                    <h3 className="text-[#212121] text-sm font-semibold lg:w-auto text-right">1</h3>
                                </li>
                                <li className="flex flex-col justify-between items-center lg:items-start py-3">
                                    <p className="text-[#787878] font-semibold text-sm">Download devices</p>
                                    <h3 className="text-[#212121] text-sm font-semibold lg:w-auto text-right">1</h3>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="h-[90%] lg:w-[325px]  flex-auto  lg:flex-none">
                        <div className={`${activeDiv === 3 ? "bg-red-600" : "bg-[#4c4c4c]"} py-2 rounded-t-xl text-white w-full text-sm font-semibold hidden lg:flex justify-center items-center`}>Most Popular</div>
                        <div
                            className=" lg:border-[1px] h-full lg:p-2 rounded-2xl lg:rounded-t-none border-[#bcbcbc] hover:border-[#888] hover:shadow-lg lg:relative"
                            onClick={() => handleClick(3)}>

                            <div className="min-w-[160px] lg:w-[300px] mx-auto">
                                <div className={`${activeDiv === 3 ? "bg-red-600" : "bg-[#4c4c4c]"} lg:hidden py-2 rounded-t-xl text-white w-full text-sm font-semibold flex justify-center items-center`}>Most Popular</div>
                                <div
                                    className={`border-x-[1px] border-b-[1px] p-3 border-[#9e9e9e] lg:bg-gradient-to-br lg:from-[#1f509d] lg:to-[#d50f21] lg:text-white ${activeDiv === 3
                                        ? "bg-gradient-to-br from-[#1f509d] to-[#d50f21] text-white"
                                        : "bg-white text-[#333]"
                                        }  h-[110px] lg:h-[90px] rounded-b-xl lg:rounded-t-xl cursor-pointer relative`}
                                >
                                    <h2 className="font-bold ">Premium</h2>
                                    <p className="lg:font-semibold">4K + HDR</p>
                                    {activeDiv === 3 && <GoCheckCircleFill className="absolute text-xl bottom-3 right-3" />}
                                    <ul className="hidden lg:flex flex-col justify-center lg:gap-2 min-h-[560px] w-[90%] mx-auto">
                                        <li className="flex flex-col justify-between items-center lg:items-start py-3 border-b-[1px]">
                                            <p className="text-[#787878] font-semibold text-sm">Monthly price</p>
                                            <h3 className="text-[#212121] text-lg font-semibold lg:w-auto text-right">EUR 7.99</h3>
                                        </li>
                                        <li className="flex flex-col justify-between items-center lg:items-start py-3 border-b-[1px]">
                                            <p className="text-[#787878] font-semibold text-sm">Video and sound quality</p>
                                            <h3 className="text-[#212121] text-sm font-semibold lg:w-auto text-right">Good</h3>
                                        </li>
                                        <li className="flex flex-col justify-between items-center lg:items-start py-3 border-b-[1px]">
                                            <p className="text-[#787878] font-semibold text-sm">Resolution</p>
                                            <h3 className="text-[#212121] text-sm font-semibold lg:w-auto text-right">720p (HD)</h3>
                                        </li>
                                        <li className="flex flex-col justify-between items-center lg:items-start py-3 border-b-[1px]">
                                            <p className="text-[#787878] font-semibold text-sm">Supported devices</p>
                                            <h3 className="text-[#212121] text-sm font-semibold lg:w-auto text-right">TV, computer, mobile phone, tablet</h3>
                                        </li>
                                        <li className="flex flex-col justify-between items-center lg:items-start py-3 border-b-[1px]">
                                            <p className="text-[#787878] font-semibold text-sm">Devices your household can watch at the same time</p>
                                            <h3 className="text-[#212121] text-sm font-semibold lg:w-auto text-right">1</h3>
                                        </li>
                                        <li className="flex flex-col justify-between items-center lg:items-start py-3">
                                            <p className="text-[#787878] font-semibold text-sm">Download devices</p>
                                            <h3 className="text-[#212121] text-sm font-semibold lg:w-auto text-right">1</h3>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="w-full py-6 xs:max-w-[500px] mx-auto lg:hidden">
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
                <div className="text-xs w-full mx-auto text-[#787878] font-semibold pt-3 pb-6 lg:px-8">
                    <p className="pt-5">HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our <span className="text-blue-600 cursor-pointer">Terms of Use</span> for more details.</p>
                    <p className="py-3">Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard and 1 with Basic.</p>
                    <Link to={'/signup/paymentPicker'} className="w-full lg:w-[320px] mx-auto mb-6 my-4 bg-red-600 hover:bg-red-500 h-[55px] flex justify-center items-center text-white text-2xl rounded-sm" >
                        Next
                    </Link>
                </div>
            </div>
        </main >
    )
}
export default Planform