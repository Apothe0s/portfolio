import React, { useState } from 'react';
import styled from 'styled-components';
import { FiX, FiCheckCircle, FiCreditCard, FiTruck, FiLock, FiPackage, FiZap } from 'react-icons/fi';
import { useIWheels } from '../../context/IWheelsContext';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
`;

const ModalCard = styled.div`
  background: #0F1624;
  border: 1px solid rgba(0, 242, 254, 0.3);
  border-radius: 24px;
  max-width: 650px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.8);
  padding: 2.5rem;

  @media (max-width: 600px) {
    padding: 1.5rem;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #FFF;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #FF0844;
  }
`;

const Header = styled.div`
  margin-bottom: 2rem;
  h2 {
    font-size: 1.8rem;
    font-weight: 800;
    color: #FFF;
    margin: 0 0 0.5rem 0;
  }
  p {
    color: #A0AEC0;
    margin: 0;
    font-size: 0.95rem;
  }
`;

const FormGrid = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    font-size: 0.85rem;
    color: #A0AEC0;
    font-weight: 600;
  }

  input, select {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.12);
    padding: 0.8rem 1rem;
    border-radius: 12px;
    color: #FFF;
    font-size: 0.95rem;
    outline: none;

    &:focus {
      border-color: #00F2FE;
    }
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const PaymentMethods = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const PaymentCard = styled.div`
  background: ${(props) => (props.selected ? 'rgba(0, 242, 254, 0.15)' : 'rgba(255, 255, 255, 0.03)')};
  border: 1px solid ${(props) => (props.selected ? '#00F2FE' : 'rgba(255, 255, 255, 0.1)')};
  border-radius: 12px;
  padding: 0.8rem;
  text-align: center;
  color: #FFF;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    border-color: #00F2FE;
  }
`;

const OrderSummaryBox = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px dashed rgba(0, 242, 254, 0.3);
  padding: 1rem;
  border-radius: 14px;
  margin-top: 1rem;

  .total-row {
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    font-weight: 800;
    color: #FFF;
    span {
      color: #00F2FE;
    }
  }
`;

const SubmitBtn = styled.button`
  background: linear-gradient(135deg, #00F2FE 0%, #4FACFE 100%);
  color: #0F1624;
  border: none;
  padding: 1rem;
  border-radius: 14px;
  font-size: 1.1rem;
  font-weight: 800;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: 0 10px 25px rgba(0, 242, 254, 0.3);
  margin-top: 1rem;

  &:hover {
    opacity: 0.95;
  }
`;

// Confirmation View
const ConfirmationBox = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  .check-icon {
    font-size: 60px;
    color: #38EF7D;
  }

  h2 {
    font-size: 2rem;
    color: #FFF;
    margin: 0;
  }

  p {
    color: #A0AEC0;
    margin: 0;
  }
`;

const OrderIdBadge = styled.div`
  background: rgba(0, 242, 254, 0.15);
  border: 1px solid #00F2FE;
  padding: 8px 20px;
  border-radius: 20px;
  color: #00F2FE;
  font-family: monospace;
  font-size: 1.2rem;
  font-weight: 800;
`;

export const CheckoutModal = ({ isOpen, onClose }) => {
  const { cart, placeOrder, setActiveView } = useIWheels();

  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    paymentMethod: 'Credit Card'
  });

  const [placedOrder, setPlacedOrder] = useState(null);

  if (!isOpen) return null;

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.address) {
      alert('Please complete all required fields');
      return;
    }
    const created = placeOrder(form);
    setPlacedOrder(created);
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalCard onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={onClose}>
          <FiX size={20} />
        </CloseBtn>

        {placedOrder ? (
          <ConfirmationBox>
            <FiCheckCircle className="check-icon" />
            <h2>Order Confirmed!</h2>
            <p>Thank you, {placedOrder.customerName}. Your order has been registered in the i-Wheels system.</p>

            <OrderIdBadge>TRACKING ID: {placedOrder.id}</OrderIdBadge>

            <OrderSummaryBox style={{ width: '100%' }}>
              <p style={{ color: '#00F2FE', fontWeight: 'bold' }}>Status: {placedOrder.status}</p>
              <p style={{ fontSize: '0.9rem' }}>Delivery Address: {placedOrder.shippingAddress}</p>
            </OrderSummaryBox>

            <SubmitBtn
              onClick={() => {
                onClose();
                setActiveView('orders');
              }}
            >
              <FiPackage /> Track Order Status
            </SubmitBtn>
          </ConfirmationBox>
        ) : (
          <div>
            <Header>
              <h2>Complete Your Order</h2>
              <p>Secure checkout for your i-Wheels vehicles and components</p>
            </Header>

            <FormGrid onSubmit={handleSubmit}>
              <Row>
                <InputGroup>
                  <label>Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Rivera"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </InputGroup>

                <InputGroup>
                  <label>Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </InputGroup>
              </Row>

              <InputGroup>
                <label>Shipping Address *</label>
                <input
                  type="text"
                  required
                  placeholder="Street Address, Apt / Suite"
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                />
              </InputGroup>

              <Row>
                <InputGroup>
                  <label>City *</label>
                  <input
                    type="text"
                    required
                    placeholder="City"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                  />
                </InputGroup>

                <InputGroup>
                  <label>Postal / Zip Code</label>
                  <input
                    type="text"
                    placeholder="10001"
                    value={form.zip}
                    onChange={(e) => setForm({ ...form, zip: e.target.value })}
                  />
                </InputGroup>
              </Row>

              <InputGroup>
                <label>Payment Method</label>
                <PaymentMethods>
                  {['Credit Card', 'PayPal', 'Apple Pay'].map((method) => (
                    <PaymentCard
                      key={method}
                      selected={form.paymentMethod === method}
                      onClick={() => setForm({ ...form, paymentMethod: method })}
                    >
                      {method}
                    </PaymentCard>
                  ))}
                </PaymentMethods>
              </InputGroup>

              <OrderSummaryBox>
                <div className="total-row">
                  <span>Grand Total</span>
                  <span>${totalAmount} USD</span>
                </div>
              </OrderSummaryBox>

              <SubmitBtn type="submit">
                <FiLock /> Pay & Confirm Order (${totalAmount})
              </SubmitBtn>
            </FormGrid>
          </div>
        )}
      </ModalCard>
    </ModalOverlay>
  );
};

export default CheckoutModal;
