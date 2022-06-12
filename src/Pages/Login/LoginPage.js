import {LoginWrapper,InputField,Submit,LoginContainer} from "./Styles";
import {useRef, useState} from "react";
import axios from "axios";
export  const LoginPage=({user,setUser})=>
{
    const [registerUser,setRegistrerUser]=useState("")
    const [loginUser,setLoginUser]=useState("")
    const registrerRef=useRef(null)
    const loginRef=useRef(null)
    const Registrer=async (event)=>
    {
        event.preventDefault()
        if (registerUser!="")
        {
            const user={"username":registerUser}
            const response=await  axios.post("http://localhost:5006/api/Users/CreateUser",user)
            if (300>response.status && response.status>=200 )
            {
                registrerRef.current.value=""
            }

        }

    }
    const Login= async (event)=>
    {
        const response=await axios.post(`http://localhost:5006/api/Users/LoginWithUsername/${loginUser}`)
        if (300>response.status && response.status>=200 )
        {
            loginRef.current.value=""
            setUser(response.data)
            window.localStorage.setItem(
                "User",JSON.stringify(response.data)
            )
        }
    }
    return (
        <LoginWrapper>
            <LoginContainer>
            <label>please register if you dont have username</label>
                <InputField ref={registrerRef} value={registerUser} onChange={(event)=>setRegistrerUser(event.target.value)} type="text"/>
            <Submit  onClick={(e)=>Registrer(e)}>submit</Submit>
            </LoginContainer>
            <LoginContainer>
                <label>please register if you dont have username</label>
                <InputField type="text" value={loginUser} onChange={(event)=>setLoginUser(event.target.value)} />
                <Submit ref={loginRef} onClick={(e)=>Login(e)} >submit</Submit>
            </LoginContainer>
        </LoginWrapper>
    )
}