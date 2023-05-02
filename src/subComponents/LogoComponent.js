import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'

import SocialIcons from './SocialIcons'


const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
font-family: 'Pacifico',cursive;
font-size: 17px;
position: fixed;
left: 2rem;
top: 2.5rem;
z-index:3;
@media (max-width:385px) {
  top: 1rem;
  left: 1rem;
  font-size: 12px;
}
`
const Container = styled.div`

`

const LogoComponent = (props) => {
    return (
      <Container>

        <Logo color={props.theme}>
          Ihekuna Emmanuel
        </Logo>

        <SocialIcons />
      </Container>
    )
}

export default LogoComponent
