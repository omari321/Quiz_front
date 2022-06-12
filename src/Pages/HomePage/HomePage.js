import { useNavigate } from "react-router";
import {useState,useEffect} from "react";
import axios from "axios";
import {AvailableQuiz} from "../../components/AvailableQuizes/AvailableQuizesComponent";
import Switch from "react-switch";
export const HomePage=({setSelectedQuiz,quiz,setQuiz,setData,setQuiztype,quizType,user})=>
{
    const [quizes,setQuizes]=useState()
    const navigate=useNavigate()
    const [checked,setChecked]=useState(false)
    useEffect(()=>{
        async function GetQuizes()
        {
          return  await axios.get("http://localhost:5006/api/Quiz/GetQuizes")
        }

        GetQuizes().then((x)=>
        {
            setQuizes(x.data)
        })

    },[])
    const StartQuiz=async (data)=>
    {
        setQuiz(true)
        await axios.get(`http://localhost:5006/api/Quiz/LoadQuizQuotes/${user.userId}?QuizId=${data.id}&quizType=${quizType}`)
            .then(e=>
            {
                setSelectedQuiz(data.id)
                setData(e.data)

            })
        await setTimeout(async ()=>
        {
            navigate("/quiz")
            setQuiz()
        },1500)

    }
    const ChangeType=()=>
    {
        setChecked(!checked)
        if (quizType==2)
        {
            setQuiztype(1)
        }
        else
        {
            setQuiztype(2)
        }
    }
    return(
        <>
            <h2>Multiple Choice  /  Binary</h2>
            <Switch onChange={()=>ChangeType()} checked={checked}/>
            {quizes && quizes.items.map(x=>{
                return <AvailableQuiz key={x.id} data={x} quiz={quiz} StartQuiz={StartQuiz}/>
            })}
        </>
    )
}