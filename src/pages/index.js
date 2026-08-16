import React, { useState } from 'react';
import Header from '../components/Header/Header';
import HeroSection from '../components/Store/HeroSection';
import ProductCatalog from '../components/Store/ProductCatalog';
import ProductDetailModal from '../components/Store/ProductDetailModal';
import ProductCustomizer from '../components/Customizer/ProductCustomizer';
import CartDrawer from '../components/Cart/CartDrawer';
import CheckoutModal from '../components/Cart/CheckoutModal';
import ChatbotWidget from '../components/Chatbot/ChatbotWidget';
import AdminDashboard from '../components/Admin/AdminDashboard';
import OrdersView from '../components/Orders/OrdersView';
import Footer from '../components/Footer/Footer';
import { useIWheels } from '../context/IWheelsContext';

const Home = () => {
  const { activeView } = useIWheels();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  return (
    <div style={{ background: '#0F1624', minHeight: '100vh', color: '#FFF' }}>
      <Header />

      <main>
        {activeView === 'store' && (
          <>
            <HeroSection />
            <ProductCatalog />
          </>
        )}

        {activeView === 'customizer' && <ProductCustomizer />}

        {activeView === 'orders' && <OrdersView />}

        {activeView === 'admin' && <AdminDashboard />}
      </main>

      <ProductDetailModal />
      <CartDrawer onProceedCheckout={() => setIsCheckoutOpen(true)} />
      <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
      <ChatbotWidget />

      <Footer />
    </div>
  );
};

export default Home;
