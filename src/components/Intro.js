import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Me from '../assets/Images/profile-img.png'
import Hero from '../assets/Images/herobg.png'
import Profile from '../assets/Images/profile.png'
import { emma } from '../assets'
const Box = styled(motion.div)`

position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);


width: 65vw;
height: 55vh;
display: flex;


background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
/* background-size: 100% 2px; */
background-size: 100% 3px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};
   box-shadow: 0px 10px 10px #222;

   z-index:1;
   
   
@media (max-width: 400px) {
    background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
/* background-size: 100% 2px; */
background-size: 100% 3px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};
   box-shadow: 0px 10px 10px #222;

   z-index:1;
   
}
`
const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;
/* height: 30px; */


@media (max-width: 540px) {
    width: 0 !important;
    
}
.pic{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0%);
    width: 100%;
    height: auto;
    @media(max-width: 540px) {
        /* display: none; */
    }
}

`

const Text = styled.div`
font-size: calc(1em + 1.5vw);
color: #915eff;
padding: 2rem;
cursor: pointer;
@media (max-width:294px) {
    padding-left: 10px
}


display: flex;
flex-direction: column;
justify-content: space-evenly;

&>*:last-child{
    color: ${props => `rgba(${props.theme.bodyRgba},0.6)` };
    font-size: calc(0.5rem + 1.5vw);
    font-weight:300;

}
`

const Intro = () => {
    return (
        <Box
        initial={{height:0}}
        animate={{height: '55vh'}}
        transition={{ type: 'spring', duration:2, delay:1 }}
        >
            <SubBox>
                <Text>
                    <h2 style={{ lineHeight:  '1',  fontWeight: '900'}}>Hello, I'm<span style={{ color: '#915eff'}}> Ihekuna Emmanuel</span></h2>
                    {/* <h3>I'm Ihekuna Emmanuel</h3> */}
                    <p style={{ fontSize: '25px', color: '#915eff'}}><strong style={{ fontWeight: '800', color: '#915eff'}}>I'm a Front End Developer.</strong><br />
                    Explore My World!.
          </p>
                </Text>
            </SubBox>
            <SubBox>
                <motion.div
                initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{ duration:1, delay:2 }}
                >
                    <img className="pic" src={Me} alt="Profile Pic" />
                </motion.div>
            </SubBox>
        </Box>
    )
}

export default Intro
