import './App.css';
import {useEffect, useState} from "react";
import Quiz from "./Pages/Quiz/QuestionPage";
import GlobalStyle from "./GlobalStyles";
import {Container} from "./Container.style";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {HomePage} from "./Pages/HomePage/HomePage";
import {LoginPage} from "./Pages/Login/LoginPage";
function App() {

    const [quiz,setQuiz]=useState()
    const [Questions,setQuestions]=useState()
    const [user,setUser]=useState()
    const [quizType,setQuizType]=useState(2)
    const [selectedQuiz,setSelectedQuiz]=useState()
    useEffect(()=>
    {
        const userJSON=window.localStorage.getItem("User")
        if (userJSON)
        {
            const user=JSON.parse(userJSON)
            setUser(user)
        }
    },[])
    if (!user)
    {
        return(
            <LoginPage user={user} setUser={setUser}/>
        )
    }

  return (
    <div className="App">
      <Router>
      <GlobalStyle/>
          <Container>
            <Routes>
              <Route
                  path="/"
                  element={
                    <HomePage setSelectedQuiz={setSelectedQuiz} user={user} quiz={quiz} setQuiz={setQuiz} setData={setQuestions} quizType={quizType} setQuiztype={setQuizType}/>
                  }
              />
              <Route
                  path="/quiz"
                  element={
                    <Quiz user={user} quizId={selectedQuiz} setQuizId={setSelectedQuiz} questions={Questions} setQuestions={setQuestions} quizType={quizType}/>
                  }
              />
            </Routes>
          </Container>
      </Router>
    </div>
  );
}

export default App;
