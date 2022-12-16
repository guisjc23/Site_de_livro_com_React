import Logo from '../Logo'
import OpcoesHeaader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo/>
            <OpcoesHeaader/>
            <IconesHeader/>
      </HeaderContainer>
    )
}

export default Header