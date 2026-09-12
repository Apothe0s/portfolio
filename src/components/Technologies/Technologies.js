import React from 'react';
import { DiFirebase, DiReact, DiTerminal } from 'react-icons/di';
import { FaFigma } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>{">"} Tech_Stack.sys</SectionTitle>
    <SectionText style={{ color: '#00ff66' }}>
      [MODULES LOADED]: Core design tools, front-end architecture, and engineering system stack.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <FaFigma size="2.5rem" color="#00ff66" style={{ margin: '0.25rem' }} />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX & Figma Design</ListTitle>
          <ListParagraph style={{ color: '#a3f7bf' }}>
            Figma (Auto Layout & Components) <br />
            Landing Page & Web Design Systems
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" color="#00ff66" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph style={{ color: '#a3f7bf' }}>
            React.js / Next.js <br />
            TypeScript & Styled Components
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" color="#00ff66" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph style={{ color: '#a3f7bf' }}>
            Node.js / Express <br />
            MongoDB & SQL Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiTerminal size="3rem" color="#00ff66" />
        </picture>
        <ListContainer>
          <ListTitle>DevOps & Tools</ListTitle>
          <ListParagraph style={{ color: '#a3f7bf' }}>
            Git / Linux CLI <br />
            REST & WebRTC Protocols
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
