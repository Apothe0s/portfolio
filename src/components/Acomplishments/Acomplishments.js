import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: '4+', text: 'Certificates Verified'},
  { number: '100+', text: 'Commits Submitted', },
  { number: '10+', text: 'Repositories Built', },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>{">"} System_Metrics.log</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index} style={{ border: '1px solid #00ff66', background: '#101820', boxShadow: '0 0 10px rgba(0, 255, 102, 0.2)' }}>
          <BoxNum style={{ color: '#00ff66', textShadow: '0 0 8px #00ff66' }}>{card.number}</BoxNum>
          <BoxText style={{ color: '#a3f7bf', fontFamily: "'Fira Code', monospace" }}>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
