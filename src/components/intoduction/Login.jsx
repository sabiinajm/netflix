import homeBg from '../../assets/imgs/home-bg.jpg'
function Login() {
  return (
    <main>
      <div className='fixed top-0 -z-10 w-full h-full'>
        <img src={homeBg} alt="background" className='w-full h-full object-cover brightness-40' />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70"></div>
      </div>
      <div className="bg-[#0000009c] h-[580px] max-w-[450px] mx-auto p-12">
        <h1 className='text-white text-3xl font-semibold pb-6'>Sign In</h1>
        <input
          type="text"
          placeholder="Email address"
          className={`peer focus:outline-2 outline-offset-2 h-[55px] pl-3 rounded-[.3rem] bg-[#191919b2] text-white border-[#dddddd4c] border-[1px] w-full 
                placeholder:text-transparent focus:pt-6 focus:pb-6 py-2 `}
        />
      </div>
    </main>
  )
}

export default Login