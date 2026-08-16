import React from 'react';
import styled from 'styled-components';
import { FiShoppingCart, FiMessageSquare, FiSliders, FiShoppingBag, FiLayers, FiSettings } from 'react-icons/fi';
import { useIWheels } from '../../context/IWheelsContext';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 3rem;
  background: rgba(15, 22, 36, 0.85);
  backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid rgba(0, 242, 254, 0.15);

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;

const LogoIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: linear-gradient(135deg, #00F2FE 0%, #4FACFE 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: bold;
  box-shadow: 0 0 20px rgba(0, 242, 254, 0.4);
`;

const LogoText = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.8rem;
    font-weight: 800;
    margin: 0;
    background: linear-gradient(90deg, #FFFFFF 0%, #00F2FE 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: 0.5px;
  }

  span {
    font-size: 0.75rem;
    color: #4FACFE;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-weight: 600;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-around;
    order: 3;
    overflow-x: auto;
    padding-top: 0.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
  }
`;

const NavItem = styled.button`
  background: ${(props) => (props.active ? 'rgba(0, 242, 254, 0.15)' : 'transparent')};
  color: ${(props) => (props.active ? '#00F2FE' : '#A0AEC0')};
  border: 1px solid ${(props) => (props.active ? 'rgba(0, 242, 254, 0.4)' : 'transparent')};
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.25s ease;

  &:hover {
    color: #FFFFFF;
    background: rgba(0, 242, 254, 0.1);
    border-color: rgba(0, 242, 254, 0.2);
  }
`;

const ActionsGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ActionButton = styled.button`
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #FFFFFF;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.25s ease;

  &:hover {
    background: rgba(0, 242, 254, 0.15);
    border-color: #00F2FE;
    transform: translateY(-2px);
  }
`;

const Badge = styled.span`
  background: #FF0844;
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 2px 7px;
  border-radius: 12px;
  margin-left: 4px;
`;

const Header = () => {
  const { activeView, setActiveView, cart, setIsCartOpen, setIsChatbotOpen } = useIWheels();

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <HeaderContainer>
      <LogoContainer onClick={() => setActiveView('store')}>
        <LogoIcon>⚡</LogoIcon>
        <LogoText>
          <h1>i-Wheels</h1>
          <span>Smart Mobility Systems</span>
        </LogoText>
      </LogoContainer>

      <NavLinks>
        <NavItem active={activeView === 'store'} onClick={() => setActiveView('store')}>
          <FiShoppingBag /> Store Catalog
        </NavItem>
        <NavItem active={activeView === 'customizer'} onClick={() => setActiveView('customizer')}>
          <FiSliders /> Customizer
        </NavItem>
        <NavItem active={activeView === 'orders'} onClick={() => setActiveView('orders')}>
          <FiLayers /> My Orders
        </NavItem>
        <NavItem active={activeView === 'admin'} onClick={() => setActiveView('admin')}>
          <FiSettings /> Admin System
        </NavItem>
      </NavLinks>

      <ActionsGroup>
        <ActionButton onClick={() => setIsCartOpen(true)}>
          <FiShoppingCart size={18} />
          <span>Cart</span>
          {totalCartCount > 0 && <Badge>{totalCartCount}</Badge>}
        </ActionButton>
        <ActionButton onClick={() => setIsChatbotOpen(true)}>
          <FiMessageSquare size={18} />
          <span>i-Bot</span>
        </ActionButton>
      </ActionsGroup>
    </HeaderContainer>
  );
};

export default Header;
