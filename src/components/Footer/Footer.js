import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper style={{ borderTop: '1px solid #00ff66', background: '#050a0e' }}>
      <LinkList>
        <LinkColumn>
          <LinkTitle style={{ color: '#00ff66' }}>[TEL_COMM]</LinkTitle>
          <LinkItem href="tel:+63-905-638-2320" style={{ color: '#a3f7bf' }}>+63-905-638-2320</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle style={{ color: '#00ff66' }}>[MAIL_NODE]</LinkTitle>
          <LinkItem href="mailto:angelitoapantojr@gmail.com" style={{ color: '#a3f7bf' }}>
            angelitoapantojr@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan style={{ color: '#00ff66', fontFamily: "'Fira Code', monospace" }}>
            {">"} "The best way to predict the future is to invent it." - Alan Kay
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Apothe0s" target="_blank" rel="noopener noreferrer">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/angelitoapantojr/" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/apth0s/" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
