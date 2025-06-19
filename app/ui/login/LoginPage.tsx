import Image from "next/image";

import LoginForm from "./Form";



const LoginPage = () => {
    return(
        <div className="bg-white grid dark:bg-dark-bg grid-cols-2 w-3/6 shadow-xl shadow-gray-400">
            <div className="w-auto py-24 px-12">
                <div className="pb-12">
                    {/* <Image src={'/logo.jpeg'} alt="Logo" width={20} height={20} className="bg-transparent"/>     */}
                    <h1 className="text-xs">{process.env.NEXT_PUBLIC_COMPANY_NAME}</h1>
                </div>
                <div className="pb-8">
                    <h1 className="text-3xl font-bold">Namaste</h1>
                    <h2 className="text-4xl font-bold mb-4">Welcome Back</h2>
                    <span className="text-gray-600">Hey, Welcome back, Log in. Plan smart Execute better</span>
                </div>
                <LoginForm/>
            </div>
            <div className="h-full w-full relative">
                <Image src={'/task1.jpg'} alt="Task Image" fill  className="object-cover"/>
            </div>
        </div>
    )
}


export default LoginPage;