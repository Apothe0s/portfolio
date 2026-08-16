# i-Wheels E-Commerce Web-Based Management System

Welcome to the **i-Wheels E-Commerce & Web-Based Management System**, a high-performance web application designed for personal electric mobility vehicles (electric unicycles, scooters, and hovercrafts) with real-time product customization, an intelligent support chatbot, and a web-based management dashboard.

---

## ⚡ Key Features

### 🛒 1. E-Commerce Storefront
* **Product Catalog:** Browse products across multiple categories (*Electric Single-Wheel, Performance Scooters, Urban Commuters, Accessories*).
* **Search & Category Filters:** Quickly search models by title or filter by category.
* **Product Modal Details:** Detailed specifications, stock status, key highlights, and direct add-to-cart.
* **Cart Drawer & Checkout:** Dynamic subtotal calculations, promo code discounts (`IWHEELS10` for 10% off), instant order ID generation, and multi-payment method simulation.

### 🎨 2. Interactive Product Customizer
* **Custom Base Vehicles:** Choose from base platforms (*i-Wheel Apex Custom, i-Wheel Monster Custom, i-Glide Custom Scooter*).
* **Precision Hardware Options:**
  * **Wheel Diameters:** 12-inch, 16-inch, 18-inch, 22-inch options.
  * **Motor Power Drive:** 800W Eco up to 4000W Hyperdrive Race Pack.
  * **Battery Autonomy:** 48V 12Ah, 60V 20Ah, 72V 30Ah Extreme Range packs.
* **Visual & Personal Styling:**
  * Custom neon frame accent colors & rim finishes.
  * Custom laser text engraving on chassis.
* **Live Telemetry Engine:** Dynamic recalculation of Top Speed (km/h), Max Range (km), Total Weight (kg), Build Time, and Price.

### 💬 3. i-Bot Intelligent Chatbot Assistant
* **Product Recommendation Wizard:** Guided wizard helping users select the perfect wheel based on speed and range requirements.
* **Live Order Tracking:** Look up real-time assembly and shipment status by entering an Order ID.
* **Specification FAQ Knowledge Base:** Answers to technical queries regarding waterproofing, safety gear, battery care, and warranty.
* **Admin Synchronization:** All customer chat transcripts are recorded and accessible in the Admin Dashboard.

### 📊 4. Web-Based Management Admin System
* **Sales & Performance Analytics:** High-level KPIs including total revenue, active orders, custom assembly queue, and chatbot query metrics.
* **Product Inventory Management:** Real-time stock adjustment, price management, and new product creation.
* **Custom Assembly Workflow:** Track custom orders through assembly stages (*Configuration Confirmed, Parts Allocation, Custom Assembly, QA Testing, Shipped*).
* **Customer Chatbot Interaction Logs:** Monitor incoming inquiries and transcripts.

### 📦 5. Customer Order Tracking
* Dedicated customer portal for viewing active and past orders, custom builds, delivery tracking numbers, and progress steppers.

---

## 🛠️ Technology Stack

* **Framework:** [Next.js](https://nextjs.org/)
* **Library:** [React 18](https://reactjs.org/)
* **Styling:** [Styled-Components](https://styled-components.com/) & CSS-in-JS
* **Icons:** [React Icons / Feather Icons](https://react-icons.github.io/react-icons/)
* **State Management:** React Context API + LocalStorage Persistence
* **Package Manager:** [Yarn](https://yarnpkg.com/)

---

## 🚀 Getting Started

### Prerequisites
* Node.js v18+ or v24+
* Yarn package manager

### Installation

1. **Clone repository and install dependencies:**
   ```bash
   yarn install
   ```

2. **Run Development Server:**
   ```bash
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for Production / Static Export:**
   ```bash
   yarn build
   ```
   Generates static build artifacts in the `out/` directory.

---

## 🗂️ Project Structure

```
├── public/                # Static images & graphics
├── src/
│   ├── components/        # React components
│   │   ├── Admin/         # Management Admin Dashboard & Product Modals
│   │   ├── Cart/          # Cart Drawer & Checkout Modal
│   │   ├── Chatbot/       # i-Bot Assistant Widget
│   │   ├── Customizer/    # Interactive 3D/Visual Product Configurator
│   │   ├── Footer/        # Footer component
│   │   ├── Header/        # Cyber-themed Header Navigation
│   │   ├── Hero/          # Landing Hero section
│   │   ├── Orders/        # Customer Order Tracking Portal
│   │   └── Store/         # Product Catalog & Detail Modals
│   ├── context/           # IWheelsContext state provider
│   ├── data/              # Initial mock products, customizer specs, FAQs, and orders
│   ├── pages/             # Next.js page routes (`_app.js`, `index.js`)
│   └── styles/            # Global styles and theme definitions
├── package.json
└── README.md
```

---

## 📄 License
MIT License. Developed for i-Wheels Smart Mobility Systems.
