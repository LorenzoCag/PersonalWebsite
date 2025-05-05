import React from 'react';
import styled from '@emotion/styled';
import { SocialIcon } from 'react-social-icons';
import { Routes, Route, Link } from 'react-router-dom';
import princetonLogo from './assets/pton.png';
import pythonLogo from './assets/python.png';
import reactLogo from './assets/react.png';
import javaLogo from './assets/java.png';
import sqlLogo from './assets/sql.png';
import runningLogo from './assets/run1.png';
import gitLogo from './assets/git.png';
import bughuntImage from './assets/bughunt.jpeg';
import wcs1 from './assets/wcs1.jpeg';
import wcs2 from './assets/wcs2.jpeg';
import wcs3 from './assets/wcs3.jpeg';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #000022;
  color: #ffffff;
`;

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.header`
  padding: 2rem 0;
  text-align: center;
`;

const Name = styled.h1`
  font-size: 3rem;
  margin: 0;
  color: #ffffff;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const StyledSocialIcon = styled.a`
  color: #ffffff;
  font-size: 1.8rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    color: #000080;
  }
`;

const Bio = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 1rem auto;
  line-height: 1.6;
  color: #ffffff;
`;

const BioSection = styled.section`
  margin-top: 2rem;
  padding: 2rem;
  background:rgb(1, 12, 44);
  border-radius: 8px;
  border: 1px solid #000080;
`;

const BioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`;

const BioCard = styled.div`
  h3 {
    color: #ffffff;
    margin-bottom: 1rem;
  }

  p {
    color: #ffffff;
    line-height: 1.6;
  }
`;

const SkillLogos = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  margin-left: 0.5rem;
`;

const SkillLogo = styled.img`
  width: 28px;
  height: 28px;
  object-fit: contain;
`;

const ProjectsSection = styled.section`
  margin-top: 2rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: rgb(1, 12, 44);
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #000080;
  transition: transform 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 15px rgba(0, 0, 128, 0.2);
  }

  h3 {
    color: #ffffff;
    margin-top: 0;
    margin-bottom: 0.75rem;
  }

  p {
    color: #ffffff;
  }
`;

const ProjectCardLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: rgb(1, 12, 44);
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #000080;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  color: inherit;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 15px rgba(0, 0, 128, 0.2);
    cursor: pointer;
  }

  h3 {
    color: #ffffff;
    margin-top: 0;
    margin-bottom: 0.75rem;
  }

  p {
    color: #ffffff;
  }
`;

const ProfileImage = styled.img`
  width: 110px;
  height: 110px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #000080;
  margin: 0 auto 1rem auto;
  display: block;
`;

const PrincetonLogo = styled.img`
  width: 36px;
  height: 36px;
  object-fit: contain;
  vertical-align: middle;
  margin-right: 0.5rem;
`;

const CenteredButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const VideoPreviewRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
  flex-wrap: wrap;
`;

const ProjectImage = styled.img`
  display: block;
  margin: 2rem auto 0 auto;
  max-width: 600px;
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 0 16px #0008;
`;

function Home() {
  return (
    <MainContent>
      <Header>
        <ProfileImage src={require('./assets/1722192999099.jpeg')} alt="Lorenzo Cagliero" />
        <Name>Lorenzo Cagliero</Name>
        <SocialLinks>
          <SocialIcon url="https://www.linkedin.com/in/lorenzo-cagliero/" bgColor="#ffffff" fgColor="#000080" style={{ height: 40, width: 40 }} />
        </SocialLinks>
        <Bio>
          I am a Junior computer science student at Princeton University. I have a passion for programming and data. I am passionate about discovering how data and software can effectively solve problems in our day to day.
        </Bio>
      </Header>

      <BioSection>
        <h2 style={{ color: '#ffffff' }}>About Me</h2>
        <BioGrid>
          <BioCard>
            <h3>
              Education
              <PrincetonLogo src={princetonLogo} alt="Princeton University Logo" />
            </h3>
            <p>Currently pursuing a degree in Computer Science, focusing on software development and data science.</p>
          </BioCard>
          <BioCard>
            <h3>
              Skills
              <SkillLogos>
                <SkillLogo src={pythonLogo} alt="Python" />
                <SkillLogo src={reactLogo} alt="React" />
                <SkillLogo src={javaLogo} alt="Java" />
                <SkillLogo src={sqlLogo} alt="SQL" />
                <SkillLogo src={gitLogo} alt="Git" />
              </SkillLogos>
            </h3>
            <p>Proficient in modern web technologies, including React, Python, Java, mySQL, and Git. Experienced in full-stack development</p>
          </BioCard>
          <BioCard>
            <h3>
              Interests
              <SkillLogos>
                <SkillLogo src={runningLogo} alt="Running" />
              </SkillLogos>
            </h3>
            <p>Outside of Computer Science I am passionate about sports. I am on the varsity Track and Field team at Princeton University. I also love golf.</p>
          </BioCard>
        </BioGrid>
      </BioSection>

      <ProjectsSection>
        <h2 style={{ color: '#ffffff' }}>Projects</h2>
        <ProjectsGrid>
          <ProjectCardLink to="/genconnect">
            <h3>GenConnect</h3>
            <p>GenConnect is an AI-powered platform for automated short-form media creation. </p>
          </ProjectCardLink>
          <ProjectCardLink to="/bughunt">
            <h3>BugHunt</h3>
            <p>BugHunt is a competitive debugging game that turns code troubleshooting into an engaging, level-based challenge—designed to make learning debugging skills fun and interactive.</p>
          </ProjectCardLink>
          <ProjectCardLink to="/web-content-summarizer">
            <h3>Web Content Summarizer</h3>
            <p>AI Web Content Summarizer is a Chrome extension that uses OpenAI's models to instantly summarize any web page. </p>
          </ProjectCardLink>
        </ProjectsGrid>
      </ProjectsSection>
    </MainContent>
  );
}

function GenConnectPage() {
  return (
    <MainContent>
      <h2 style={{ color: '#ffffff' }}>GenConnect</h2>
      <p style={{ color: '#ffffff', maxWidth: 700, margin: '1rem auto', textAlign: 'center' }}>
        GenConnect is an AI-powered platform that automates the creation of short-form media content for social platforms like TikTok, Instagram Reels, and YouTube Shorts. Users simply provide a prompt or basic input—such as a product description, website link, or script—and GenConnect takes care of the rest, generating a complete video with voiceover, visuals, and optional background footage.<br /><br />
        Designed for creators, influencers, and content teams, GenConnect eliminates the time-consuming tasks of writing, editing, and producing short-form content. It supports different content styles and offers a streamlined, template-driven user experience to maximize engagement with minimal effort. Here are some examples of videos generated by GenConnect:
      </p>
      <CenteredButtonWrapper>
        <a href="https://genconnect-collinbolers-projects.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ padding: '0.75rem 1.5rem', background: '#000080', color: '#fff', borderRadius: '6px', textDecoration: 'none', fontWeight: 600 }}>
          View Project
        </a>
      </CenteredButtonWrapper>
      <VideoPreviewRow>
        <video width="300" controls style={{ borderRadius: '10px', boxShadow: '0 0 12px #000', background: '#000' }}>
          <source src={require('./assets/reddit.mp4')} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video width="300" controls style={{ borderRadius: '10px', boxShadow: '0 0 12px #000', background: '#000' }}>
          <source src={require('./assets/ai.mp4')} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </VideoPreviewRow>
    </MainContent>
  );
}

function BugHuntPage() {
  return (
    <MainContent>
      <h2 style={{ color: '#ffffff' }}>BugHunt</h2>
      <p style={{ color: '#ffffff', maxWidth: 700, margin: '1rem auto', textAlign: 'center' }}>
        BugHunt is an interactive, level-based debugging game designed to teach and reinforce core programming concepts through gameplay. Players progress through increasingly complex challenges, identifying and fixing bugs in short code snippets across a variety of languages and error types.<br /><br />
        Each level focuses on a different category of bugs—logic errors, syntax issues, off-by-one mistakes, and more—making the game both educational and entertaining. BugHunt is ideal for CS students and bootcamp learners looking to build confidence in debugging through hands-on practice.
      </p>
      <CenteredButtonWrapper>
        <a href="https://bughuntapp.onrender.com/" target="_blank" rel="noopener noreferrer" style={{ padding: '0.75rem 1.5rem', background: '#000080', color: '#fff', borderRadius: '6px', textDecoration: 'none', fontWeight: 600 }}>
          View Project
        </a>
      </CenteredButtonWrapper>
      <ProjectImage src={bughuntImage} alt="BugHunt Screenshot" />
    </MainContent>
  );
}

function WebContentSummarizerPage() {
  return (
    <MainContent>
      <h2 style={{ color: '#ffffff' }}>Web Content Summarizer</h2>
      <p style={{ color: '#ffffff', maxWidth: 700, margin: '1rem auto', textAlign: 'center' }}>
        AI Web Content Summarizer is a Chrome extension that uses OpenAI's models to instantly summarize any web page. It helps users quickly understand the main points of articles, blogs, and other online content with a single click.
      </p>
      <CenteredButtonWrapper>
        <a href="https://chromewebstore.google.com/detail/web-content-summarizer/fifmbakdgcbjpmgmnelkmglbibobpbhj" target="_blank" rel="noopener noreferrer" style={{ padding: '0.75rem 1.5rem', background: '#000080', color: '#fff', borderRadius: '6px', textDecoration: 'none', fontWeight: 600 }}>
          View Project
        </a>
      </CenteredButtonWrapper>
      <VideoPreviewRow>
        <ProjectImage src={wcs1} alt="Web Content Summarizer Screenshot 1" />
        <ProjectImage src={wcs3} alt="Web Content Summarizer Screenshot 3" />
        <ProjectImage src={wcs2} alt="Web Content Summarizer Screenshot 2" />
      </VideoPreviewRow>
    </MainContent>
  );
}

function App() {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genconnect" element={<GenConnectPage />} />
        <Route path="/bughunt" element={<BugHuntPage />} />
        <Route path="/web-content-summarizer" element={<WebContentSummarizerPage />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
