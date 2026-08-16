import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { CUSTOMIZER_OPTIONS } from '../../data/iwheelsData';
import { useIWheels } from '../../context/IWheelsContext';
import { FiCheck, FiSliders, FiShoppingCart, FiCpu, FiZap, FiMaximize2, FiShare2 } from 'react-icons/fi';

const CustomizerContainer = styled.section`
  max-width: 1200px;
  margin: 1rem auto 4rem;
  padding: 0 1.5rem;
`;

const PageHeader = styled.div`
  margin-bottom: 2.5rem;
  text-align: center;

  h1 {
    font-size: 2.8rem;
    font-weight: 800;
    color: #FFFFFF;
    margin: 0 0 0.5rem 0;

    span {
      background: linear-gradient(135deg, #00F2FE 0%, #4FACFE 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  p {
    color: #A0AEC0;
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const ConfiguratorLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 2.5rem;
  align-items: start;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

// Visualizer Column
const VisualizerSticky = styled.div`
  position: sticky;
  top: 100px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 968px) {
    position: relative;
    top: 0;
  }
`;

const VisualCanvas = styled.div`
  background: radial-gradient(circle at 50% 50%, rgba(0, 242, 254, 0.15) 0%, rgba(15, 22, 36, 0.95) 70%);
  border: 2px solid ${(props) => props.accentColor || '#00F2FE'};
  border-radius: 24px;
  height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 0 40px rgba(0, 242, 254, 0.2);
  overflow: hidden;
`;

const WheelGraphic = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  border: 14px solid ${(props) => props.frameColor || '#121212'};
  background: radial-gradient(circle, #0F1624 30%, ${(props) => props.accentColor || '#00F2FE'} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 0 35px ${(props) => props.accentColor || '#00F2FE'};
  transition: all 0.4s ease;

  .hub {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: #0F1624;
    border: 3px solid ${(props) => props.accentColor || '#00F2FE'};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    color: #FFF;
    z-index: 2;
  }

  .rim-icon {
    position: absolute;
    top: 10px;
    font-size: 20px;
  }
`;

const EngravingTextOverlay = styled.div`
  position: absolute;
  bottom: 25px;
  background: rgba(15, 22, 36, 0.9);
  border: 1px solid ${(props) => props.accentColor || '#00F2FE'};
  padding: 4px 16px;
  border-radius: 12px;
  color: ${(props) => props.accentColor || '#00F2FE'};
  font-family: monospace;
  font-weight: bold;
  font-size: 0.85rem;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const AddonBadgesRow = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  display: flex;
  gap: 6px;
  flex-wrap: wrap;

  .badge {
    background: rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    padding: 3px 8px;
    font-size: 0.75rem;
    color: #FFF;
  }
`;

const PerformanceTelemetryCard = styled.div`
  background: rgba(15, 22, 36, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  text-align: center;

  .stat {
    strong {
      display: block;
      color: #00F2FE;
      font-size: 1.4rem;
      font-weight: 800;
    }
    span {
      color: #A0AEC0;
      font-size: 0.75rem;
      text-transform: uppercase;
      font-weight: 600;
    }
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

// Options Form Column
const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const OptionSection = styled.div`
  background: rgba(15, 22, 36, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 1.5rem;

  h3 {
    font-size: 1.15rem;
    color: #FFF;
    margin: 0 0 1rem 0;
    display: flex;
    align-items: center;
    gap: 8px;

    span {
      background: rgba(0, 242, 254, 0.15);
      color: #00F2FE;
      padding: 2px 8px;
      border-radius: 6px;
      font-size: 0.8rem;
    }
  }
`;

const ChoiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 10px;
`;

const ChoiceCard = styled.div`
  background: ${(props) => (props.selected ? 'rgba(0, 242, 254, 0.15)' : 'rgba(255, 255, 255, 0.03)')};
  border: 2px solid ${(props) => (props.selected ? '#00F2FE' : 'rgba(255, 255, 255, 0.08)')};
  border-radius: 14px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    border-color: rgba(0, 242, 254, 0.5);
    background: rgba(0, 242, 254, 0.08);
  }

  .name {
    font-weight: 700;
    color: #FFF;
    font-size: 0.95rem;
    margin-bottom: 6px;
  }

  .price {
    font-size: 0.85rem;
    color: #00F2FE;
    font-weight: 600;
  }
`;

const ColorSwatches = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const ColorSwatchBtn = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${(props) => props.hex};
  border: 3px solid ${(props) => (props.selected ? '#00F2FE' : 'rgba(255, 255, 255, 0.2)')};
  box-shadow: ${(props) => (props.selected ? '0 0 15px #00F2FE' : 'none')};
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
  }
`;

const EngravingInput = styled.input`
  width: 100%;
  background: rgba(15, 22, 36, 0.9);
  border: 1px solid rgba(0, 242, 254, 0.3);
  padding: 0.8rem 1rem;
  border-radius: 12px;
  color: #00F2FE;
  font-family: monospace;
  font-size: 1rem;
  outline: none;

  &::placeholder {
    color: #718096;
    font-family: sans-serif;
  }
`;

const CheckoutFooterCard = styled.div`
  background: linear-gradient(135deg, rgba(0, 242, 254, 0.1) 0%, rgba(15, 22, 36, 0.95) 100%);
  border: 2px solid #00F2FE;
  border-radius: 20px;
  padding: 1.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const PriceBreakdown = styled.div`
  .total-label {
    font-size: 0.85rem;
    color: #A0AEC0;
    text-transform: uppercase;
  }
  .total-val {
    font-size: 2.2rem;
    font-weight: 800;
    color: #FFF;
    span {
      font-size: 1rem;
      color: #00F2FE;
    }
  }
`;

const AddCustomCartBtn = styled.button`
  background: linear-gradient(135deg, #00F2FE 0%, #4FACFE 100%);
  color: #0F1624;
  border: none;
  padding: 1rem 2.2rem;
  border-radius: 14px;
  font-size: 1.1rem;
  font-weight: 800;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 10px 30px rgba(0, 242, 254, 0.4);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 35px rgba(0, 242, 254, 0.6);
  }
`;

export const ProductCustomizer = () => {
  const { addCustomToCart } = useIWheels();

  // Selected State
  const [selectedModel, setSelectedModel] = useState(CUSTOMIZER_OPTIONS.models[0]);
  const [selectedWheelSize, setSelectedWheelSize] = useState(CUSTOMIZER_OPTIONS.wheelSizes[1]);
  const [selectedMotor, setSelectedMotor] = useState(CUSTOMIZER_OPTIONS.motors[1]);
  const [selectedBattery, setSelectedBattery] = useState(CUSTOMIZER_OPTIONS.batteries[1]);
  const [selectedRim, setSelectedRim] = useState(CUSTOMIZER_OPTIONS.rims[1]);
  const [selectedColor, setSelectedColor] = useState(CUSTOMIZER_OPTIONS.colors[1]);
  const [selectedAddons, setSelectedAddons] = useState([CUSTOMIZER_OPTIONS.addons[0].id]);
  const [engravingText, setEngravingText] = useState('CUSTOM-iWHEEL');

  // Recalculated Specs
  const totalPrice = useMemo(() => {
    let sum = selectedModel.basePrice;
    sum += selectedWheelSize.price;
    sum += selectedMotor.price;
    sum += selectedBattery.price;
    sum += selectedRim.price;
    selectedAddons.forEach((addonId) => {
      const match = CUSTOMIZER_OPTIONS.addons.find((a) => a.id === addonId);
      if (match) sum += match.price;
    });
    return sum;
  }, [selectedModel, selectedWheelSize, selectedMotor, selectedBattery, selectedRim, selectedAddons]);

  const calculatedSpeed = useMemo(() => {
    return selectedModel.baseSpeed + selectedWheelSize.speedMod + selectedMotor.speedMod;
  }, [selectedModel, selectedWheelSize, selectedMotor]);

  const calculatedRange = useMemo(() => {
    return selectedModel.baseRange + selectedWheelSize.rangeMod + selectedBattery.rangeMod;
  }, [selectedModel, selectedWheelSize, selectedBattery]);

  const calculatedWeight = useMemo(() => {
    return (selectedModel.baseWeight + selectedWheelSize.weightMod).toFixed(1);
  }, [selectedModel, selectedWheelSize]);

  const toggleAddon = (addonId) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter((id) => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  const handleAddCustomToCart = () => {
    const config = {
      modelName: `${selectedModel.name} (${selectedColor.name})`,
      wheelSize: selectedWheelSize.name,
      motorPower: selectedMotor.name,
      batteryCapacity: selectedBattery.name,
      rimType: selectedRim.name,
      color: selectedColor.name,
      engravingText: engravingText || 'None',
      addons: selectedAddons.map((id) => CUSTOMIZER_OPTIONS.addons.find((a) => a.id === id)?.name),
      totalPrice,
      speed: `${calculatedSpeed} km/h`,
      range: `${calculatedRange} km`
    };
    addCustomToCart(config);
  };

  return (
    <CustomizerContainer>
      <PageHeader>
        <h1>
          Interactive <span>i-Wheels Configurator</span>
        </h1>
        <p>Tailor your custom electric vehicle with precision specs, bespoke frame colors, and custom laser text engraving.</p>
      </PageHeader>

      <ConfiguratorLayout>
        {/* Left Column: Interactive Visualizer */}
        <VisualizerSticky>
          <VisualCanvas accentColor={selectedColor.accentHex}>
            <AddonBadgesRow>
              {selectedAddons.map((id) => {
                const item = CUSTOMIZER_OPTIONS.addons.find((a) => a.id === id);
                return (
                  <span className="badge" key={id}>
                    {item?.icon} {item?.name.split(' ')[0]}
                  </span>
                );
              })}
            </AddonBadgesRow>

            <WheelGraphic
              frameColor={selectedColor.hex}
              accentColor={selectedColor.accentHex}
            >
              <div className="hub">⚡</div>
              <div className="rim-icon">{selectedRim.icon}</div>
            </WheelGraphic>

            {engravingText && (
              <EngravingTextOverlay accentColor={selectedColor.accentHex}>
                ENGRAVING: {engravingText}
              </EngravingTextOverlay>
            )}
          </VisualCanvas>

          <PerformanceTelemetryCard>
            <div className="stat">
              <strong>{calculatedSpeed} km/h</strong>
              <span>Top Speed</span>
            </div>
            <div className="stat">
              <strong>{calculatedRange} km</strong>
              <span>Max Range</span>
            </div>
            <div className="stat">
              <strong>{calculatedWeight} kg</strong>
              <span>Weight</span>
            </div>
            <div className="stat">
              <strong>3-5 Days</strong>
              <span>Build Time</span>
            </div>
          </PerformanceTelemetryCard>
        </VisualizerSticky>

        {/* Right Column: Customizer Options */}
        <OptionsWrapper>
          {/* Base Model */}
          <OptionSection>
            <h3>
              1. Select Base Platform <span>{selectedModel.name}</span>
            </h3>
            <ChoiceGrid>
              {CUSTOMIZER_OPTIONS.models.map((mod) => (
                <ChoiceCard
                  key={mod.id}
                  selected={selectedModel.id === mod.id}
                  onClick={() => setSelectedModel(mod)}
                >
                  <div className="name">{mod.name}</div>
                  <div className="price">${mod.basePrice} Base</div>
                </ChoiceCard>
              ))}
            </ChoiceGrid>
          </OptionSection>

          {/* Wheel Size */}
          <OptionSection>
            <h3>
              2. Wheel Diameter <span>{selectedWheelSize.name}</span>
            </h3>
            <ChoiceGrid>
              {CUSTOMIZER_OPTIONS.wheelSizes.map((ws) => (
                <ChoiceCard
                  key={ws.id}
                  selected={selectedWheelSize.id === ws.id}
                  onClick={() => setSelectedWheelSize(ws)}
                >
                  <div className="name">{ws.name}</div>
                  <div className="price">{ws.price > 0 ? `+$${ws.price}` : 'Included'}</div>
                </ChoiceCard>
              ))}
            </ChoiceGrid>
          </OptionSection>

          {/* Motor Power */}
          <OptionSection>
            <h3>
              3. Motor Power Drive <span>{selectedMotor.name}</span>
            </h3>
            <ChoiceGrid>
              {CUSTOMIZER_OPTIONS.motors.map((m) => (
                <ChoiceCard
                  key={m.id}
                  selected={selectedMotor.id === m.id}
                  onClick={() => setSelectedMotor(m)}
                >
                  <div className="name">{m.name}</div>
                  <div className="price">{m.price > 0 ? `+$${m.price}` : 'Included'}</div>
                </ChoiceCard>
              ))}
            </ChoiceGrid>
          </OptionSection>

          {/* Battery Pack */}
          <OptionSection>
            <h3>
              4. Battery Pack Autonomy <span>{selectedBattery.name}</span>
            </h3>
            <ChoiceGrid>
              {CUSTOMIZER_OPTIONS.batteries.map((b) => (
                <ChoiceCard
                  key={b.id}
                  selected={selectedBattery.id === b.id}
                  onClick={() => setSelectedBattery(b)}
                >
                  <div className="name">{b.name}</div>
                  <div className="price">{b.price > 0 ? `+$${b.price}` : 'Included'}</div>
                </ChoiceCard>
              ))}
            </ChoiceGrid>
          </OptionSection>

          {/* Color & Finish */}
          <OptionSection>
            <h3>
              5. Frame Color & Accent <span>{selectedColor.name}</span>
            </h3>
            <ColorSwatches>
              {CUSTOMIZER_OPTIONS.colors.map((c) => (
                <ColorSwatchBtn
                  key={c.id}
                  hex={c.hex}
                  selected={selectedColor.id === c.id}
                  onClick={() => setSelectedColor(c)}
                >
                  {selectedColor.id === c.id && <FiCheck color="#00F2FE" size={22} />}
                </ColorSwatchBtn>
              ))}
            </ColorSwatches>
          </OptionSection>

          {/* Rim Style */}
          <OptionSection>
            <h3>
              6. Rim & Tire Tread <span>{selectedRim.name}</span>
            </h3>
            <ChoiceGrid>
              {CUSTOMIZER_OPTIONS.rims.map((r) => (
                <ChoiceCard
                  key={r.id}
                  selected={selectedRim.id === r.id}
                  onClick={() => setSelectedRim(r)}
                >
                  <div className="name">{r.icon} {r.name}</div>
                  <div className="price">{r.price > 0 ? `+$${r.price}` : 'Included'}</div>
                </ChoiceCard>
              ))}
            </ChoiceGrid>
          </OptionSection>

          {/* Laser Engraving */}
          <OptionSection>
            <h3>
              7. Custom Chassis Laser Engraving Text
            </h3>
            <EngravingInput
              type="text"
              maxLength={20}
              placeholder="e.g. YOUR NAME / CALLSIGN"
              value={engravingText}
              onChange={(e) => setEngravingText(e.target.value.toUpperCase())}
            />
          </OptionSection>

          {/* Optional Add-ons */}
          <OptionSection>
            <h3>
              8. High-Performance Add-ons
            </h3>
            <ChoiceGrid>
              {CUSTOMIZER_OPTIONS.addons.map((add) => {
                const isChecked = selectedAddons.includes(add.id);
                return (
                  <ChoiceCard
                    key={add.id}
                    selected={isChecked}
                    onClick={() => toggleAddon(add.id)}
                  >
                    <div className="name">{add.icon} {add.name}</div>
                    <div className="price">+${add.price}</div>
                  </ChoiceCard>
                );
              })}
            </ChoiceGrid>
          </OptionSection>

          {/* Final Summary Card */}
          <CheckoutFooterCard>
            <PriceBreakdown>
              <div className="total-label">Total Custom Configuration</div>
              <div className="total-val">
                ${totalPrice} <span>USD</span>
              </div>
            </PriceBreakdown>

            <AddCustomCartBtn onClick={handleAddCustomToCart}>
              <FiShoppingCart /> Add Custom i-Wheel to Cart
            </AddCustomCartBtn>
          </CheckoutFooterCard>
        </OptionsWrapper>
      </ConfiguratorLayout>
    </CustomizerContainer>
  );
};

export default ProductCustomizer;
