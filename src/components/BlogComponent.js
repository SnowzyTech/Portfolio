import { motion } from "framer-motion";
import React from "react";
// import { NavLink } from 'react-router-dom'
import styled from "styled-components";
import { Github } from '../components/AllSvgs';
const Box = styled(motion.a)`
  width: calc(10rem + 15vw);
  text-decoration: none;
  height: 20rem;
  padding: 1rem;
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.text};
  backdrop-filter: blur(2px);
  box-shadow: 0px 10px 10px #1d1836;
  
  cursor: pointer;
  background-color: #1d1836;
  display: flex;
  flex-direction: column;
  z-index: 5;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    transition: all 0.3s ease;
  }
`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 60%;
  background-size: cover;
  border: 1px solid transparent;
  background-position: center center;

  ${Box}:hover & {
    border: 1px solid ${(props) => props.theme.body};
  }
`;
const Title = styled.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  border-bottom: 1px solid ${(props) => props.theme.text};

  ${Box}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  }
`;
const HashTags = styled.div`
  padding: 0.5rem 0;
`;
const Tag = styled.span`
  padding-right: 0.5rem;
`;
const Date = styled.span`
  padding: 0.5rem 0;
`;

const Footer = styled.footer`
margin-top: 12px;
display: flex;
justify-content: space-between;
`

const Link = styled.a`
background-color: ${props =>props.theme.body};
color: ${props =>props.theme.text};
text-decoration: none;
padding: 0.5rem 2.5rem;
border-radius: 0 0 0 50px;
/* font-size:calc(1em + 0.5vw); */
font-size: 19px;

${Box}:hover &{
    background-color: ${props =>props.theme.text};
    color: ${props =>props.theme.body};

}
`

const Git = styled.a`
color: inherit;
text-decoration: none;
${Box}:hover &{
    &>*{
        fill:${props =>props.theme.body};
    }
}

`

const Container = styled(motion.div)``;

// Framer motion configuration
const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const BlogComponent = (props) => {
  const { index, name, description, tags, image, source_code_link, live_code_link } = props.project;
  // const { blog: { }}
  return (
    <Container variants={Item}>
      <Box>
        <Image img={image} />
        <Title>{name}</Title>
        <p>{description}</p>
        <HashTags>
          {tags.map((tag) => {
            return <Tag key={`${name}-${tag.name}`}>#{tag.name}</Tag>;
          })}
        </HashTags>
        <Footer>
                <Link href={live_code_link} target="_blank">
                    Visit
                </Link>
                <Git  href={source_code_link}  target="_blank">
                    <Github width={30} height={30} />
                </Git>
            </Footer>
      </Box>
    </Container>
  );
};

export default BlogComponent;
