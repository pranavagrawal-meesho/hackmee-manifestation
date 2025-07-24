import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('orders');
  const [activeOrderTab, setActiveOrderTab] = useState('pending');
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  // Sample data for orders with meaningful values
  const orderData = {
    'pending': [
      { 
        id: 1, 
        suborder: 'ORD-2024-001', 
        quantity: 15, 
        products: ['iPhone 15 Pro Max - 256GB', 'AirPods Pro 2nd Gen', 'Apple Watch Series 9']
      },
      { 
        id: 2, 
        suborder: 'ORD-2024-002', 
        quantity: 8, 
        products: ['Samsung Galaxy S24 Ultra', 'Samsung Galaxy Buds2 Pro', 'Samsung Galaxy Watch 6']
      },
      { 
        id: 3, 
        suborder: 'ORD-2024-003', 
        quantity: 25, 
        products: ['MacBook Pro 14" M3', 'Magic Mouse', 'Thunderbolt 4 Cable']
      },
      { 
        id: 4, 
        suborder: 'ORD-2024-004', 
        quantity: 12, 
        products: ['Dell XPS 13 Plus', 'Dell Wireless Mouse', 'USB-C Hub']
      }
    ],
    'manifested': [
      { 
        id: 5, 
        suborder: 'ORD-2024-005', 
        quantity: 30, 
        products: ['iPad Pro 12.9" M2', 'Apple Pencil 2nd Gen', 'Magic Keyboard for iPad Pro']
      },
      { 
        id: 6, 
        suborder: 'ORD-2024-006', 
        quantity: 18, 
        products: ['Sony WH-1000XM5 Headphones', 'Sony WF-1000XM5 Earbuds', 'Carrying Case']
      },
      { 
        id: 7, 
        suborder: 'ORD-2024-007', 
        quantity: 22, 
        products: ['Microsoft Surface Laptop 5', 'Surface Pen', 'Surface Arc Mouse']
      },
      { 
        id: 8, 
        suborder: 'ORD-2024-008', 
        quantity: 10, 
        products: ['Google Pixel 8 Pro', 'Google Pixel Buds Pro', 'Google Pixel Watch 2']
      }
    ],
    'RTS': [
      { 
        id: 9, 
        suborder: 'ORD-2024-009', 
        quantity: 5, 
        products: ['Bose QuietComfort 45', 'Bose SoundLink Micro', 'Charging Cable']
      },
      { 
        id: 10, 
        suborder: 'ORD-2024-010', 
        quantity: 7, 
        products: ['Lenovo ThinkPad X1 Carbon', 'Lenovo Wireless Mouse', 'Docking Station']
      }
    ],
    'cancelled': [
      { 
        id: 11, 
        suborder: 'ORD-2024-011', 
        quantity: 3, 
        products: ['Razer Blade 15 Gaming Laptop', 'Razer DeathAdder Mouse', 'Razer BlackWidow Keyboard']
      },
      { 
        id: 12, 
        suborder: 'ORD-2024-012', 
        quantity: 6, 
        products: ['ASUS ROG Strix G15', 'ROG Gladius Mouse', 'ROG Strix Scope Keyboard']
      },
      { 
        id: 13, 
        suborder: 'ORD-2024-013', 
        quantity: 4, 
        products: ['MSI GE76 Raider', 'MSI Gaming Mouse', 'MSI Gaming Headset']
      }
    ]
  };

  const renderDashboard = () => (
    <div className="content-wrapper">
      <h1>Welcome to Your Dashboard</h1>
      <p>This is a cool dashboard with a sidebar navigation and user information.</p>
      
      <div className="dashboard-cards">
        <div className="card">
          <h3>Portfolio Overview</h3>
          <p>View and manage your investment portfolio</p>
        </div>
        <div className="card">
          <h3>Recent Orders</h3>
          <p>Track your latest orders and shipments</p>
        </div>
        <div className="card">
          <h3>Support Tickets</h3>
          <p>Get help with your account and services</p>
        </div>
      </div>
    </div>
  );

  const renderOrders = () => (
    <div className="content-wrapper">
      <h1>Orders Management</h1>
      <p>Manage and track all your orders across different statuses. Currently showing {orderData[activeOrderTab].length} orders in {activeOrderTab} status.</p>
      
      <div className="orders-container">
        {/* Order Sub-tabs */}
        <div className="order-tabs">
          <button 
            className={`order-tab ${activeOrderTab === 'pending' ? 'active' : ''}`}
            onClick={() => setActiveOrderTab('pending')}
          >
            Pending ({orderData.pending.length})
          </button>
          <button 
            className={`order-tab ${activeOrderTab === 'manifested' ? 'active' : ''}`}
            onClick={() => setActiveOrderTab('manifested')}
          >
            Manifested ({orderData.manifested.length})
          </button>
          <button 
            className={`order-tab ${activeOrderTab === 'RTS' ? 'active' : ''}`}
            onClick={() => setActiveOrderTab('RTS')}
          >
            RTS ({orderData.RTS.length})
          </button>
          <button 
            className={`order-tab ${activeOrderTab === 'cancelled' ? 'active' : ''}`}
            onClick={() => setActiveOrderTab('cancelled')}
          >
            Cancelled ({orderData.cancelled.length})
          </button>
        </div>

        {/* Order Models */}
        <div className="order-models">
          {orderData[activeOrderTab].map((order) => (
            <div key={order.id} className="order-model">
              <div className="order-model-left">
                <div className="order-list">
                  <div className="order-item">
                    <div className="order-info">
                      <h4>Suborder: {order.suborder}</h4>
                      <p className="quantity">Quantity: {order.quantity} units</p>
                      <div className="products">
                        <h5>Products ({order.products.length} items):</h5>
                        <ul>
                          {order.products.map((product, index) => (
                            <li key={index}>{product}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-model-right">
                <div className="order-actions">
                  <button className="action-btn primary">View Details</button>
                  <button className="action-btn secondary">Edit</button>
                  <button className="action-btn danger">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'orders':
        return renderOrders();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="app">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="company-logo">
            <span className="logo-icon">🏢</span>
            <span className="logo-text">Company</span>
          </div>
        </div>
        
        <nav className="sidebar-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a 
                href="#portfolio" 
                className={`nav-link ${activeTab === 'portfolio' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); setActiveTab('portfolio'); }}
              >
                <span className="nav-icon">📊</span>
                <span>Portfolio</span>
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#orders" 
                className={`nav-link ${activeTab === 'orders' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); setActiveTab('orders'); }}
              >
                <span className="nav-icon">📦</span>
                <span>Orders</span>
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#support" 
                className={`nav-link ${activeTab === 'support' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); setActiveTab('support'); }}
              >
                <span className="nav-icon">🛟</span>
                <span>Support</span>
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#payments" 
                className={`nav-link ${activeTab === 'payments' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); setActiveTab('payments'); }}
              >
                <span className="nav-icon">💳</span>
                <span>Payments</span>
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#claims" 
                className={`nav-link ${activeTab === 'claims' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); setActiveTab('claims'); }}
              >
                <span className="nav-icon">📋</span>
                <span>Claims</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <header className="header">
          <div className="header-left">
            <div className="company-logo-mobile">
              <span className="logo-icon">🏢</span>
              <span className="logo-text">Company</span>
            </div>
          </div>
          <div className="header-right">
            <div className="user-info">
              <div className="user-avatar">👤</div>
              <div className="user-details">
                <div className="user-name">John Doe</div>
                <div className="user-email">john.doe@company.com</div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="page-content">
          {renderContent()}
        </main>
      </div>

      {/* Floating Chatbot */}
      <div className="chatbot-container">
        {/* Chatbot Toggle Button */}
        <button 
          className="chatbot-toggle"
          onClick={() => setIsChatbotOpen(!isChatbotOpen)}
        >
          {isChatbotOpen ? '✕' : '💬'}
        </button>

        {/* Chatbot Window */}
        {isChatbotOpen && (
          <div className="chatbot-window">
            <div className="chatbot-header">
              <h3>Customer Support</h3>
              <p>How can we help you today?</p>
            </div>
            <div className="chatbot-messages">
              <div className="message bot-message">
                <div className="message-avatar">🤖</div>
                <div className="message-content">
                  <p>Hello! I'm here to help you with any questions about your orders, payments, or account. What would you like to know?</p>
                </div>
              </div>
            </div>
            <div className="chatbot-input">
              <input 
                type="text" 
                placeholder="Type your message here..."
                className="chat-input"
              />
              <button className="send-btn">📤</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
