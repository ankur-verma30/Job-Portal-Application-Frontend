import {  Button,  PasswordInput, rem, TextInput } from "@mantine/core"
import { IconCheck, IconLock, IconMail, IconX } from "@tabler/icons-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { loginUser } from "../Services/UserService"
import { loginValidation } from "../Services/FormValidation"
import { notifications } from "@mantine/notifications"
import { useDisclosure } from "@mantine/hooks"
import ResetPassword from "./ResetPassword"

const form={
    email:"",
    password:"",
}

const LoginComponent = () => {
   const [data,setData]=useState<{ [key: string]: string }>(form);
   const [formError, setFormError] = useState<{ [key: string]: string }>(form);
   const [opened, {open,close}]=useDisclosure(false);
   const navigate=useNavigate();
   
   

    const handleChange=(event:any)=>{
        setFormError({...formError,[event.target.name]:""});
        setData({
            ...data,
            [event.target.name]:event.target.value
        });
    }

    const handleSubmit=()=>{
           let valid = true;
        let newFormError: { [key: string]: string } = {};

        for (let key in data) {
             newFormError[key] = loginValidation(key, data[key]);
            if (newFormError[key]) valid = false;
        }
        setFormError(newFormError);
        if(valid){
            loginUser(data).then((res)=>{
                console.log(res)
                  notifications.show({
                    title: 'User Logged In Successfully',
                    message: 'Welcome to JobHook',
                    withCloseButton: true,
                    icon: <IconCheck style={{ width: "90%", height: "90%" }} />,
                    color: "teal",
                    withBorder: true,
                    className: "border-green-500!"
                })
                setTimeout(()=>{
                    navigate("/")
                },2000)
            }).catch((error)=>{
                console.log(error.response.data);
                  notifications.show({
                    title: 'Login Failed',
                    message: error.response.data.errorMessage,
                    withCloseButton: true,
                    icon: <IconX style={{ width: "90%", height: "90%" }} />,
                    color: "red",
                    withBorder: true,
                    className: "border-red-500!"
                })
            })
        }
    }
  return (
    <>
     <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
            <div className="text-2xl font-semibold ">Login</div>

            <TextInput leftSectionPointerEvents="none" value={data.email} error={formError.email} name="email" onChange={handleChange} leftSection={<IconMail style={{ width: rem(16), height: rem(16) }} />} label="Email" placeholder="Enter your email" withAsterisk />

            <PasswordInput value={data.password} name="password" error={formError.password} onChange={handleChange} leftSection={<IconLock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />} label="Password" placeholder="Enter your password" withAsterisk />

            <Button onClick={handleSubmit} autoContrast variant="filled">Login</Button>
            <div className="mx-auto">Don't have an account?<span className="text-bright-sun-400 hover:underline cursor-pointer hover:text-lg" onClick={()=>{navigate("/sign-up");setFormError(form); setData(form)}}> Sign Up</span></div>
            <div onClick={open} className="text-bright-sun-400 hover:underline cursor-pointer hover:text-lg text-center">Forget Password</div>

        </div>
        <ResetPassword opened={opened} close={close}/>
        </>
  )
}

export default LoginComponent