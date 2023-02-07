import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi! <br />
          I'm Angelito
        </SectionTitle>
        <SectionText>
          I have a understanding of programming languages, web development frameworks, and design principles.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;