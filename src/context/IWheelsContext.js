import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_PRODUCTS, INITIAL_ORDERS, INITIAL_CHAT_LOGS } from '../data/iwheelsData';

const IWheelsContext = createContext();

export const IWheelsProvider = ({ children }) => {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState(INITIAL_ORDERS);
  const [chatLogs, setChatLogs] = useState(INITIAL_CHAT_LOGS);
  const [activeView, setActiveView] = useState('store'); // 'store' | 'customizer' | 'orders' | 'admin'
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [selectedProductDetail, setSelectedProductDetail] = useState(null);
  const [activeOrderTrackId, setActiveOrderTrackId] = useState(null);

  // Load saved state from localStorage on client side
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('iwheels_cart');
      if (savedCart) setCart(JSON.parse(savedCart));

      const savedOrders = localStorage.getItem('iwheels_orders');
      if (savedOrders) setOrders(JSON.parse(savedOrders));

      const savedProds = localStorage.getItem('iwheels_products');
      if (savedProds) setProducts(JSON.parse(savedProds));

      const savedLogs = localStorage.getItem('iwheels_chat_logs');
      if (savedLogs) setChatLogs(JSON.parse(savedLogs));
    } catch (e) {
      console.warn('LocalStorage access warning:', e);
    }
  }, []);

  // Save changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('iwheels_cart', JSON.stringify(cart));
    } catch (e) {}
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('iwheels_orders', JSON.stringify(orders));
    } catch (e) {}
  }, [orders]);

  useEffect(() => {
    try {
      localStorage.setItem('iwheels_products', JSON.stringify(products));
    } catch (e) {}
  }, [products]);

  useEffect(() => {
    try {
      localStorage.setItem('iwheels_chat_logs', JSON.stringify(chatLogs));
    } catch (e) {}
  }, [chatLogs]);

  // Cart Functions
  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingIdx = prevCart.findIndex(
        (item) => !item.isCustom && item.id === product.id
      );
      if (existingIdx > -1) {
        const updated = [...prevCart];
        updated[existingIdx].quantity += quantity;
        return updated;
      } else {
        return [...prevCart, { ...product, quantity, isCustom: false }];
      }
    });
    setIsCartOpen(true);
  };

  const addCustomToCart = (customConfig) => {
    const customItem = {
      id: `custom-build-${Date.now()}`,
      name: customConfig.modelName,
      category: 'Custom Build',
      price: customConfig.totalPrice,
      quantity: 1,
      isCustom: true,
      customDetails: customConfig,
      image: '⚙️',
      gradient: 'linear-gradient(135deg, #00E5FF 0%, #0072FF 100%)',
      description: `Custom ${customConfig.wheelSize} with ${customConfig.motorPower} and ${customConfig.batteryCapacity}`
    };
    setCart((prevCart) => [...prevCart, customItem]);
    setIsCartOpen(true);
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const updateCartQuantity = (index, delta) => {
    setCart((prevCart) => {
      const updated = [...prevCart];
      const newQty = updated[index].quantity + delta;
      if (newQty <= 0) {
        return updated.filter((_, i) => i !== index);
      }
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  // Order Functions
  const placeOrder = (customerDetails) => {
    const newOrder = {
      id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      customerName: customerDetails.name,
      email: customerDetails.email,
      date: new Date().toISOString().split('T')[0],
      type: cart.some((i) => i.isCustom) ? 'Custom Build' : 'Standard Purchase',
      summary: cart
        .map((i) => `${i.quantity}x ${i.name}`)
        .join(', '),
      items: [...cart],
      total: cart.reduce((sum, i) => sum + i.price * i.quantity, 0),
      status: 'Pending Assembly',
      paymentMethod: `${customerDetails.paymentMethod || 'Credit Card'} (Paid)`,
      shippingAddress: customerDetails.address
    };

    // Deduct stock for standard products
    setProducts((prevProds) =>
      prevProds.map((prod) => {
        const cartMatch = cart.find((i) => !i.isCustom && i.id === prod.id);
        if (cartMatch) {
          return {
            ...prod,
            stock: Math.max(0, prod.stock - cartMatch.quantity)
          };
        }
        return prod;
      })
    );

    setOrders((prev) => [newOrder, ...prev]);
    clearCart();
    setActiveOrderTrackId(newOrder.id);
    return newOrder;
  };

  // Admin Management Functions
  const updateProductStock = (productId, newStock) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === productId ? { ...p, stock: Number(newStock) } : p))
    );
  };

  const updateProductPrice = (productId, newPrice) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === productId ? { ...p, price: Number(newPrice) } : p))
    );
  };

  const addNewProduct = (newProduct) => {
    const prodWithId = {
      ...newProduct,
      id: `prod-${Date.now()}`,
      rating: 5.0,
      reviewsCount: 1,
      gradient: 'linear-gradient(135deg, #00F2FE 0%, #4FACFE 100%)'
    };
    setProducts((prev) => [prodWithId, ...prev]);
  };

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders((prev) =>
      prev.map((ord) => (ord.id === orderId ? { ...ord, status: newStatus } : ord))
    );
  };

  const addChatLog = (userMessage, status = 'Resolved by i-Bot') => {
    const newLog = {
      id: `chat-${Date.now()}`,
      user: 'Anonymous Customer',
      time: 'Just now',
      lastMessage: userMessage,
      status
    };
    setChatLogs((prev) => [newLog, ...prev.slice(0, 15)]);
  };

  const value = {
    products,
    cart,
    orders,
    chatLogs,
    activeView,
    setActiveView,
    isCartOpen,
    setIsCartOpen,
    isChatbotOpen,
    setIsChatbotOpen,
    selectedProductDetail,
    setSelectedProductDetail,
    activeOrderTrackId,
    setActiveOrderTrackId,
    addToCart,
    addCustomToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    placeOrder,
    updateProductStock,
    updateProductPrice,
    addNewProduct,
    updateOrderStatus,
    addChatLog
  };

  return (
    <IWheelsContext.Provider value={value}>
      {children}
    </IWheelsContext.Provider>
  );
};

export const useIWheels = () => {
  const context = useContext(IWheelsContext);
  if (!context) {
    throw new Error('useIWheels must be used within an IWheelsProvider');
  }
  return context;
};
