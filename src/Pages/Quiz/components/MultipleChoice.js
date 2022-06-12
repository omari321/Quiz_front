import {OptionsContainer,Option,QuestionCard,NextOption} from "../style";


export const MultipleChoice=({lenght,type,questions,index,setUserOption,handleCheck,userOption,option,handleNext,handleCheckForBinary})=>
{


    const RenderWord=()=>
    {
        return lenght-1==index
    }

    if (type===2) {
        return (
        <QuestionCard>
            <h1>who said it ?</h1>
            <h2>{questions[index].quote}</h2>
            <OptionsContainer>
                {
                    questions[index].answers &&
                    questions[index].answers.map((x, y) => {

                        return (

                            <Option key={y}
                                    value={x}
                                    onClick={
                                        (e) => {
                                            setUserOption(true)
                                            handleCheck(x)
                                        }
                                    }
                                    className={
                                        (userOption && option && "correct")
                                        ||
                                        (userOption && "incorrect")
                                    }
                                    disabled={userOption}
                            >
                                {x.answer}
                            </Option>

                        )
                    })
                }
                {userOption &&
                    <NextOption
                        onClick={(e) => handleNext()}
                    >
                        {RenderWord()?"Submit":"Next"}
                    </NextOption>
                }
            </OptionsContainer>
       </QuestionCard>
    )
    }
    return (
        <QuestionCard>
            <h1>who said it ?</h1>
            <h2>{questions[index].quote}</h2>
            <h2>was it { questions[index].answers[0].answer}</h2>
            <OptionsContainer>

                            <Option key={0}
                                    value={true}
                                    onClick={
                                        (e) => {
                                            setUserOption(true)
                                            handleCheckForBinary(true)
                                        }
                                    }
                                    className={
                                        (userOption && option && "correct")
                                        ||
                                        (userOption && "incorrect")
                                    }
                                    disabled={userOption}
                            >
                                yes
                            </Option>
                            <Option key={1}
                                    value={false}
                                    onClick={
                                        (e) => {
                                            setUserOption(true)
                                            handleCheckForBinary(false)
                                        }
                                    }
                                    className={
                                        (userOption && option && "correct")
                                        ||
                                        (userOption && "incorrect")
                                    }
                                    disabled={userOption}
                            >
                                No
                            </Option>
                {userOption &&
                    <NextOption
                        onClick={(e) => handleNext()}
                    >
                        {RenderWord()?"Submit":"Next"}
                    </NextOption>
                }
            </OptionsContainer>
        </QuestionCard>
    )
}