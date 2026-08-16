import React from 'react';
import styled from 'styled-components';
import { FiArrowRight, FiCpu, FiShield, FiZap } from 'react-icons/fi';
import { useIWheels } from '../../context/IWheelsContext';

const HeroContainer = styled.section`
  padding: 4rem 2rem;
  background: radial-gradient(circle at 20% 30%, rgba(0, 242, 254, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(117, 121, 255, 0.15) 0%, transparent 50%),
              #0F1624;
  border-radius: 24px;
  margin: 1rem auto 3rem;
  max-width: 1200px;
  border: 1px solid rgba(0, 242, 254, 0.2);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 2.5rem 1.5rem;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  background: rgba(0, 242, 254, 0.1);
  border: 1px solid rgba(0, 242, 254, 0.3);
  border-radius: 20px;
  color: #00F2FE;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  width: fit-content;

  @media (max-width: 968px) {
    margin: 0 auto;
  }
`;

const Title = styled.h1`
  font-size: 3.2rem;
  line-height: 1.15;
  font-weight: 800;
  color: #FFFFFF;

  span {
    background: linear-gradient(135deg, #00F2FE 0%, #4FACFE 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.15rem;
  color: #A0AEC0;
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 968px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled.button`
  background: linear-gradient(135deg, #00F2FE 0%, #4FACFE 100%);
  color: #0F1624;
  border: none;
  padding: 0.9rem 2rem;
  border-radius: 12px;
  font-size: 1.05rem;
  font-weight: 800;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 8px 25px rgba(0, 242, 254, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(0, 242, 254, 0.5);
  }
`;

const SecondaryButton = styled.button`
  background: rgba(255, 255, 255, 0.05);
  color: #FFFFFF;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.9rem 2rem;
  border-radius: 12px;
  font-size: 1.05rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: #00F2FE;
    color: #00F2FE;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 1rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 12px;

  svg {
    color: #00F2FE;
    font-size: 1.5rem;
  }

  div {
    display: flex;
    flex-direction: column;
    h4 {
      font-size: 0.9rem;
      margin: 0;
      color: #FFF;
    }
    p {
      font-size: 0.75rem;
      color: #A0AEC0;
      margin: 0;
    }
  }
`;

const GraphicCard = styled.div`
  background: linear-gradient(135deg, rgba(0, 242, 254, 0.1) 0%, rgba(79, 172, 254, 0.05) 100%);
  border: 2px dashed rgba(0, 242, 254, 0.3);
  border-radius: 20px;
  height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  .big-icon {
    font-size: 110px;
    filter: drop-shadow(0 0 25px rgba(0, 242, 254, 0.6));
    animation: float 4s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(5deg); }
  }
`;

const StatBar = styled.div`
  position: absolute;
  bottom: 15px;
  display: flex;
  gap: 1.5rem;
  background: rgba(15, 22, 36, 0.9);
  padding: 8px 20px;
  border-radius: 20px;
  border: 1px solid rgba(0, 242, 254, 0.2);

  .stat {
    text-align: center;
    strong {
      display: block;
      color: #00F2FE;
      font-size: 0.95rem;
    }
    span {
      color: #A0AEC0;
      font-size: 0.7rem;
      text-transform: uppercase;
    }
  }
`;

export const HeroSection = () => {
  const { setActiveView } = useIWheels();

  return (
    <HeroContainer>
      <HeroContent>
        <Badge>
          <FiZap /> Next-Gen Smart Mobility
        </Badge>
        <Title>
          Custom Electric Wheels & <span>Personal Vehicles</span>
        </Title>
        <Subtitle>
          Engineered for extreme performance, active balance stability, and personalized custom specs. Build your dream i-Wheel with precision telemetry today.
        </Subtitle>
        <ButtonGroup>
          <PrimaryButton onClick={() => setActiveView('customizer')}>
            Build Custom Wheel <FiArrowRight />
          </PrimaryButton>
          <SecondaryButton onClick={() => {
            const el = document.getElementById('catalog-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}>
            Explore Catalog
          </SecondaryButton>
        </ButtonGroup>

        <FeatureGrid>
          <FeatureCard>
            <FiZap />
            <div>
              <h4>Up to 4500W</h4>
              <p>Peak Torque Motor</p>
            </div>
          </FeatureCard>
          <FeatureCard>
            <FiCpu />
            <div>
              <h4>Gyro V3 System</h4>
              <p>Self-Balancing Logic</p>
            </div>
          </FeatureCard>
          <FeatureCard>
            <FiShield />
            <div>
              <h4>2-Yr Warranty</h4>
              <p>Full Coverage</p>
            </div>
          </FeatureCard>
        </FeatureGrid>
      </HeroContent>

      <GraphicCard>
        <div className="big-icon">⚡</div>
        <StatBar>
          <div className="stat">
            <strong>150 km</strong>
            <span>Max Range</span>
          </div>
          <div className="stat">
            <strong>85 km/h</strong>
            <span>Top Speed</span>
          </div>
          <div className="stat">
            <strong>100%</strong>
            <span>Customizable</span>
          </div>
        </StatBar>
      </GraphicCard>
    </HeroContainer>
  );
};

export default HeroSection;
