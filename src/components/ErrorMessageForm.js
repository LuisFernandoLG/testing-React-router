import styled, { keyframes } from "styled-components"

export const ErrorMessageForm = ({icon, message}) => {
    return (
        <Wrapper>
            <div>{icon}</div>
            <p> {message}</p>  
        </Wrapper>
    )
}


const popAnimation = keyframes`
    from{
        transform: scale(0);
    }to{
        transform: scale(1);

    }
`
const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    color:red;

    animation: ${popAnimation} .2s ease-in-out;
`

