"use client";

import {Field, Form, Formik} from "formik";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import * as yup from "yup";


export default function ForgotForm(){
    return(
        <Formik
            onSubmit={(values,action)=>{
                console.log(values);
                setTimeout(() => {
                    action.setSubmitting(false);
                }, 600);
            }}
            initialValues={{
                email:""
            }}
            validationSchema={{
                email: yup.string().email().required()
            }}
        >
            {()=>(
                <Form>
                    <div className="flex flex-col">
                        <label htmlFor="forgotEmail" className="font-medium text-base">Email Address</label>
                        <Field
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            className="text-base ring-0 focus:ring-0 outline-none focus:outline-none rounded-lg"
                        />
                    </div>
                    <button type="submit" className="bg-blue-primary w-full mt-6 py-3 text-white rounded-lg">
                        Reset Password
                    </button>

                    <Link href={"/login"}>
                        <ArrowLeft /> {" "}<span>Back to Login</span>
                    </Link>
                </Form>
            )}
        </Formik>
    )
}