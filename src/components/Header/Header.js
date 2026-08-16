import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCode } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: '#00ff66' }}>
          <DiCode size="3rem" style={{ marginRight: '8px' }} /> <span>root@angelito:~$</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>./projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>./tech_stack</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>./whoami</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Apothe0s" target="_blank" rel="noopener noreferrer">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/angelitoapantojr/" target="_blank" rel="noopener noreferrer">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/apth0s/" target="_blank" rel="noopener noreferrer">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
