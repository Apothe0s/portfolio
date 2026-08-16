import React, { useState } from 'react';
import styled from 'styled-components';
import { FiSearch, FiSliders, FiShoppingCart, FiEye, FiCheck, FiStar, FiZap } from 'react-icons/fi';
import { useIWheels } from '../../context/IWheelsContext';

const CatalogSection = styled.section`
  max-width: 1200px;
  margin: 0 auto 4rem;
  padding: 0 1.5rem;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SectionTitle = styled.div`
  h2 {
    font-size: 2.2rem;
    font-weight: 800;
    color: #FFFFFF;
    margin: 0 0 0.5rem 0;
  }
  p {
    color: #A0AEC0;
    margin: 0;
    font-size: 1rem;
  }
`;

const FilterBar = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 2rem;
  background: rgba(255, 255, 255, 0.03);
  padding: 1rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(15, 22, 36, 0.8);
  border: 1px solid rgba(0, 242, 254, 0.2);
  padding: 0.6rem 1rem;
  border-radius: 10px;
  flex: 1;
  min-width: 240px;

  svg {
    color: #00F2FE;
  }

  input {
    background: transparent;
    border: none;
    color: #FFF;
    font-size: 0.95rem;
    width: 100%;
    outline: none;

    &::placeholder {
      color: #718096;
    }
  }
`;

const CategoryTabs = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const CategoryBtn = styled.button`
  background: ${(props) => (props.active ? 'linear-gradient(135deg, #00F2FE 0%, #4FACFE 100%)' : 'rgba(255, 255, 255, 0.05)')};
  color: ${(props) => (props.active ? '#0F1624' : '#A0AEC0')};
  border: 1px solid ${(props) => (props.active ? '#00F2FE' : 'rgba(255, 255, 255, 0.1)')};
  padding: 0.6rem 1.2rem;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: ${(props) => (props.active ? '#0F1624' : '#FFF')};
    background: ${(props) => (props.active ? 'linear-gradient(135deg, #00F2FE 0%, #4FACFE 100%)' : 'rgba(255, 255, 255, 0.1)')};
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;

const ProductCard = styled.div`
  background: rgba(15, 22, 36, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(0, 242, 254, 0.5);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6);
  }
`;

const Badge = styled.span`
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(0, 242, 254, 0.2);
  color: #00F2FE;
  border: 1px solid rgba(0, 242, 254, 0.4);
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 700;
  backdrop-filter: blur(8px);
  z-index: 2;
`;

const ImageArea = styled.div`
  height: 180px;
  background: ${(props) => props.gradient || 'linear-gradient(135deg, #00F2FE 0%, #4FACFE 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
  position: relative;
  user-select: none;
`;

const CardBody = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
`;

const CategoryLabel = styled.span`
  font-size: 0.75rem;
  text-transform: uppercase;
  color: #00F2FE;
  font-weight: 700;
  letter-spacing: 1px;
`;

const ProductTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #FFFFFF;
  margin: 0;
`;

const RatingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  color: #FFD700;

  span {
    color: #A0AEC0;
  }
`;

const SpecsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  background: rgba(255, 255, 255, 0.03);
  padding: 8px 12px;
  border-radius: 10px;
  text-align: center;

  .spec-item {
    strong {
      display: block;
      color: #FFF;
      font-size: 0.85rem;
    }
    small {
      color: #718096;
      font-size: 0.7rem;
    }
  }
`;

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 0.5rem;
`;

const PriceText = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: #FFFFFF;

  span {
    font-size: 0.85rem;
    color: #00F2FE;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
`;

const IconButton = styled.button`
  background: rgba(255, 255, 255, 0.05);
  color: #FFF;
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 0.6rem;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 242, 254, 0.2);
    border-color: #00F2FE;
    color: #00F2FE;
  }
`;

const AddCartBtn = styled.button`
  background: linear-gradient(135deg, #00F2FE 0%, #4FACFE 100%);
  color: #0F1624;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 800;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.9;
    transform: scale(1.02);
  }
`;

export const ProductCatalog = () => {
  const { products, addToCart, setSelectedProductDetail, setActiveView } = useIWheels();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedToastId, setAddedToastId] = useState(null);

  const categories = ['All', 'Electric Wheels', 'E-Scooters', 'E-Bikes', 'Accessories'];

  const filteredProducts = products.filter((prod) => {
    const matchesCat = selectedCategory === 'All' || prod.category === selectedCategory;
    const matchesSearch =
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleAddToCart = (product) => {
    addToCart(product, 1);
    setAddedToastId(product.id);
    setTimeout(() => setAddedToastId(null), 1500);
  };

  return (
    <CatalogSection id="catalog-section">
      <SectionHeader>
        <SectionTitle>
          <h2>i-Wheels Catalog</h2>
          <p>Select high-efficiency smart vehicles or customize to your exact specs</p>
        </SectionTitle>
      </SectionHeader>

      <FilterBar>
        <SearchBox>
          <FiSearch size={18} />
          <input
            type="text"
            placeholder="Search i-Wheels, scooters, specs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchBox>

        <CategoryTabs>
          {categories.map((cat) => (
            <CategoryBtn
              key={cat}
              active={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </CategoryBtn>
          ))}
        </CategoryTabs>
      </FilterBar>

      <ProductGrid>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id}>
            {product.badge && <Badge>{product.badge}</Badge>}
            <ImageArea gradient={product.gradient}>
              {product.image}
            </ImageArea>

            <CardBody>
              <div>
                <CategoryLabel>{product.category}</CategoryLabel>
                <ProductTitle>{product.name}</ProductTitle>
              </div>

              <RatingRow>
                <FiStar /> <strong>{product.rating}</strong>
                <span>({product.reviewsCount} reviews)</span>
              </RatingRow>

              <SpecsRow>
                <div className="spec-item">
                  <strong>{product.power}</strong>
                  <small>Power</small>
                </div>
                <div className="spec-item">
                  <strong>{product.range}</strong>
                  <small>Range</small>
                </div>
                <div className="spec-item">
                  <strong>{product.topSpeed}</strong>
                  <small>Speed</small>
                </div>
              </SpecsRow>

              <PriceRow>
                <PriceText>
                  ${product.price} <span>USD</span>
                </PriceText>

                <ActionButtons>
                  <IconButton
                    title="View Product Specs"
                    onClick={() => setSelectedProductDetail(product)}
                  >
                    <FiEye size={16} />
                  </IconButton>

                  <IconButton
                    title="Customize Base Model"
                    onClick={() => setActiveView('customizer')}
                  >
                    <FiSliders size={16} />
                  </IconButton>

                  <AddCartBtn onClick={() => handleAddToCart(product)}>
                    {addedToastId === product.id ? <FiCheck /> : <FiShoppingCart />}
                    {addedToastId === product.id ? 'Added' : 'Add'}
                  </AddCartBtn>
                </ActionButtons>
              </PriceRow>
            </CardBody>
          </ProductCard>
        ))}
      </ProductGrid>
    </CatalogSection>
  );
};

export default ProductCatalog;
