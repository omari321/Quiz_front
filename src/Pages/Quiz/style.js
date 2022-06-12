import styled from "styled-components";

export const QuizWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  flex-direction: column;
`;

export const QuizHeadingWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  color: #232323;
  font-size: 1.5rem;
  padding: 1rem;

  @media screen and (max-width: 500px) {
    flex-direction: column-reverse;
  }
`;

export const QuizCard = styled.div`
  display: flex;
  min-width: 100%;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 5px solid #232323;
`;

export const QuestionCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  padding: 1rem;

  h1 {
    font-size: 2rem;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
`;

export const Option = styled.button`
  width: 100%;
  padding: 1rem;
  font-weight: bold;
  font-size: 1.5rem;
  color: #fff;
  outline: none;
  border-radius: 0.25rem;
  border: none;
  background-color: #232323;
  transition: all 0.25s ease-in;
  
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const NextOption = styled.button`
  width: 50%;
  padding: 1rem;
  font-weight: bold;
  font-size: 1.5rem;
  color: #fff;
  outline: none;
  border-radius: 0.25rem;
  border: none;
  background-color: #232323;
  transition: all 0.25s ease-in;
  
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;


