import { HiLanguage } from "react-icons/hi2"

function Footer() {
  return (
    <footer className="bg-black">
      <div className="text-[#ffffffb3] max-w-[1100px] mx-auto px-6">
        <p className="py-10 underline">Questions? Contact us.</p>
        <div className=" underline text-[.9rem] grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <p>FAQ</p>
          <p>Help Center</p>
          <p>Account</p>
          <p>Media Center</p>
          <p>Investor Relations</p>
          <p>Ways to Watch</p>
          <p>Privacy</p>
          <p>Corporate Information</p>
          <p>Speed Test</p>
          <p>Only on Netflix</p>
          <p>Help Center</p>
          <p>Media Center</p>
          <p>Jobs</p>
          <p>Terms of Use</p>
          <p>Cookie Preferences</p>
          <p>Contact Us</p>
          <p>Legal Notices</p>
        </div>
        <div className='relative py-10'>
          <HiLanguage className='text-white absolute top-[50px] left-2' />
          <select className='h-[35px] w-[140px] rounded-[.3rem] pl-6 bg-[#191919b2] text-white outline-none border-[#dddddd4c] border-[1px]'>
            <option value="eng">English</option>
            <option value="ru">Russian</option>
            <option value="aze">Azerbaijani</option>
          </select>
        </div>
        <p className="py-8 text-[.9rem]">Netflix Azerbaijan</p>
      </div>
    </footer>
  )
}
export default Footer