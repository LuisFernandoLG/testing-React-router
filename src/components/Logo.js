import styled from "styled-components"
import logo from "../assets/descarga.png"

export const Logo = () => {
    return (
        <StyledLogo>
            <img src={logo} alt="logo"/>
        </StyledLogo>
    )
}

const StyledLogo = styled.div`
    width: 200px;
    height: 100px;

    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
`