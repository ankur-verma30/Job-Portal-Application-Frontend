import { IconAnchor, IconArrowLeft } from "@tabler/icons-react"
import SignUpComponent from "../SignUpAndLogin/SignUpComponent"
import LoginComponent from "../SignUpAndLogin/LoginComponent"
import { useLocation, useNavigate } from "react-router-dom"
import { Button } from "@mantine/core"


const SignUp = () => {
    const location=useLocation()
    const navigate=useNavigate();
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins']
     overflow-hidden relative">
        <Button className="absolute! left-5 z-10" onClick={()=>navigate("/")} leftSection={<IconArrowLeft size={20} />} variant="light" color="brightSun.4" my="md">Home</Button>
        <div className={`w-screen h-screen flex *:shrink-0 ${location.pathname==='/sign-up'?'-translate-x-1/2':'translate-x-0'} transition-all duration-1000 ease-in-out`}>
            <LoginComponent/>
            <div className={`w-1/2 h-full bg-mine-shaft-900 flex items-center justify-center flex-col gap-3 ${location.pathname==="/sign-up" ? "rounded-r-[200px] " :"rounded-l-[200px] "} transition-all duration-1000 ease-in-out`}>
            <div className="flex gap-1 items-center text-bright-sun-400">
                <IconAnchor className="h-16 w-16" stroke={2.5}/>
                <div className="text-3xl font-semibold">JobHook</div>
            </div>
            <div className="text-2xl text-mine-shaft-200 font-semibold">Find the right job for you</div>
            </div>
        <SignUpComponent/>
        </div>
    </div>
  )
}

export default SignUp