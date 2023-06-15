import { auth } from "../../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const handleInputChange = (e, context, data, setData, setValue) => {
    const updatedValue = e.target.value;
    setValue(e.target.value)
    console.log(data)
    // eslint-disable-next-line default-case
    switch (context) {
        case "email":
            setData({ ...data, email: updatedValue, emailError: "" });
            break;
        case "password":
            setData({ ...data, password: updatedValue, passError: "" });
            break;
        case "confirmPassword":
            setData({ ...data, confirmPassword: updatedValue, passError: "" });
            break;
    }
};

const validateEmail = (data) => {
    const emailReg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    if (emailReg.test(data)) {
        return true;
    } else {
        return false;
    }
}
const isValidPass = (data, setData) => {
    if (data.password.length < 6) {
        setData({ ...data, passError: "password cannot be empty or less than 6 characters" })
        return false;
    } else {
        return true
    }
}
const validatePass = (pass1, pass2) => {

    if (pass1 !== pass2) {
        return false
    } else {
        return true
    }
}

const formValidation = (data, setData) => {
    if (validateEmail(data.email)) {
        if (isValidPass(data, setData)) {
            if (validatePass(data.password, data.confirmPassword)) {
                return true;
            } else {
                setData({ ...data, passError: "The passwords must be equal" })
                return false;
            }
        } else {
            return false;
        }

    } else {
        setData({ ...data, emailError: "Please Enter valid email" })
        return false;
    }

}
//Handles Registration of new users
export const handleSubmit = (e, createUserWithEmailAndPassword, navigate, data, setData) => {
    const { email, password } = data;
    e.preventDefault();
    const isValidated = formValidation(data, setData);
    if (isValidated) {


        createUserWithEmailAndPassword(auth, email, password).then(() => {
            navigate("/signin")
        })
            .catch((error) => {
                setData({ ...data, showFirebaseError: true, firebaseError: error.message })

            })
    }
};

//handles Signing of the new users

export const handleSignIn = (e, data, setData, navigate) => {
    e.preventDefault();
    if (data.email !== '') {
        if (data.password !== "") {
            signInWithEmailAndPassword(auth, data.email, data.password).
                then(() => {
                    navigate("/")
                }).catch((error) => {
                    setData({...data, firebaseError: error.message, showFirebaseError: true})
                })
        } else {
            setData({ ...data, passError: "Input cannot be empty" })
        }
    } else {
        setData({ ...data, emailError: "Input cannot be empty" })
    }


};
