import React, { useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import img from "../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg"
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons  from '../subComponents/SocialIcons'
import PowerButton  from '../subComponents/PowerButton'

import {Blogs, projects} from '../data/BlogData';
import BlogComponent from './BlogComponent'
import AnchorComponent from '../subComponents/Anchor'
import BigTitle from "../subComponents/BigTitlte"
import { motion } from 'framer-motion'
import design from '../assets/Images/design.png'
import { DarkTheme } from './Themes'
const MainContainer = styled(motion.div)`
/* background-image: url(${img}); */
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
`
const Container = styled.div`
background-color: rgb(5 8 22);
width: 100%;
height:auto;
color: #fff;
position: relative;
padding-bottom: 5rem;
`

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 10rem;
`

const Grid = styled.div`
display: grid;

grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);
@media (max-width: 700px){
    display: flex;
    flex-direction: column;
}
`

// Framer-motion config
const container = {

    hidden: {opacity:0},
    show: {
      opacity:1,
  
      transition:{
        staggerChildren: 0.5,
        duration: 0.5,
      }
    }
  
  }

const BlogPage = () => {

    const [numbers, setNumbers] = useState(0);

    useEffect(() => {
        let num = (window.innerHeight - 70)/30;
        setNumbers(parseInt(num));
    }, [])


    return (
        <ThemeProvider theme={DarkTheme}>

        <MainContainer
        variants={container}
        initial='hidden'
        animate='show'
        exit={{
            opacity:0, transition:{duration: 0.5}
        }}
        >
            <Container>
                <LogoComponent theme="dark" />
                <PowerButton theme="dark" />
                <SocialIcons theme="dark" />
                <AnchorComponent number={numbers} theme="dark" />
<Center>
<Grid>

{/* {Blogs.map(blog => { return <BlogComponent key={blog.id} blog={blog} /> })} */}
{projects.map((project, id) => (
    <BlogComponent key={project.id} project={project} />
))}
</Grid>

</Center>
<BigTitle text="My Projects" top="5rem" left="5rem" />
            </Container>
        </MainContainer>
        </ThemeProvider>
    )
}

export default BlogPage
