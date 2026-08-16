import React, { useState } from 'react';
import styled from 'styled-components';
import { useIWheels } from '../../context/IWheelsContext';
import {
  FiTrendingUp,
  FiBox,
  FiSliders,
  FiMessageSquare,
  FiPlus,
  FiEdit2,
  FiCheck,
  FiAlertCircle,
  FiDollarSign,
  FiShoppingBag
} from 'react-icons/fi';

const AdminContainer = styled.section`
  max-width: 1200px;
  margin: 1rem auto 4rem;
  padding: 0 1.5rem;
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;

  h1 {
    font-size: 2.2rem;
    font-weight: 800;
    color: #FFFFFF;
    margin: 0;

    span {
      color: #00F2FE;
    }
  }

  p {
    color: #A0AEC0;
    margin: 4px 0 0 0;
    font-size: 0.95rem;
  }
`;

// KPI Grid
const KPIGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
`;

const KPICard = styled.div`
  background: rgba(15, 22, 36, 0.8);
  border: 1px solid rgba(0, 242, 254, 0.2);
  border-radius: 20px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;

  .icon-box {
    width: 52px;
    height: 52px;
    border-radius: 14px;
    background: ${(props) => props.bg || 'rgba(0, 242, 254, 0.15)'};
    color: ${(props) => props.color || '#00F2FE'};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
  }

  .info {
    h4 {
      font-size: 0.8rem;
      text-transform: uppercase;
      color: #A0AEC0;
      margin: 0 0 4px 0;
      letter-spacing: 0.5px;
    }
    .val {
      font-size: 1.6rem;
      font-weight: 800;
      color: #FFF;
      margin: 0;
    }
  }
`;

// Tabs Bar
const TabsHeader = styled.div`
  display: flex;
  gap: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 2rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
`;

const TabButton = styled.button`
  background: transparent;
  border: none;
  color: ${(props) => (props.active ? '#00F2FE' : '#A0AEC0')};
  border-bottom: 3px solid ${(props) => (props.active ? '#00F2FE' : 'transparent')};
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    color: #FFF;
  }
`;

// Section Card
const DashboardSection = styled.div`
  background: rgba(15, 22, 36, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 1.8rem;
`;

// Table Components
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;

  th {
    padding: 1rem;
    color: #00F2FE;
    font-size: 0.8rem;
    text-transform: uppercase;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    font-weight: 700;
  }

  td {
    padding: 1rem;
    color: #E2E8F0;
    font-size: 0.9rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    vertical-align: middle;
  }

  tr:hover {
    background: rgba(255, 255, 255, 0.02);
  }
`;

const Badge = styled.span`
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 700;
  background: ${(props) => props.bg || 'rgba(0, 242, 254, 0.15)'};
  color: ${(props) => props.color || '#00F2FE'};
  border: 1px solid ${(props) => props.borderColor || 'rgba(0, 242, 254, 0.3)'};
`;

const NumberInput = styled.input`
  background: rgba(15, 22, 36, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #00F2FE;
  padding: 4px 8px;
  border-radius: 8px;
  width: 80px;
  font-weight: 700;
  font-size: 0.9rem;
`;

const StatusSelect = styled.select`
  background: rgba(15, 22, 36, 0.9);
  border: 1px solid rgba(0, 242, 254, 0.3);
  color: #00F2FE;
  padding: 6px 12px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.85rem;
  outline: none;
`;

const AddProductBtn = styled.button`
  background: linear-gradient(135deg, #00F2FE 0%, #4FACFE 100%);
  color: #0F1624;
  border: none;
  padding: 0.7rem 1.2rem;
  border-radius: 12px;
  font-weight: 800;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    opacity: 0.9;
  }
`;

// Form Modal
const FormModalOverlay = styled.div`
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

const FormModalCard = styled.div`
  background: #0F1624;
  border: 1px solid rgba(0, 242, 254, 0.3);
  border-radius: 24px;
  max-width: 500px;
  width: 100%;
  padding: 2rem;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    margin: 0;
    color: #FFF;
    font-size: 1.5rem;
  }

  input, select, textarea {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 0.8rem 1rem;
    border-radius: 10px;
    color: #FFF;
    font-size: 0.9rem;
    outline: none;
  }
`;

export const AdminDashboard = () => {
  const {
    products,
    orders,
    chatLogs,
    updateProductStock,
    updateProductPrice,
    addNewProduct,
    updateOrderStatus
  } = useIWheels();

  const [activeTab, setActiveTab] = useState('inventory'); // 'inventory' | 'orders' | 'chatbot'
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [newProdForm, setNewProdForm] = useState({
    name: '',
    category: 'Electric Wheels',
    badge: 'Custom Tech',
    price: 999,
    stock: 10,
    power: '1200W',
    range: '60 km',
    topSpeed: '40 km/h',
    weight: '15 kg',
    description: 'High-performance smart mobility vehicle.',
    image: '⚡'
  });

  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);
  const activeCustomizations = orders.filter((o) => o.type === 'Custom Build').length;
  const lowStockCount = products.filter((p) => p.stock < 10).length;

  const handleCreateProduct = (e) => {
    e.preventDefault();
    if (!newProdForm.name) return;
    addNewProduct(newProdForm);
    setIsAddModalOpen(false);
  };

  return (
    <AdminContainer>
      <PageHeader>
        <div>
          <h1>
            i-Wheels <span>Management System</span>
          </h1>
          <p>Real-time telemetry, product inventory control, custom assembly workflow, and chatbot logs.</p>
        </div>
      </PageHeader>

      <KPIGrid>
        <KPICard bg="rgba(0, 242, 254, 0.15)" color="#00F2FE">
          <div className="icon-box">
            <FiDollarSign />
          </div>
          <div className="info">
            <h4>Total Sales Revenue</h4>
            <div className="val">${totalRevenue.toLocaleString()}</div>
          </div>
        </KPICard>

        <KPICard bg="rgba(56, 239, 125, 0.15)" color="#38EF7D">
          <div className="icon-box">
            <FiSliders />
          </div>
          <div className="info">
            <h4>Custom Build Orders</h4>
            <div className="val">{activeCustomizations} Active</div>
          </div>
        </KPICard>

        <KPICard bg="rgba(255, 8, 68, 0.15)" color="#FF0844">
          <div className="icon-box">
            <FiAlertCircle />
          </div>
          <div className="info">
            <h4>Low Stock Items</h4>
            <div className="val">{lowStockCount} Products</div>
          </div>
        </KPICard>

        <KPICard bg="rgba(178, 36, 239, 0.15)" color="#B224EF">
          <div className="icon-box">
            <FiMessageSquare />
          </div>
          <div className="info">
            <h4>i-Bot Inquiries</h4>
            <div className="val">{chatLogs.length} Logged</div>
          </div>
        </KPICard>
      </KPIGrid>

      <TabsHeader>
        <TabButton
          active={activeTab === 'inventory'}
          onClick={() => setActiveTab('inventory')}
        >
          <FiBox /> Inventory & Products
        </TabButton>
        <TabButton
          active={activeTab === 'orders'}
          onClick={() => setActiveTab('orders')}
        >
          <FiSliders /> Custom Orders Workflow ({orders.length})
        </TabButton>
        <TabButton
          active={activeTab === 'chatbot'}
          onClick={() => setActiveTab('chatbot')}
        >
          <FiMessageSquare /> Chatbot Inquiry Logs ({chatLogs.length})
        </TabButton>
      </TabsHeader>

      {/* Tab 1: Inventory & Products */}
      {activeTab === 'inventory' && (
        <DashboardSection>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <h3 style={{ margin: 0, color: '#FFF' }}>Products Catalog Control</h3>
            <AddProductBtn onClick={() => setIsAddModalOpen(true)}>
              <FiPlus /> Add New i-Wheel
            </AddProductBtn>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <Table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Specs (Power/Range)</th>
                  <th>Price ($ USD)</th>
                  <th>Stock Count</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p.id}>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontSize: '24px' }}>{p.image}</span>
                        <div>
                          <strong>{p.name}</strong>
                          <div style={{ fontSize: '0.75rem', color: '#A0AEC0' }}>{p.badge}</div>
                        </div>
                      </div>
                    </td>
                    <td>{p.category}</td>
                    <td>{p.power} / {p.range}</td>
                    <td>
                      <NumberInput
                        type="number"
                        value={p.price}
                        onChange={(e) => updateProductPrice(p.id, e.target.value)}
                      />
                    </td>
                    <td>
                      <NumberInput
                        type="number"
                        value={p.stock}
                        onChange={(e) => updateProductStock(p.id, e.target.value)}
                      />
                    </td>
                    <td>
                      {p.stock < 10 ? (
                        <Badge bg="rgba(255, 8, 68, 0.15)" color="#FF0844" borderColor="rgba(255, 8, 68, 0.3)">
                          Low Stock ({p.stock})
                        </Badge>
                      ) : (
                        <Badge bg="rgba(56, 239, 125, 0.15)" color="#38EF7D" borderColor="rgba(56, 239, 125, 0.3)">
                          In Stock ({p.stock})
                        </Badge>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </DashboardSection>
      )}

      {/* Tab 2: Orders & Custom Workflows */}
      {activeTab === 'orders' && (
        <DashboardSection>
          <h3 style={{ margin: '0 0 1.5rem 0', color: '#FFF' }}>
            Customization Assembly & Order Status Tracking
          </h3>

          <div style={{ overflowX: 'auto' }}>
            <Table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Type & Specs</th>
                  <th>Total</th>
                  <th>Assembly Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((ord) => (
                  <tr key={ord.id}>
                    <td>
                      <strong style={{ color: '#00F2FE', fontFamily: 'monospace' }}>
                        {ord.id}
                      </strong>
                      <div style={{ fontSize: '0.75rem', color: '#718096' }}>{ord.date}</div>
                    </td>
                    <td>
                      <div>{ord.customerName}</div>
                      <div style={{ fontSize: '0.75rem', color: '#A0AEC0' }}>{ord.email}</div>
                    </td>
                    <td>
                      <Badge bg="rgba(0, 242, 254, 0.1)" color="#00F2FE">
                        {ord.type}
                      </Badge>
                      <div style={{ fontSize: '0.85rem', marginTop: '4px', color: '#E2E8F0' }}>
                        {ord.summary}
                      </div>
                    </td>
                    <td>
                      <strong>${ord.total}</strong>
                    </td>
                    <td>
                      <StatusSelect
                        value={ord.status}
                        onChange={(e) => updateOrderStatus(ord.id, e.target.value)}
                      >
                        <option value="Pending Assembly">Pending Assembly</option>
                        <option value="In Production">In Production</option>
                        <option value="Quality Check">Quality Check</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                      </StatusSelect>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </DashboardSection>
      )}

      {/* Tab 3: Chatbot Logs */}
      {activeTab === 'chatbot' && (
        <DashboardSection>
          <h3 style={{ margin: '0 0 1.5rem 0', color: '#FFF' }}>
            i-Bot Live Support & Inquiry Transcripts
          </h3>

          <div style={{ overflowX: 'auto' }}>
            <Table>
              <thead>
                <tr>
                  <th>Timestamp</th>
                  <th>Customer</th>
                  <th>Last Inquiry Message</th>
                  <th>Resolution Status</th>
                </tr>
              </thead>
              <tbody>
                {chatLogs.map((log) => (
                  <tr key={log.id}>
                    <td>{log.time}</td>
                    <td>{log.user}</td>
                    <td style={{ color: '#00F2FE' }}>"{log.lastMessage}"</td>
                    <td>
                      <Badge bg="rgba(56, 239, 125, 0.15)" color="#38EF7D">
                        {log.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </DashboardSection>
      )}

      {/* Modal for Adding New Product */}
      {isAddModalOpen && (
        <FormModalOverlay onClick={() => setIsAddModalOpen(false)}>
          <FormModalCard onClick={(e) => e.stopPropagation()}>
            <h3>Add New i-Wheels Product</h3>
            <form onSubmit={handleCreateProduct} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input
                type="text"
                placeholder="Product Name"
                required
                value={newProdForm.name}
                onChange={(e) => setNewProdForm({ ...newProdForm, name: e.target.value })}
              />
              <select
                value={newProdForm.category}
                onChange={(e) => setNewProdForm({ ...newProdForm, category: e.target.value })}
              >
                <option value="Electric Wheels">Electric Wheels</option>
                <option value="E-Scooters">E-Scooters</option>
                <option value="E-Bikes">E-Bikes</option>
                <option value="Accessories">Accessories</option>
              </select>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <input
                  type="number"
                  placeholder="Price ($)"
                  value={newProdForm.price}
                  onChange={(e) => setNewProdForm({ ...newProdForm, price: Number(e.target.value) })}
                />
                <input
                  type="number"
                  placeholder="Initial Stock"
                  value={newProdForm.stock}
                  onChange={(e) => setNewProdForm({ ...newProdForm, stock: Number(e.target.value) })}
                />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <input
                  type="text"
                  placeholder="Power (e.g. 2000W)"
                  value={newProdForm.power}
                  onChange={(e) => setNewProdForm({ ...newProdForm, power: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Range (e.g. 80 km)"
                  value={newProdForm.range}
                  onChange={(e) => setNewProdForm({ ...newProdForm, range: e.target.value })}
                />
              </div>
              <textarea
                rows={3}
                placeholder="Description"
                value={newProdForm.description}
                onChange={(e) => setNewProdForm({ ...newProdForm, description: e.target.value })}
              />
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                <button
                  type="button"
                  style={{ background: 'transparent', border: '1px solid #718096', color: '#FFF', padding: '0.6rem 1.2rem', borderRadius: '8px', cursor: 'pointer' }}
                  onClick={() => setIsAddModalOpen(false)}
                >
                  Cancel
                </button>
                <AddProductBtn type="submit">Save Product</AddProductBtn>
              </div>
            </form>
          </FormModalCard>
        </FormModalOverlay>
      )}
    </AdminContainer>
  );
};

export default AdminDashboard;
