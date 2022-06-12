import  {QuizOptionWrapper,QuizWrapper,QuizOption,Start} from "../AvailableQuizes/Styles"


export const AvailableQuiz=({data,StartQuiz,quiz})=>
{
    return (
        <QuizOptionWrapper>
            <QuizOption >
                <h2>{data.name}</h2>
                <Start  onClick={()=>StartQuiz(data)} disabled={quiz}>Click here to start</Start>
            </QuizOption>
        </QuizOptionWrapper>
    )
}