import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  overflow: hidden;
  border-bottom: 1px solid #00ff66;
  filter: grayscale(40%) contrast(120%);
  &:hover {
    filter: none;
  }
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;

export const BlogCard = styled.div`
  background: #101820;
  border: 1px solid #00ff66;
  border-radius: 6px;
  box-shadow: 0 0 15px rgba(0, 255, 102, 0.25);
  text-align: center;
  width: 360px;
  overflow: hidden;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 0 25px rgba(0, 255, 102, 0.6);
    transform: translateY(-5px);
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const TerminalHeader = styled.div`
  background: #050a0e;
  padding: 0.8rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #00ff66;
  font-family: 'Fira Code', 'Courier New', monospace;
  font-size: 1.2rem;
  color: #00ff66;
`;

export const TerminalDots = styled.div`
  display: flex;
  gap: 6px;
`;

export const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.color || '#00ff66'};
  display: inline-block;
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  margin-top: 1rem;
`;

export const HeaderThree = styled.h3`
  font-weight: 600;
  letter-spacing: 2px;
  color: #00ff66;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? '2.4rem' : '1.8rem')};
  text-shadow: 0 0 8px rgba(0, 255, 102, 0.6);
`;

export const Hr = styled.hr`
  width: 60px;
  height: 2px;
  margin: 10px auto;
  border: 0;
  background: #00ff66;
  box-shadow: 0 0 8px #00ff66;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #00cc55;
  font-size: 13px;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 25px;
  color: #a3f7bf;
  font-size: 1.4rem;
  line-height: 22px;
  text-align: justify;
  margin-top: 1rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2rem 0;
`;

export const ExternalLinks = styled.a`
  color: #00ff66;
  font-size: 1.4rem;
  padding: 0.8rem 1.6rem;
  background: transparent;
  border: 1px solid #00ff66;
  border-radius: 4px;
  font-family: 'Fira Code', 'Courier New', monospace;
  transition: all 0.3s ease;
  box-shadow: 0 0 5px rgba(0, 255, 102, 0.2);
  &:hover {
    background: #00ff66;
    color: #0d1117;
    box-shadow: 0 0 15px #00ff66;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 1.5rem;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tag = styled.li`
  color: #00ff66;
  font-size: 1.2rem;
  border: 1px dashed #00ff66;
  padding: 0.3rem 0.8rem;
  border-radius: 3px;
  background: rgba(0, 255, 102, 0.05);
`;
