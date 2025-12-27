import { Button, Modal, TextInput } from "@mantine/core"
import { IconCheck, IconMail } from "@tabler/icons-react";
import { useState } from "react"
import { sendOTP } from "../Services/UserService";
import { notifications } from "@mantine/notifications";

const ResetPassword = (props:any) => {
    const [email,setEmail]=useState("");
    const [otpSend,setOtpSend]=useState(false);

    const handleSendOTP = () => {
        sendOTP(email).then((res) => {
           notifications.show({
                    title: 'User Logged In Successfully',
                    message: 'Welcome to JobHook',
                    withCloseButton: true,
                    icon: <IconCheck style={{ width: "90%", height: "90%" }} />,
                    color: "teal",
                    withBorder: true,
                    className: "border-green-500!"
                })
            console.log(res)
        })
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return (
    <Modal opened={props.opened} onClose={props.close} title="Reset Password">
        <div>
            <TextInput value={email} name="email" size="md"  label="Email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)}
            leftSection={<IconMail size={16} />} withAsterisk required  
            rightSection={<Button size="xs" className="mr-1" onClick={handleSendOTP} autoContrast>Send OTP</Button> } rightSectionWidth="xl" disabled={email==="" && emailRegex.test(email)}/>
        </div>
    </Modal>
  )
}

export default ResetPassword