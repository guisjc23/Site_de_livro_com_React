import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const Logo_ = styled.div`
  display: flex;
  font-size: 30px;
`

const LogoImg = styled.img`
  margin-right: 10px;
`

function Logo(){
    return(
        <Logo_>
          <LogoImg 
            src={logo} 
            alt='logo' 
            className='logo-img'
          ></LogoImg>
          <p><strong>Alura</strong>Books</p>
        </Logo_>
    )
}

export default Logo