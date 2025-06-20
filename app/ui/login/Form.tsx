"use client";
import {ErrorMessage, Field, Form, Formik} from "formik";
import { LoginFormValidation } from "./hooks/FormValidation";
import useLoginMutation from "./hooks/useLogin";
import Link from "next/link";



const LoginForm = () =>{

    const {mutate,isPending} = useLoginMutation();

    return(
        <div>
            <Formik
                onSubmit={(values,action)=>{
                    mutate({
                        email:values.email,
                        password:values.password
                    });
                    setTimeout(() => {
                        action.setSubmitting(false);
                    }, 1200);
                }}
                validationSchema={LoginFormValidation}
                initialValues={{
                    email:"",
                    password:"",
                    remember:false
                }}
            >
                {({values})=>(
                  <Form>
                    <div className="py-6">
                        <Field
                            type="email"
                            name="email"
                            placeholder="Email@email.com"
                            className="w-full placeholder:text-gray-600 rounded-lg focus:ring-0 outline-none ring-0 focus:outline-none"
                        />
                        <ErrorMessage
                            component={'div'}
                            name="email"
                            className="text-red-600"
                        />
                    </div>
                    <div>
                        <Field
                            type="password"
                            name="password"
                            placeholder="---Password---"
                            className="w-full placeholder:text-gray-600 rounded-lg focus:ring-0 outline-none ring-0 focus:outline-none"
                        />
                        <ErrorMessage
                            component={'div'}
                            name="password"
                            className="text-red-600"
                        />
                    </div>
                    <div className="mt-3 flex justify-between">
                        <div>
                            <label htmlFor="remember" className="ring-0 flex items-center gap-2 focus:ring-0">
                                <Field
                                    type="checkbox"
                                    name="remember"
                                    className="focus:ring-0 ring-0 cursor-pointer outline-none focus:outline-none"
                                />
                                <span className={`${values.remember ? "text-gray-900" : "text-gray-500"} text-sm`}>Remember Me</span>
                            </label>
                        </div>
                        <div>
                            <Link href={"/forgot-password"} className="font-semibold">Forgot Password?</Link>
                        </div>
                    </div>
                    <div className="w-full mt-8">
                        <button type="submit" className="w-full rounded-lg bg-dark-bg dark:bg-blue-primary text-white text-[14px] py-3">
                            {isPending ? "Signing....." : "Sign In"}
                        </button>
                    </div>

                    {/* Sign up link */}
                    <div className="mt-16">
                        <Link href={"/signup"} className="text-gray-600 dark:text-gray-400">Don't have an account?<span className="text-purple-600 dark:text-purple-400 cursor-pointer font-bold">{" "}Sign Up</span></Link>
                    </div>
                  </Form>  
                )}
            </Formik>
        </div>
    )
}

export default LoginForm;