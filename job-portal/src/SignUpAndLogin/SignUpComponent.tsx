import { Anchor, Button, Checkbox, Group, PasswordInput, Radio, rem, TextInput } from "@mantine/core"
import { IconCheck, IconLock, IconMail, IconX } from "@tabler/icons-react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { registerUser } from "../Services/UserService"
import { signupValidation } from "../Services/FormValidation"
import { notifications } from "@mantine/notifications"

const form = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "EMPLOYER"
}
let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;


const SignUpComponent = () => {
    const navigate=useNavigate();
    const [data, setData] = useState<{ [key: string]: string }>(form);
    const [formError, setFormError] = useState<{ [key: string]: string }>(form);

    const handleChange = (event: any) => {
        if (typeof (event) === "string") {
            setData({ ...data, accountType: event });
            return;
        }
        let name = event.target.name;
        let value = event.target.value;
        setData({
            ...data,
            [name]: value
        });
        setFormError({
            ...formError,
            [name]: signupValidation(name, value)
        })
        if (name === "password" && data.confirmPassword) {
            let err = "";
            if (data.confirmPassword !== value) { err = "Passwords do not match"; }
            setFormError({
                ...formError,
                [name]: signupValidation(name, value),
                confirmPassword: err
            })
        }
        if (name === "confirmPassword") {
            if (value !== data.password) {
                setFormError({
                    ...formError,
                    [name]: "Passwords do not match"
                })
            } else {
                setFormError({
                    ...formError,
                    [name]: ""
                })
            }
        }
    }

    const handleSubmit = () => {
        let valid = true;
        let newFormError: { [key: string]: string } = {};

        for (let key in data) {
            if (key === "accountType") continue;
            if (key !== "confirmPassword") newFormError[key] = signupValidation(key, data[key]);
            else if (data[key] !== data["password"]) newFormError[key] = "Passwords do not match";
            if (newFormError[key]) valid = false;

        }
        setFormError(newFormError);
        if (valid == true) {
            registerUser(data).then((res) => {
                setData(form);
                console.log(res);
                notifications.show({
                    title: 'User Registered Successfully',
                    message: 'Redirecting to Login Page ...',
                    withCloseButton: true,
                    icon: <IconCheck style={{ width: "90%", height: "90%" }} />,
                    color: "teal",
                    withBorder: true,
                    className: "border-green-500!"
                })
                setTimeout(()=>{
                    navigate("/login");
                },2000)
            }).catch((error) => {
                console.log(error);
                notifications.show({
                    title: 'Registration Failed',
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
        <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
            <div className="text-2xl font-semibold ">Create Account</div>
            <TextInput value={data.name} name="name" onChange={handleChange} error={formError.name} label=" Full Name" placeholder="Enter your name" withAsterisk />

            <TextInput value={data.email} name="email" onChange={handleChange} error={formError.email} leftSectionPointerEvents="none" leftSection={<IconMail style={{ width: rem(16), height: rem(16) }} />} label="Email" placeholder="Enter your email" withAsterisk />

            <PasswordInput value={data.password} name="password" error={formError.password} onChange={handleChange} leftSection={<IconLock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />} label="Password" placeholder="Enter your password" withAsterisk />
            {
                <PasswordInput value={data.confirmPassword} error={formError.confirmPassword} name="confirmPassword" onChange={handleChange} disabled={!passwordRegex.test(data.password)} leftSection={<IconLock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />} label=" Confirm Password" placeholder="Confirm your password" withAsterisk />
            }
            <Radio.Group
                value={data.accountType} onChange={handleChange} name="accountType"
                label="You are ?"
                withAsterisk
            >
                <Group mt="xs">
                    <Radio className="py-4 px-6 has-checked:bg-bright-sun-400/5 hover:border-mine-shaft-800 rounded-lg has-checked:border has-checked:border-bright-sun-400" autoContrast value="EMPLOYER" label="Employer" />
                    <Radio className="py-4 px-6 has-checked:bg-bright-sun-400/5 hover:border-mine-shaft-800 rounded-lg has-checked:border has-checked:border-bright-sun-400" autoContrast value="APPLICANT" label="Applicant" />
                </Group>
            </Radio.Group>

            <Checkbox autoContrast label={<>I accept{' '} <Anchor>terms & conditions</Anchor></>} />
            <Button onClick={handleSubmit} autoContrast variant="filled">Sign Up</Button>
            <div className="mx-auto">Already have an account? <span className="text-bright-sun-400 hover:underline cursor-pointer hover:text-lg" onClick={()=>{navigate("/login");setFormError(form); setData(form)}}>Login</span></div>

        </div>
    )
}

export default SignUpComponent