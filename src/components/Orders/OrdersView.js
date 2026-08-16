import React, { useState } from 'react';
import styled from 'styled-components';
import { useIWheels } from '../../context/IWheelsContext';
import { FiSearch, FiPackage, FiTruck, FiCheckCircle, FiClock, FiLayers } from 'react-icons/fi';

const OrdersContainer = styled.section`
  max-width: 1000px;
  margin: 1rem auto 4rem;
  padding: 0 1.5rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;

  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    color: #FFF;
    margin: 0 0 0.5rem 0;

    span {
      color: #00F2FE;
    }
  }

  p {
    color: #A0AEC0;
    font-size: 1.05rem;
  }
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(15, 22, 36, 0.8);
  border: 1px solid rgba(0, 242, 254, 0.3);
  padding: 0.8rem 1.2rem;
  border-radius: 14px;
  max-width: 500px;
  margin: 0 auto 2.5rem;

  svg {
    color: #00F2FE;
  }

  input {
    background: transparent;
    border: none;
    color: #FFF;
    font-size: 1rem;
    width: 100%;
    outline: none;

    &::placeholder {
      color: #718096;
    }
  }
`;

const OrdersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const OrderCard = styled.div`
  background: rgba(15, 22, 36, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
`;

const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding-bottom: 1rem;

  .order-id {
    font-family: monospace;
    font-size: 1.2rem;
    font-weight: 800;
    color: #00F2FE;
  }

  .date {
    font-size: 0.85rem;
    color: #A0AEC0;
  }
`;

const StatusTracker = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin: 1rem 0;

  &::before {
    content: '';
    position: absolute;
    top: 15px;
    left: 20px;
    right: 20px;
    height: 3px;
    background: rgba(255, 255, 255, 0.1);
    z-index: 1;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
    &::before {
      display: none;
    }
  }
`;

const StepItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  z-index: 2;
  position: relative;

  .dot {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${(props) => (props.active ? '#00F2FE' : '#0F1624')};
    color: ${(props) => (props.active ? '#0F1624' : '#718096')};
    border: 2px solid ${(props) => (props.active ? '#00F2FE' : 'rgba(255, 255, 255, 0.2)')};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
  }

  span {
    font-size: 0.8rem;
    color: ${(props) => (props.active ? '#FFF' : '#718096')};
    font-weight: ${(props) => (props.active ? '700' : '400')};
  }
`;

const OrderDetailsBox = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  .summary {
    color: #E2E8F0;
    font-size: 0.95rem;
    strong {
      color: #00F2FE;
    }
  }

  .total {
    font-size: 1.3rem;
    font-weight: 800;
    color: #FFF;
  }
`;

export const OrdersView = () => {
  const { orders } = useIWheels();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredOrders = orders.filter((o) => {
    return (
      o.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.summary.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const getStepIndex = (status) => {
    switch (status) {
      case 'Pending Assembly': return 0;
      case 'In Production': return 1;
      case 'Quality Check': return 2;
      case 'Shipped': return 3;
      case 'Delivered': return 4;
      default: return 0;
    }
  };

  const steps = ['Pending', 'Production', 'Quality Check', 'Shipped', 'Delivered'];

  return (
    <OrdersContainer>
      <Header>
        <h1>
          Order <span>Tracking & Status</span>
        </h1>
        <p>Monitor live hand-assembly progress and shipping updates for your i-Wheels</p>
      </Header>

      <SearchBox>
        <FiSearch size={20} />
        <input
          type="text"
          placeholder="Search by Order ID (e.g. ORD-8921) or Name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </SearchBox>

      <OrdersList>
        {filteredOrders.map((ord) => {
          const currentStep = getStepIndex(ord.status);
          return (
            <OrderCard key={ord.id}>
              <OrderHeader>
                <div>
                  <span className="order-id">{ord.id}</span>
                  <span style={{ marginLeft: '12px', color: '#00F2FE', fontWeight: 'bold' }}>
                    ({ord.type})
                  </span>
                </div>
                <div className="date">Date: {ord.date}</div>
              </OrderHeader>

              <StatusTracker>
                {steps.map((stepName, idx) => (
                  <StepItem key={idx} active={idx <= currentStep}>
                    <div className="dot">{idx <= currentStep ? '✓' : idx + 1}</div>
                    <span>{stepName}</span>
                  </StepItem>
                ))}
              </StatusTracker>

              <OrderDetailsBox>
                <div className="summary">
                  <strong>Items:</strong> {ord.summary}
                  <div style={{ fontSize: '0.8rem', color: '#A0AEC0', marginTop: '4px' }}>
                    Shipping to: {ord.shippingAddress} ({ord.customerName})
                  </div>
                </div>

                <div className="total">${ord.total} USD</div>
              </OrderDetailsBox>
            </OrderCard>
          );
        })}
      </OrdersList>
    </OrdersContainer>
  );
};

export default OrdersView;
