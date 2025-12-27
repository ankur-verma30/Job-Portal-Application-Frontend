const signupValidation = (name: string, value: string) => {
    switch (name) {
        case "name":
            if (!value) return "Name is required";
            else if (value.length < 3) return "Name must be at least 3 characters long";
            else return "";
        case "email":
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!value) return "Email is required";
            else if (!emailRegex.test(value)) return "Invalid email format";
            else return "";
        case "password":
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
            if (!value) return "Password is required";
            else if (!passwordRegex.test(value)) return "At least 1 lowercase letter, At least 1 uppercase letter, At least 1 digit, At least 1 special character (e.g., @, $, !, %, *, ?, &), Minimum 8 characters, No spaces";
            else return "";
            
        default:
            return "";
    }
}

const loginValidation=(name:string,value:string)=>{
 switch (name) {
        case "email":
            if (!value) return "Email is required";
            else return "";
        case "password":
            if (!value) return "Password is required";
            else return "";
            
        default:
            return "";
    }
}

export { signupValidation, loginValidation };