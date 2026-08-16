import React from 'react';

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  TerminalHeader,
  TerminalDots,
  Dot
} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>{">"} Projects.exec()</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
            <TerminalHeader>
              <TerminalDots>
                <Dot color="#ff5f56" />
                <Dot color="#ffbd2e" />
                <Dot color="#27c93f" />
              </TerminalDots>
              <span>project_{p.id}.sh</span>
            </TerminalHeader>
            <Img src={p.image} alt={p.title} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TitleContent style={{ color: '#00ff66', fontSize: '1.4rem', marginTop: '1.5rem' }}>
                {">"} Stack
              </TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>#{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={p.visit} target="_blank" rel="noopener noreferrer">
                $ ./code
              </ExternalLinks>
              <ExternalLinks href={p.source} target="_blank" rel="noopener noreferrer">
                $ ./source
              </ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;
