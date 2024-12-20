import React, { useState } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import { RiCloseLargeFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import ProfileCards from './ProfileCards';

function Profiles({ heading = "Who's watching?", buttonLabel = 'Manage Profiles' }) {
    const [addProfile, setAddProfile] = useState(false)
    function addNewProfile() {
        setAddProfile(true)
    }
    const [edit, setEdit] = useState(false);
    function handleImageClick() {
        setEdit(true);
    }
    function closeImageEdit() {
        setEdit(false);
    }
    return (
        <div className='bg-[#141414] h-screen w-full'>
            <div className='md:w-[600px] px-3 mx-auto h-full flex flex-col justify-center items-center'>
                <h1 className='mb-6 text-xl xs:text-4xl lg:text-5xl pb-4 font-semibold text-white'>{heading}</h1>
                <div className='flex flex-wrap justify-center gap-11 md:gap-8 text-[#888]'>
                    <ProfileCards onClick={handleImageClick} buttonLabel={buttonLabel} src="https://occ-0-7292-3466.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABbFO1ZI9WDUXXCyi_QCEMIen2X1ICb04kRxJmp1mxZTKU6yF0NlEU3xBPMzvqHaturIrsjSS_S5JocdleY1N8-BYgDqy23sydeqH.png?r=8ff" name='Sabina' />
                    <div className='text-center peer md:text-xl'>
                        <button onClick={addNewProfile} className='h-[84px] mb-2 w-[84px] md:h-[130px] md:w-[130px] hover:bg-white rounded-md flex justify-center items-center '>
                            <AiFillPlusCircle className='text-8xl' />
                        </button>
                        <p>Add Profile</p>
                    </div>
                </div>
                {edit && (
                    <div className='fixed w-full h-full overflow-auto bg-[#141414] text-[#dedede]'>
                        <div className='w-full h-[60px] bg-gradient-to-b from-black to-transparent sticky top-0'></div>
                        <div className=' md:max-w-[600px] flex justify-center items-center mx-auto px-4'>
                            <div className='w-[80%] md:w-full'>
                                <h1 className='text-2xl sm:text-5xl pb-3'>Edit Profile</h1>
                                <div className='flex flex-wrap sm:flex-nowrap gap-2  border-y-[1px] border-[#555] '>
                                    <img className='h-[84px] sm:h-[120px] my-4 rounded-md' src="https://occ-0-7292-3466.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABbFO1ZI9WDUXXCyi_QCEMIen2X1ICb04kRxJmp1mxZTKU6yF0NlEU3xBPMzvqHaturIrsjSS_S5JocdleY1N8-BYgDqy23sydeqH.png?r=8ff" alt="sabina" />
                                    <div className='sm:p-4'>
                                        <input type="text" placeholder='sabina' className='w-[90%] sm:w-full h-[40px] bg-[#666] pl-3' />
                                        <div className='py-4'>
                                            <h3 className='text-xl pb-2'>Language:</h3>
                                            <select className='bg-black border-white border-[1px] p-1 pr-8 font-semibold'>
                                                <option value="">Azerbaijani</option>
                                            </select>
                                        </div>
                                        <h3 className='text-xl pb-2'>Game Handle:</h3>
                                        <p className='text-sm font-semibold pb-4'>Your handle is a unique name that'll be used for playing with other Netflix members  across all Netflix Games. <span className='cursor-pointer'>Learn more</span></p>
                                        <input type="text" placeholder='Create Game Handle' className='w-[90%] sm:w-full h-[40px] bg-[#666] pl-3' />
                                        <p className='text-end'>0/16</p>
                                        <div className='border-y-[1px] border-[#555] my-5 py-5'>
                                            <h3 className='text-xl pb-2'>Maturity Settings:</h3>
                                            <p className='text-sm font-semibold pb-4'>Show titles of all maturity ratings for this profile.</p>
                                            <button className='border-[1px] border-[#999] text-[#999] w-[80px] h-[36px] hover:text-white hover:border-white'>Edit</button>
                                        </div>
                                        <h3 className='text-xl pb-2'>Autoplay controls:</h3>
                                        <div className='flex flex-col'>
                                            <label><input type="checkbox" />Autoplay next episode in a series  on all devices.</label>
                                            <label><input type="checkbox" />Autoplay previews while browsing on all devices.</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col sm:flex-row justify-center sm:justify-start gap-4 items-center py-6'>
                                    <button className='bg-[#fff] text-[#000] font-semibold text-xl w-full sm:w-[100px] h-[40px] hover:bg-red-700 hover:text-[#fff]'>Save</button>
                                    <button onClick={closeImageEdit} className='border-[1px] border-[#999]  text-xl text-[#999] w-full sm:w-[120px] h-[40px] hover:text-white hover:border-white'>Cancel</button>
                                    <button className='border-[1px] border-[#999]  text-xl text-[#999] w-full sm:w-[180px] h-[40px] hover:text-white hover:border-white'>Delete Profile</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {addProfile && (
                    <div className="w-full h-full fixed top-0 left-0 bg-[#0005] z-[100]">
                        <div className="w-full h-full relative flex justify-center items-center">
                            <div className="border-[1px] border-[#444] rounded-lg flex-col fixed z-30 max-w-[650px] w-full flex justify-center items-center">
                                <div
                                    className="absolute top-5 right-5 rounded-full cursor-pointer flex items-center justify-center h-[35px] w-[35px]  z-30  hover:bg-[#ffffff46] transition-all duration-300"
                                    onClick={() => setAddProfile(false)}
                                >
                                    <RiCloseLargeFill className="text-white text-2xl" />
                                </div>
                                <div className="bg-[#141414] w-full px-4  pt-12 rounded-lg text-white text-center">
                                    <h1 className='text-xl sm:text-3xl font-semibold py-3'>Add a profile</h1>
                                    <p>Add a profile for another person watching Netflix.</p>
                                    <div className='flex justify-center flex-wrap gap-4 py-8 px-4'>
                                        <div className='h-[84px] w-[84px] text-center hover:text-white md:text-xl'>
                                            <img className='rounded-md hover:border-[3px] mb-2' src="https://occ-0-7292-3466.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfjwXqIYd3kCEU6KWsiHSHvkft8VhZg0yyD50a_pHXku4dz9VgxWwfA2ontwogStpj1NE9NJMt7sCpSKFEY2zmgqqQfcw1FMWwB9.png?r=229" alt="ava1" />
                                        </div>
                                        <div className="relative w-[90%] xs:w-[60%] my-2">
                                            <input
                                                type="text"
                                                placeholder="Name"
                                                className={`rounded-md peer focus:outline-2 outline-offset-2 h-[50px] md:h-[60px] bg-[#191919b2] text-white border-[#dddddd4c] border-[1px] w-full 
                                            placeholder:text-transparent focus:pt-8 focus:pb-6 pl-4 py-2`}
                                            />
                                            <label
                                                className=" absolute top-1 left-0 p-3 pl-5 h-full text-white text-sm truncate pointer-events-none transition-all ease-in-out duration-100
                                            origin-[0_0] peer-focus:scale-90  peer-focus:-translate-y-4 peer-focus:text-gray-400 
                                            peer-[:not(:placeholder-shown)]:scale-90   peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:text-gray-400"
                                            >
                                                Name
                                            </label>
                                        </div>
                                    </div>
                                    <hr className='w-[90%] mx-auto h-[1px] bg-[#666] border-none' />
                                    <div className="w-[90%] mx-auto text-start pt-4 flex justify-between my-4">
                                        <div>
                                            <h3 className='font-semibold'>Children's Profile</h3>
                                            <p className='text-sm text-[#ddd]'>Only see kid-friendly TV shows and movies</p>
                                        </div>
                                        <label className="inline-flex items-center space-x-4 cursor-pointer">
                                            <span className="relative">
                                                <input type="checkbox" className="hidden peer" />
                                                <div className="w-10 h-6 rounded-full shadow-inner bg-[#888] peer-checked:bg-blue-500"></div>
                                                <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-[#222]"></div>
                                            </span>
                                        </label>
                                    </div>
                                    <div className="w-[90%] mx-auto pt-4">
                                        <a className="bg-[#fff] rounded-[.3rem] w-full xs:mx-0 h-[42px] lg:text-xl lg:font-semibold my-2 text-black font-semibold hover:bg-[#999] transition-all duration-300 flex justify-center items-center">
                                            Save
                                        </a>
                                    </div>
                                    <div className="w-[90%] mx-auto">
                                        <a className=" mb-6 rounded-[.3rem] w-full xs:mx-0 h-[42px] lg:text-xl lg:font-semibold my-2 text-white font-semibold hover:bg-[#ffffff34] transition-all duration-300 flex justify-center items-center">
                                            Cancel
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                }
                <div className='mt-16'>
                    {buttonLabel === 'Done' ? (
                        <Link
                            to="/account"
                            className="bg-white text-black hover:text-white hover:bg-red-600 h-[36px] w-[100px] font-semibold text-xl flex justify-center items-center"
                        >
                            {buttonLabel}
                        </Link>
                    ) : (
                        <Link
                            to="/ManageProfiles"
                            className="border-[1px] h-[36px] w-[170px] border-[#888] text-[#888] hover:text-white hover:border-white flex justify-center items-center"
                        >
                            {buttonLabel}
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Profiles