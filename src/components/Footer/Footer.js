import React from 'react';
import styled from 'styled-components';
import { FiZap, FiGithub, FiTwitter, FiGlobe, FiShield, FiCpu } from 'react-icons/fi';

const FooterContainer = styled.footer`
  border-top: 1px solid rgba(0, 242, 254, 0.15);
  background: #0B111E;
  padding: 3rem 2rem 2rem;
  margin-top: 4rem;
  color: #A0AEC0;
`;

const InnerContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 2.5rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const BrandCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.5rem;
    font-weight: 800;
    color: #FFF;
    span {
      color: #00F2FE;
    }
  }

  p {
    font-size: 0.9rem;
    line-height: 1.6;
    margin: 0;
  }
`;

const LinkCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  h4 {
    color: #FFF;
    font-size: 0.95rem;
    margin: 0 0 4px 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  a {
    color: #A0AEC0;
    font-size: 0.88rem;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #00F2FE;
    }
  }
`;

const BottomBar = styled.div`
  max-width: 1200px;
  margin: 2.5rem auto 0;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <InnerContent>
        <BrandCol>
          <div className="logo">
            ⚡ i-Wheels <span>Management System</span>
          </div>
          <p>
            Next-generation smart electric wheels, monowheels, and personal mobility vehicles. Custom built with active Gyro V3 self-balancing telemetry.
          </p>
        </BrandCol>

        <LinkCol>
          <h4>Products</h4>
          <a href="#catalog-section">Electric Wheels</a>
          <a href="#catalog-section">E-Scooters</a>
          <a href="#catalog-section">E-Bikes</a>
          <a href="#catalog-section">Accessories</a>
        </LinkCol>

        <LinkCol>
          <h4>System</h4>
          <a href="#customizer">Customizer Engine</a>
          <a href="#orders">Order Tracking</a>
          <a href="#admin">Admin Dashboard</a>
          <a href="#ibot">i-Bot Assistant</a>
        </LinkCol>

        <LinkCol>
          <h4>Support</h4>
          <a href="#faq">2-Year Warranty</a>
          <a href="#faq">Local Service Hubs</a>
          <a href="#faq">Safety Guidelines</a>
          <a href="#faq">Contact Engineering</a>
        </LinkCol>
      </InnerContent>

      <BottomBar>
        <div>© 2025 i-Wheels Systems Inc. All rights reserved.</div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <FiZap /> Powered by Gyro V3 Active Telemetry
        </div>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;
