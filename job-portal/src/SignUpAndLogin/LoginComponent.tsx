import {  Button,  PasswordInput, rem, TextInput } from "@mantine/core"
import { IconLock, IconMail } from "@tabler/icons-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { loginUser } from "../Services/UserService"

const form={
    email:"",
    password:"",
}

const LoginComponent = () => {
   const [data,setData]=useState(form);

    const handleChange=(event:any)=>{
        setData({
            ...data,
            [event.target.name]:event.target.value
        });
    }

    const handleSubmit=()=>{
        loginUser(data).then((res)=>{
            console.log(res)
        }).catch((error)=>{
            console.log(error.response.data);
        })
    }
  return (
     <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
            <div className="text-2xl font-semibold ">Create Account</div>

            <TextInput leftSectionPointerEvents="none" value={data.email} name="email" onChange={handleChange} leftSection={<IconMail style={{ width: rem(16), height: rem(16) }} />} label="Email" placeholder="Enter your email" withAsterisk />

            <PasswordInput value={data.password} name="password" onChange={handleChange} leftSection={<IconLock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />} label="Password" placeholder="Enter your password" withAsterisk />

            <Button onClick={handleSubmit} autoContrast variant="filled">Login</Button>
            <div className="mx-auto">Don't have an account? <Link to="/sign-up" className="text-bright-sun-400 hover:underline hover:text-lg">Sign Up</Link></div>

        </div>
  )
}

export default LoginComponent