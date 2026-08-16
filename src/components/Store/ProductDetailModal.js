import React from 'react';
import styled from 'styled-components';
import { FiX, FiCheckCircle, FiShoppingCart, FiSliders, FiShield, FiTruck } from 'react-icons/fi';
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
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.8);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 2.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
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
  transition: all 0.2s ease;

  &:hover {
    background: #FF0844;
    border-color: #FF0844;
  }
`;

const ImageWrapper = styled.div`
  background: ${(props) => props.gradient || 'linear-gradient(135deg, #00F2FE 0%, #4FACFE 100%)'};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 110px;
  min-height: 280px;
  box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.3);
`;

const DetailContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const CategoryTag = styled.span`
  color: #00F2FE;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: #FFF;
  margin: 0;
`;

const Description = styled.p`
  color: #A0AEC0;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
`;

const SpecGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  background: rgba(255, 255, 255, 0.03);
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);

  .item {
    span {
      font-size: 0.75rem;
      color: #718096;
      display: block;
    }
    strong {
      color: #00F2FE;
      font-size: 1rem;
    }
  }
`;

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .feature {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.88rem;
    color: #E2E8F0;

    svg {
      color: #00F2FE;
    }
  }
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const Price = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: #FFF;
  span {
    font-size: 0.9rem;
    color: #00F2FE;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const PrimaryBtn = styled.button`
  background: linear-gradient(135deg, #00F2FE 0%, #4FACFE 100%);
  color: #0F1624;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  font-weight: 800;
  font-size: 0.95rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    opacity: 0.9;
  }
`;

const SecondaryBtn = styled.button`
  background: rgba(255, 255, 255, 0.05);
  color: #FFF;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.8rem 1.2rem;
  border-radius: 12px;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    border-color: #00F2FE;
    color: #00F2FE;
  }
`;

export const ProductDetailModal = () => {
  const { selectedProductDetail, setSelectedProductDetail, addToCart, setActiveView } = useIWheels();

  if (!selectedProductDetail) return null;

  return (
    <ModalOverlay onClick={() => setSelectedProductDetail(null)}>
      <ModalCard onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={() => setSelectedProductDetail(null)}>
          <FiX size={20} />
        </CloseBtn>

        <ImageWrapper gradient={selectedProductDetail.gradient}>
          {selectedProductDetail.image}
        </ImageWrapper>

        <DetailContent>
          <div>
            <CategoryTag>{selectedProductDetail.category}</CategoryTag>
            <Title>{selectedProductDetail.name}</Title>
          </div>

          <Description>{selectedProductDetail.description}</Description>

          <SpecGrid>
            <div className="item">
              <span>Motor Power</span>
              <strong>{selectedProductDetail.power}</strong>
            </div>
            <div className="item">
              <span>Max Range</span>
              <strong>{selectedProductDetail.range}</strong>
            </div>
            <div className="item">
              <span>Top Speed</span>
              <strong>{selectedProductDetail.topSpeed}</strong>
            </div>
            <div className="item">
              <span>Weight</span>
              <strong>{selectedProductDetail.weight}</strong>
            </div>
          </SpecGrid>

          <FeatureList>
            {selectedProductDetail.features &&
              selectedProductDetail.features.map((feat, idx) => (
                <div className="feature" key={idx}>
                  <FiCheckCircle /> {feat}
                </div>
              ))}
          </FeatureList>

          <PriceRow>
            <Price>
              ${selectedProductDetail.price} <span>USD</span>
            </Price>

            <ButtonGroup>
              <SecondaryBtn
                onClick={() => {
                  setSelectedProductDetail(null);
                  setActiveView('customizer');
                }}
              >
                <FiSliders /> Customizer
              </SecondaryBtn>

              <PrimaryBtn
                onClick={() => {
                  addToCart(selectedProductDetail, 1);
                  setSelectedProductDetail(null);
                }}
              >
                <FiShoppingCart /> Add to Cart
              </PrimaryBtn>
            </ButtonGroup>
          </PriceRow>
        </DetailContent>
      </ModalCard>
    </ModalOverlay>
  );
};

export default ProductDetailModal;
