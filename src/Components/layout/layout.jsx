// import React from 'react';
// import { useLocation,useNavigate } from 'react-router-dom';
// import './layout.css'

// const Layout = ({ children }) => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Hide button on the order page
//   const hideButton = location.pathname === '/';

//   return (
//     <div>
//       {!hideButton && (
//        <button className="place-order-btn" onClick={() => navigate("/")}>
//   Place Order
// </button>
//       )}
//       {children}
//     </div>
//   );
// };

// export default Layout;

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import './layout.css';

const Layout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const hideButton = location.pathname === '/';

  const openWhatsApp = () => {
    window.open("https://wa.me/911111111111", "_blank"); 
  };

  return (
    <div>
      {!hideButton && (
        <div className="floating-buttons">
          <button className="whatsapp-btn" onClick={openWhatsApp}>
            <FaWhatsapp className="whatsapp-icon" />
          </button>
          <button className="place-order-btn" onClick={() => navigate("/")}>
            Place Order
          </button>
        </div>
      )}
      {children}
    </div>
  );
};

export default Layout;
