import { PiLockKey } from "react-icons/pi"

function Step3() {
    return (
        <main className="px-4 flex flex-col max-w-[1100px] mx-auto py-11">
            <div className="max-w-[600px] mx-auto py-8 text-center ">
                <PiLockKey className="text-red-600 text-5xl w-full my-6" />
                <p className="uppercase text-sm">step <span className="font-semibold"> 3 </span> of <span className="font-semibold">3</span></p>
                <h1 className="text-3xl font-semibold text-[#333]">Choose how to pay</h1>
                <p className="text-lg py-5">Your payment is encrypted and you can change how you pay anytime.</p>
                <p className="font-semibold text-lg">Secure for peace of mind. <br />
                    Cancel easily online.</p>
            </div>
        </main>
    )
}
export default Step3