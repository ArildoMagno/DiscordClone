import styled from 'styled-components';
import { AlternateEmail } from 'styled-icons/material';


//Declara a area declara lá no layout
export const Container = styled.div`
grid-area: CD;

display:flex;

//porque ficam organizada como coluna
flex-direction:column;

//para dar espaço 
justify-content: space-between;

background-color: var(--primary);
`;


export const Messages = styled.div`
  padding: 20px 0;
  display: flex;

  //porque ficam organizada como coluna
  flex-direction: column;

 //tamanho total da tela -os tamanhos
  max-height: calc(100vh - 46px - 68px);
  overflow-y: scroll;


  //ajustando itens do webkit como a scrollbar
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }


`;

//Container por volta do input
export const InputWrapper = styled.div`
  width: 100%;
  padding: 0 16px;
`;


export const Input = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 10px 0 57px;
  border-radius: 7px;

  color: var(--white);
  background-color: var(--chat-input);
 
  position: relative;

  //Evento do texto antes de digitar
  &::placeholder {
    color: var(--gray);
  }


  ~ svg {
    position: relative;
    top: -50%;
    left: 14px;
    transition: 180ms ease-in-out;
  }

  
`;

//Como é um icone passa pela função
export const InputIcon = styled(AlternateEmail)`
  width: 24px;
  height: 24px;
  color: var(--gray);
`;