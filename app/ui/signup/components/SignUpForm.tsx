"use client";
import {ErrorMessage, Field, Form, Formik} from "formik";
import Link from "next/link";
import UserRegisterMutation from "../hooks/UserRegister";
import toast from "react-hot-toast";
import { UserRegisterationValidation } from "../hooks/UserRegisterValidation";



export default function SignUpForm(){

    const {mutate,isPending} = UserRegisterMutation();

    return(
        <Formik
            onSubmit={(values,action)=>{
                if(values.terms == false){
                    toast.error("Please agree to terms",{
                        position:"top-center",
                        duration:2000,
                        className:"text-xl"
                    });
                    return;
                }
                 mutate({
                        name:values.name,
                        email:values.email,
                        password:values.password
                    });
                setTimeout(() => {
                   
                    action.setSubmitting(false);
                }, 600);
            }}

            validationSchema={UserRegisterationValidation}
            initialValues={{
                name:"",
                email:"",
                password:"",
                terms:false,
            }}
        >
            {
                ({values})=>(
                    <Form className="px-10 sm:px-2 md:px-4 md:w-5/6 lg:px-2 lg:w-5/6 xl:w-5/6 mt-12 sm:w-5/6 w-3/6">
                      <div>
                        <Field
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            className="border-2 w-full  rounded-2xl text-base ring-0 outline-none focus:ring-0 focus:outline-none"
                        />
                        <ErrorMessage
                            component={'div'}
                            name="name"
                            className="text-red-600"
                        />
                      </div>
                      <div className="mt-6">
                        <Field
                            type="email"
                            name="email"
                            placeholder="johndoe@gmail.com"
                            className="border-2 w-full rounded-2xl text-base ring-0 outline-none focus:ring-0 focus:outline-none"
                        />
                        <ErrorMessage
                            component={'div'}
                            name="email"
                            className="text-red-600"
                        />
                      </div>
                      <div className="mt-6">
                        <Field
                            type="password"
                            name="password"
                            placeholder="************"
                            className="border-2 w-full rounded-2xl text-base ring-0 outline-none focus:ring-0 focus:outline-none"
                        />
                        <ErrorMessage
                            component={'div'}
                            name="password"
                            className="text-red-600"
                        />
                      </div>
                      <div className="mt-6 pl-1">
                        <label className="flex gap-2 items-center outline-none focus:outline-none ring-0 focus:ring-0">
                            <Field
                                type="checkbox"
                                name="terms"
                                className="outline-none rounded-sm focus:outline-none ring-0 focus:ring-0 cursor-pointer"
                            />
                            <span>I agree to all Term, <span className="font-semibold">Privacy Policy</span> and Fees</span>
                        </label>
                      </div>
                      <div className="mt-12 w-full">
                        <button type="submit" className="text-lg w-full bg-dark-bg rounded-3xl text-white py-3">
                            {isPending ? "Signing up......": "Sign Up"}
                        </button>
                      </div>
                      <div className="mt-4">
                        <span className="text-base">
                            Already have an account? {" "}<Link href={'/login'} className="text-green-800 font-bold cursor-pointer">Log In</Link>
                        </span>
                      </div>
                    </Form>
                )
            }
        </Formik>
    )
}