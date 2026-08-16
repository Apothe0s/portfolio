import React, { useState } from 'react';
import styled from 'styled-components';
import { FiX, FiTrash2, FiPlus, FiMinus, FiShoppingBag, FiArrowRight, FiCheck } from 'react-icons/fi';
import { useIWheels } from '../../context/IWheelsContext';

const DrawerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(6px);
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
`;

const DrawerContent = styled.div`
  background: #0F1624;
  width: 100%;
  max-width: 480px;
  height: 100%;
  border-left: 1px solid rgba(0, 242, 254, 0.2);
  display: flex;
  flex-direction: column;
  padding: 2rem;
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.8);

  @media (max-width: 500px) {
    padding: 1.5rem;
  }
`;

const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    font-size: 1.5rem;
    font-weight: 800;
    color: #FFF;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 10px;

    span {
      color: #00F2FE;
    }
  }
`;

const CloseBtn = styled.button`
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

const ItemsList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const EmptyCartView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #A0AEC0;
  text-align: center;
  gap: 1rem;

  svg {
    font-size: 50px;
    color: rgba(0, 242, 254, 0.3);
  }
`;

const CartItemCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  position: relative;
`;

const ItemImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: ${(props) => props.gradient || 'linear-gradient(135deg, #00F2FE 0%, #4FACFE 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  flex-shrink: 0;
`;

const ItemDetails = styled.div`
  flex: 1;

  .name {
    font-weight: 700;
    color: #FFF;
    font-size: 0.95rem;
    margin-bottom: 4px;
  }

  .desc {
    font-size: 0.75rem;
    color: #A0AEC0;
    margin-bottom: 8px;
  }

  .price {
    font-weight: 800;
    color: #00F2FE;
    font-size: 1rem;
  }
`;

const QtyGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(15, 22, 36, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 4px 8px;
  border-radius: 8px;

  button {
    background: transparent;
    border: none;
    color: #FFF;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover {
      color: #00F2FE;
    }
  }

  span {
    font-size: 0.85rem;
    font-weight: 700;
    color: #FFF;
    min-width: 16px;
    text-align: center;
  }
`;

const RemoveBtn = styled.button`
  background: transparent;
  border: none;
  color: #718096;
  cursor: pointer;
  padding: 4px;

  &:hover {
    color: #FF0844;
  }
`;

const PromoBox = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 1rem;

  input {
    background: rgba(15, 22, 36, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #FFF;
    padding: 0.6rem 1rem;
    border-radius: 10px;
    flex: 1;
    font-size: 0.85rem;
    outline: none;

    &::placeholder {
      color: #718096;
    }
  }

  button {
    background: rgba(0, 242, 254, 0.15);
    border: 1px solid rgba(0, 242, 254, 0.3);
    color: #00F2FE;
    padding: 0.6rem 1rem;
    border-radius: 10px;
    font-weight: 700;
    font-size: 0.85rem;
    cursor: pointer;

    &:hover {
      background: #00F2FE;
      color: #0F1624;
    }
  }
`;

const DrawerFooter = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  color: #A0AEC0;
  font-size: 0.9rem;

  &.total {
    color: #FFF;
    font-size: 1.3rem;
    font-weight: 800;
    span {
      color: #00F2FE;
    }
  }
`;

const CheckoutBtn = styled.button`
  background: linear-gradient(135deg, #00F2FE 0%, #4FACFE 100%);
  color: #0F1624;
  border: none;
  padding: 1rem;
  border-radius: 12px;
  font-size: 1.05rem;
  font-weight: 800;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: 0 10px 25px rgba(0, 242, 254, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 30px rgba(0, 242, 254, 0.5);
  }
`;

export const CartDrawer = ({ onProceedCheckout }) => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateCartQuantity } = useIWheels();
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoMessage, setPromoMessage] = useState('');

  if (!isCartOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const finalTotal = Math.max(0, subtotal - discount);

  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === 'IWHEELS10') {
      const disc = Math.round(subtotal * 0.1);
      setDiscount(disc);
      setPromoMessage('10% Discount Applied!');
    } else {
      setPromoMessage('Invalid code. Try "IWHEELS10"');
    }
  };

  return (
    <DrawerOverlay onClick={() => setIsCartOpen(false)}>
      <DrawerContent onClick={(e) => e.stopPropagation()}>
        <DrawerHeader>
          <h3>
            <FiShoppingBag /> Shopping Cart <span>({cart.length})</span>
          </h3>
          <CloseBtn onClick={() => setIsCartOpen(false)}>
            <FiX size={20} />
          </CloseBtn>
        </DrawerHeader>

        <ItemsList>
          {cart.length === 0 ? (
            <EmptyCartView>
              <FiShoppingBag />
              <p>Your cart is empty. Explore our catalog or build a custom wheel!</p>
            </EmptyCartView>
          ) : (
            cart.map((item, index) => (
              <CartItemCard key={index}>
                <ItemImage gradient={item.gradient}>
                  {item.image || '⚡'}
                </ItemImage>

                <ItemDetails>
                  <div className="name">{item.name}</div>
                  <div className="desc">{item.description}</div>
                  <div className="price">${item.price}</div>
                </ItemDetails>

                <QtyGroup>
                  <button onClick={() => updateCartQuantity(index, -1)}>
                    <FiMinus size={14} />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateCartQuantity(index, 1)}>
                    <FiPlus size={14} />
                  </button>
                </QtyGroup>

                <RemoveBtn onClick={() => removeFromCart(index)}>
                  <FiTrash2 size={16} />
                </RemoveBtn>
              </CartItemCard>
            ))
          )}
        </ItemsList>

        {cart.length > 0 && (
          <DrawerFooter>
            <PromoBox>
              <input
                type="text"
                placeholder="Promo Code (IWHEELS10)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button onClick={handleApplyPromo}>Apply</button>
            </PromoBox>
            {promoMessage && (
              <span style={{ fontSize: '0.8rem', color: discount > 0 ? '#38EF7D' : '#FF0844' }}>
                {promoMessage}
              </span>
            )}

            <PriceRow>
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </PriceRow>
            {discount > 0 && (
              <PriceRow style={{ color: '#38EF7D' }}>
                <span>Promo Discount</span>
                <span>-${discount}</span>
              </PriceRow>
            )}
            <PriceRow className="total">
              <span>Total</span>
              <span>${finalTotal} USD</span>
            </PriceRow>

            <CheckoutBtn
              onClick={() => {
                setIsCartOpen(false);
                onProceedCheckout();
              }}
            >
              Checkout <FiArrowRight />
            </CheckoutBtn>
          </DrawerFooter>
        )}
      </DrawerContent>
    </DrawerOverlay>
  );
};

export default CartDrawer;
