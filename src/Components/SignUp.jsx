export default function SignUp() {
    return (
        <div className="w-full signup border flex items-center">
            <img className="hidden md:flex md:w-[50%] lg:w-[59%] lg:mr-auto" src="./Side Image.svg" alt="Side Image" />
            <div className="flex mx-auto p-5 s:p-0 flex-col justify-between w-[371px] h-[530px]">
                <div className="flex flex-col justify-between h-[78px]">
                    <div className="text-2xl">Create an account</div>
                    <div className="text-sm">Enter your details below</div>
                </div>
                <div className="flex flex-col justify-between h-[176px]">
                    <label htmlFor="name"><input className="h-[32px] border focus:outline-none w-full border-b-gray-400" type="text" name="" id="" placeholder="Name" /></label>
                    <label htmlFor="name"><input className="h-[32px] border focus:outline-none w-full border-b-gray-400" type="text" name="" id="" placeholder="Email or Phone Number" /></label>
                    <label htmlFor="name"><input className="h-[32px] border focus:outline-none w-full border-b-gray-400 outline-none" type="password" name="" id="" placeholder="Password" /></label>
                </div>
                <div className="flex flex-col items-center justify-between h-[188px]">
                    <button className='bg-[#DB4444] w-full h-[56px] text-white mx-auto'>Create Account</button>
                    <button className='flex justify-center items-center border -mt-4 border-gray-600 gap-4 w-full h-[56px]'><img className="w-[24px] h-[24px]" src="./Icon-Google.svg" alt="" /> Sign up with Google</button>
                    <div className="text-gray-500 gap-4 flex justify-between">Already have account? <a className="text-gray-600" href="">Log in</a> </div>
                </div>
            </div>
        </div>
    )
} 