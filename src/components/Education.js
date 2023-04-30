import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { education } from '../data/educationData'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import LogoComponent from '../subComponents/LogoComponent'
import { textVariant } from '../utils/motion'

const EducationCard = ({ education}) => (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff'}}
      contentArrowStyle={{ borderRight: '7px solid #232631'}}
      date={education.date}
    //   iconStyle={{ background: education.iconBg}}
      icon={
       <Contain>
        <Image src={education.icon} alt={education.company_name} />
      </Contain>
      }
    >
  
  <Content>
    <h3>{education.certificate}</h3>
    <Anchor href={education.school} style={{ fontSize: '16px', fontWeight: '600', color: 'rgb(170 166 195)', margin: '0'}}>{education.school}</Anchor>
  </Content>
    

</VerticalTimelineElement>
  )
const Education = () => {
    return (
        <>
        <Container>
          <LogoComponent theme='dark' />
                      <PowerButton theme="dark" />
                      <SocialIcons theme='dark' />
        <MotionSection
        variants={textVariant()}
        >
          
          <h2>Education</h2>
        </MotionSection>
          <VerticalTimeline>
            {education.map((education, index) => (
              <EducationCard key={index} education={education} />
            ))}
          </VerticalTimeline>
        </Container>
        </>
        )
}


const MotionSection = styled(motion.div)`
margin-top: 4rem;

p{
  color: #fff;
  font-size: 20px;
}
h2{
  color: #fff;
  font-size: 50px;
}

`
const Link = styled.a`
color: #fff;
text-decoration: none;
`
const Span = styled.span`
font-size: 4.5rem;
color: rgb(170 166 195);
`

const Anchor = styled.a`
text-decoration: none;
`
const OrderedList = styled.li`
 color: rgb(243 243 243);
 padding-left: 0.25rem;
 font-size: 14px;
 letter-spacing: 0.05em;
 overflow: auto;
`

const Content = styled.div`
display: flex;
flex-direction: column;
h3{
  /* font-size: 24px; */
  color: #fff;
  font-weight: 700;

}
`

const UnOrderedList = styled.ul`
  list-style-type: disc;
  margin-top: 1.25rem;
  margin-left: 0.5rem;
  line-height: 2rem;

`
const Container = styled.div`
 display: flex;
 /* margin-top: 5rem; */
 padding: 3rem;
 flex-direction: column;
 background-color: rgb(5 8 22);
 
`
const Image = styled.img`
 width: 60%;
 object-fit: contain;
 height: 60%;
`

const Contain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export default Education