import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme, DarkTheme} from './Themes';
import { Design, Develope} from './AllSvgs';
import { slideIn } from '../utils/motion';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import { motion } from 'framer-motion'

const Box = styled.div`
background-color: #ccc;
width: 100vw;
height:100vh;
position: relative;
padding-top: 50px;
display: flex;
justify-content: space-evenly;
align-items: center;
@media(max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding-top: 160px;
    height: 160vh;
    overflow: hidden;
}


`

const Main = styled(motion.div)`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 80vh;
z-index:3;
line-height: 1.5;
cursor: pointer;
font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;
&:hover{
    color: ${props => props.theme.body};
    background-color: rgb(5 8 22);
}

@media(max-width: 600px) {
    display: flex;
    flex-direction: column;
    width: 40vw;
   height: 80vh;
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const MySkillsPage = () => {

    return (
<ThemeProvider theme={lightTheme}>
    <Box>
    <LogoComponent theme='light'/>
    <SocialIcons theme='light'/>
    <PowerButton />
    <ParticleComponent theme='light' />

<Main 
variants={slideIn('left', 'tween', 0.2, 1)} 
animate="show"
initial='hidden'
>
    <Title>
        <Design width={40} height={40} /> Designer
    </Title>
    <Description>
    I love to create design which speaks, Keep it clean, minimal and simple.
    </Description>
    <Description>
    <strong>I like to Design</strong>
    <ul>
        <li>
            Web Design With Wordpress & Elementor
        </li>
        <li>
            Landing Pages
        </li>
    </ul>
    </Description>
    <Description>
    <strong>Tools</strong>
    <ul>
        <li>
        Figma, Canva
        </li>
        
    </ul>
    </Description>

</Main>

<Main 
variants={slideIn('right', 'tween', 0.2, 1)}
animate="show"
initial="hidden"
>
    <Title>
        <Develope width={40} height={40} /> Frontend Developer
    </Title>
    <Description>
        I value Your Business and brand Visibility Online. <br />
        Let's Bring your ideas and new concept to Life. 
    </Description>
    <Description>
    <strong>Skills</strong>
    <p>
    Html, Css, Js, React, Redux, NextJs, ThreeJs, Sass, Bootstrap, Tailwind, Firebase etc.
    </p>
    </Description>
    <Description>
    <strong>Tools</strong>
    <p>
    VScode, Github, Codepen etc.
    </p>
    </Description>

                </Main>

                <BigTitle text="SKILLS" top="80%" right="30%" />

    </Box>
</ThemeProvider>
        
    )
}

export default MySkillsPage
