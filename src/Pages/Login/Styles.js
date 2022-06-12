import styled from "styled-components";


export const InputField = styled.input`
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
export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
export const Submit = styled.button`
  width: 40%;
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
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
`;
