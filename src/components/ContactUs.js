import React, { useState, useRef} from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { slideIn } from '../utils/motion'
import styled, { ThemeProvider } from 'styled-components'
import EarthCanvas from './EarthCanvas'
import StarsCanvas from './StarsCanvas'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import {DarkTheme} from './Themes';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
// import astronaut from '../assets/Images/spaceman.png'
import { container } from '../utils/motion'
const ContactUs = () => {

   const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
     e.preventDefault();
     setLoading(true);
     emailjs.send(
      'service_fviu8z9',  
      'template_3e525d5',
      {
        from_name: form.name,
        to_name: 'Emmanuel',
        from_email: form.email,
        to_email: 'ihekunaemmanuelc@gmail.com',
        message: form.message,
      },
      '7eZ0_zylO3L0m7vNm'
     )
     .then(() => {
      setLoading(false)
      alert('Thank you. I will get back to you as soon as possible');


      setForm({
        name: '',
        email: '',
        message: '',
      })
      }, (error) => {
        setLoading(false)

        console.log(error)

        alert('Something went wrong.')
      })
    
  }


  return (
    
    <ThemeProvider theme={DarkTheme}>

    <Container>
    <LogoComponent theme='dark' />
                <PowerButton theme="dark" />
                <SocialIcons theme='dark' />
                {/* <ParticleComponent theme='dark' /> */}
      <motion.div 
       initial='hidden'
       animate='show'
       variants={slideIn('left', 'tween', 0.2, 1)}
       className=""
       style={{ flex: '0.78', borderRadius: '30px'}}
      >
    <StarsCanvas />
        <Head>

        <p>SEND ME AN EMAIL I'M VERY RESPONSIVE TO MESSAGES!</p>
        
        </Head>
        
        <Form ref={formRef}
         onSubmit={handleSubmit}
        
        >
          <Label>
            <span style={{ color: '#fff', marginBottom: '5px'}}>Your Name</span>

            <Input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none
              border-none font-medium'
             />
          </Label>
          <Label>
            <span style={{ color: '#fff', fontWeight: '500', marginBottom: '1rem' }}>Your Email</span>

            <Input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
            
             />
          </Label>
          <Label>
            <span style={{ color: '#fff', fontWeight: '500', marginBottom: '1rem' }}>Your Message</span>

            <Textarea
            rows="7" 
          
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Type Your message?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none
              border-none font-medium'
             />
          </Label>

          <Button type='submit' 
              className='bg-tertiary py-3 px-8 outline-none w-fit
           text-white font-bold shadow-md shadow-primary rounded-xl'>
            { loading ? 'Sending...' : 'Send'}
          </Button>
        </Form>
      </motion.div>
      {/* <StarsCanvas /> */}
     
        <CoverBody variants={slideIn('right', 'tween', 0.2, 1)}>

        <EarthCanvas />
        </CoverBody>

        
       

        <BigTitle text="CONTACT" className="bigTitle" top="5rem" left="5rem" />
       
    </Container>
   </ThemeProvider>
  )
}

const MainContainer = styled(motion.div)`

`
const TextContainer = styled.div`
 @media(max-width: 800px){
  left: 5rem;
  top: 5rem;
 }
`
const CoverBody = styled.div`
height: 550px;

@media (max-width: 700px) {
  height: 350px;
}
@media (min-width: 1280px) {
  
        flex: 1;
        height: auto;
    }


`

const Head = styled.div`
margin-top: 3rem;

p{
  color: #fff;
  font-size: 20px;
}
h3{
  color: #fff;
  font-size: 50px;
}
`
const Container = styled.div`
 margin-top: 0px;
 flex-direction: row;
 display: flex;
 overflow: hidden;
 height: 100vh;
 gap: 2.5rem;
 padding: 3rem;
 background-color: rgb(16 13 37);
 @media (max-width: 680px) {
    flex-direction: column-reverse
}
 `


const Form = styled.form`
 
display: flex;
flex-direction: column;
gap: 2rem;
margin-top: 2rem;
`


const Label = styled.label`
display: flex;
flex-direction: column;
`

const Textarea = styled.textarea`
   background-color: rgb(21 16 48);
   padding-top: 1rem/* 16px */;
    padding-bottom: 1rem/* 16px */;
    padding-left: 1.5rem/* 24px */;
    padding-right: 1.5rem;
    border-radius: 0%.5rem;
    color: #fff;
    outline: 2px solid transparent;
    outline-offset: 2px;

    &::placeholder{
      color: rgb(170 166 195);
    }
`

const Button = styled.button`
  background-color: rgb(21 16 48);
  /* padding: 0.75rem  0.75rem  2rem 2rem; */
  padding:  20px 30px;
  width: fit-content;
  color: #fff;
border-radius: 0.75rem;
display: flex;
justify-content: center;
font-size: 20px;
align-items: center;
outline: 2px solid transparent;
    outline-offset: 2px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

`

const Input = styled.input`

    background-color: rgb(21 16 48);
    
    padding-top: 1rem/* 16px */;
    padding-bottom: 1rem/* 16px */;
    padding-left: 1.5rem/* 24px */;
    padding-right: 1.5rem;
    border-radius: 0%.5rem;
    color: #fff;
    outline: 2px solid transparent;
    outline-offset: 2px;

    &::placeholder{
      color: rgb(170 166 195);
    }

`

export default ContactUs