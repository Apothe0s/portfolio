import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center style={{ textShadow: '0 0 10px #00ff66' }}>
          $ whoami <br />
          {">"} Angelito
        </SectionTitle>
        <SectionText style={{ color: '#00ff66', fontFamily: "'Fira Code', monospace" }}>
          [SYSTEM INITIALIZED]: Full-stack developer proficient in web protocols, modern frameworks, cyber security concepts, and modular software architecture.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
