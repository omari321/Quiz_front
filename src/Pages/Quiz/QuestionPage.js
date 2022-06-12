import {useEffect, useState} from "react";
import {QuizCard,QuestionCard,OptionsContainer,NextOption,Option,QuizWrapper,QuizHeadingWrapper} from "./style";
import 'reactjs-popup/dist/index.css';
import CustomPopup from "../../components/Popup/PopupComponent";
import { useNavigate } from "react-router";
import {MultipleChoice} from "./components/MultipleChoice";
import axios from "axios";
const Quiz=({setQuizId,setQuestions,questions,quizType,quizId,user})=>
{
    const [index,setIndex]=useState(0)
    const [answers,setAnswers]=useState([])
    const [score,setScore]=useState(0)
    const [userOption,setUserOption]=useState(undefined)
    const [option,setOption]=useState()
    const lenght=questions.length
    const [visibility, setVisibility] = useState(false);
    const navigate=useNavigate()
    useEffect(()=>
    {
        setAnswers({quizId:quizId,quizType:quizType,answers:[]})
    },[])
    const handleCheck=(option)=>
    {
        console.log(questions)
        const newAnswers=answers
        if (option.isCorrect)
        {
            setVisibility(!visibility)
            setOption(true)
            setScore(score+1)

            newAnswers.answers.push(true)
            setAnswers(newAnswers)
        }
        else
        {
            setOption(false)
            setVisibility(!visibility)
            newAnswers.answers.push(false)
            setAnswers(newAnswers)
        }
    }
    const handleCheckForBinary=(option)=>
    {
        console.log(questions)
        const newAnswers=answers
        if (option===questions[index].answers[0].isCorrect)
        {
            setVisibility(!visibility)
            setOption(true)
            setScore(score+1)
            newAnswers.answers.push(true)
        }
        else
        {
            setOption(false)
            setVisibility(!visibility)
            newAnswers.answers.push(false)
            setAnswers(newAnswers)
        }
    }
    const handleNext=async ()=>
    {
        if (index+1===lenght)
        {
            await axios.post(`http://localhost:5006/api/Quiz/SubmitQuiz/${user.userId}`,answers)
        }
        setTimeout(()=>
        {   if (index+1<lenght)
            {
                setIndex(index+1)
                setOption()
                setUserOption()
            }
            else
            {
                setAnswers()
                setQuizId()
                setOption()
                setUserOption()
                navigate("/")
            }
        },1500)

    }
    const popupCloseHandler = (e) => {
        setVisibility(e);
    };
    const GetCorrect=()=>
    {
        for(let i in questions[index].answers)
        {
            if (questions[index].answers[i].answer===true)
            {
                return questions[index].answers[i].name
            }
        }
    }
    return (
        <>
            <CustomPopup
                onClose={popupCloseHandler}
                show={visibility}
                title="Result:"
            >
                {!option ? (
                    <>
                        <h1 style={{color:"red"}}>Sorry,you are wrong!</h1>
                        <h2 style={{color:"red"}}>The right answer is {GetCorrect()}</h2>
                    </>
                ):
                    (
                        <>
                            <h2 style={{color:"green"}}>Correct! The right answer is:  {GetCorrect()}</h2>
                        </>
                    )
                }


            </CustomPopup>
            <QuizWrapper>
               <QuizCard>
                   <QuizHeadingWrapper>
                       <h1>Score: {score}</h1>
                       <h1>{index + 1} / {lenght}</h1>
                   </QuizHeadingWrapper>
                   <MultipleChoice
                       index={index}
                       handleCheck={handleCheck}
                       lenght={lenght}
                       handleNext={handleNext}
                       option={option}
                       userOption={userOption}
                       setUserOption={setUserOption}
                       questions={questions}
                       type={quizType}
                       handleCheckForBinary={handleCheckForBinary}
                   />
               </QuizCard>
            </QuizWrapper>
        </>
    )
}
export default Quiz;