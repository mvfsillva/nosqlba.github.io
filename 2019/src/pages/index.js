import React, { Fragment } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <Fragment>
    <Layout />
    <Parallax pages={7}>
      <Hero offset={0}>
        <BigTitle>
          no<span style={{ color: '#EC0B0E', fontWeight: 700 }}>sql</span>:<span style={{ color: '#0079CB' }}>ba</span></BigTitle>
        <Subtitle>Conferência baiana sobre NoSQL Databases!</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Palestrantes</Title>
        <Subtitle>Em breve mais informações!</Subtitle>

        {/* <ProjectsWrapper>
          <ProjectCard
            title="Freiheit"
            link="https://www.behance.net/gallery/58937147/Freiheit"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            This project is my entry to Adobe's #ChallengeYourPerspective contest.
          </ProjectCard>
          <ProjectCard
            title="Harry Potter"
            link="https://www.behance.net/gallery/52915793/Harry-Potter"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            I entered the DOCMA 2017 award with this Harry Potter inspired image.
          </ProjectCard>
          <ProjectCard
            title="Tomb Raider"
            link="https://www.behance.net/gallery/43907099/Tomb-Raider"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Recreation of a Tomb Raider Wallpaper (Fan Art)
          </ProjectCard>
          <ProjectCard
            title="Eagle"
            link="https://www.behance.net/gallery/38068151/Eagle"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            A fantasy image manipulation relocating the habitat of wild animals.
          </ProjectCard>
        </ProjectsWrapper> */}
      </Projects>
      <About offset={3}>
        <Title>Por que NoSQL?</Title>
        <AboutHero>
          <AboutSub>
            Os bancos de Dados NOSQL (not only SQL) foram criados, 
            principalmente, para resolver problemas com aplicações web 
            que precisam operar com gigantescas cargas de dados além de poder 
            escalar com grande facilidade. 
            Esses tipos de banco de dados vem sendo usados com 
            muita frequência em redes sociais como Twitter, Facebook, 
            além de persistência em aplicações nas nuvens.
          </AboutSub>
        </AboutHero>
        <AboutHero>
          <AboutSub>
            Outro ponto importante a citar é a crescente adoção destas novas tecnologias, 
            inclusive em mercados mais conservadores, 
            tais como instituições financeiras e agências governamentais, 
            seus motivos são diversos normalmente para solucionar problemas com flexibilidade, 
            escalabilidade, latência e performance. 
            Para demonstrar, 
            compartilhar essas tecnologias foi criado o evento NOSQL-BA.
          </AboutSub>
        </AboutHero>
      </About>
      <Projects offset={4}>
        <Title>Patrocinadores</Title>
        <Subtitle>Seja um patrocinador deste grande evento!</Subtitle>
      </Projects>
      <Contact offset={6}>
        <Inner>
          <Title>Localização</Title>
          <Subtitle>Em breve!</Subtitle>
        </Inner>
        <Footer>
          &copy; 2019 NoSQL:BA
        </Footer>
      </Contact>
    </Parallax>
  </Fragment>
)

export default Index
