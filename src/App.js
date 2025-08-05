import React, { useState, useEffect } from 'react';
import {  Route, Routes } from 'react-router-dom';
import Order from './Pages/Order/order.jsx';
import ConfirmListPage from './Pages/ConfirmList/confirmList.jsx';
import Header from './Components/Header/header.jsx';
import Home from './Pages/Home/home.jsx';
import About from './Pages/About/about.jsx';
import Contact from './Pages/Contact/contact.jsx';
import { ToastContainer } from "react-toastify";
import Footer from './Components/Footer/footer.jsx';
import Layout from './Components/layout/layout.jsx';

function App() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalRate, setTotalRate] = useState(0);
  const [crackers, setCrackers] = useState([]);
  const [customerName, setCustomerName] = useState('');
  const [customerNumber, setCustomerNumber] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerState, setCustomerState] = useState('');
  const [downloaded, setDownloaded] = useState(false);



useEffect(() => {
  const fetchSheetData = async () => {
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbwEii1S1iAoXHTCiDvdwqBeFVo6ds2pRf_Yj-eXmjnSCSlxqt9--xfhy-Qh7TJbR8ox9A/exec?sheet=Hari Haran Trader");
      const data = await response.json();

      const grouped = {};
      data.forEach(row => {
        const category = row['category'];
        if (!grouped[category]) grouped[category] = [];
        grouped[category].push({
          name: row['name'],
          tamilName: row['tamilName'],
          originalRate: parseFloat(row['originalRate']),
          rate: parseFloat(row['rate']),
          quantity: 0,
          checked: false
        });
      });

      const structuredData = Object.entries(grouped).map(([category, items]) => ({
        category,
        items
      }));

      setCrackers(structuredData);
    } catch (err) {
      console.error("Failed to fetch crackers from Google Sheets:", err);
    }
  };

  fetchSheetData();
}, []);

  return (
      <div className='App'>
      <ToastContainer />
    <Header />
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path="/" element={
            <Order
              setSelectedItems={setSelectedItems}
              totalRate={totalRate}
              setTotalRate={setTotalRate}
              crackers={crackers}
              setCrackers={setCrackers}
              customerName={customerName}
              setCustomerName={setCustomerName}
              customerNumber={customerNumber}
              setCustomerNumber={setCustomerNumber}
              customerAddress={customerAddress}
              setCustomerAddress={setCustomerAddress}
              customerState={customerState}
              setCustomerState={setCustomerState}
            />
          } />
          <Route path="/confirmList" element={<ConfirmListPage
            setSelectedItems={setSelectedItems}
            selectedItems={selectedItems}
            totalRate={totalRate}
            setTotalRate={setTotalRate}
            crackers={crackers}
            setCrackers={setCrackers}
            customerName={customerName}
            setCustomerName={setCustomerName}
            customerNumber={customerNumber}
            setCustomerNumber={setCustomerNumber}
            customerAddress={customerAddress}
            setCustomerAddress={setCustomerAddress}
            customerState={customerState}
            setCustomerState={setCustomerState}
            setDownloaded={setDownloaded}
            downloaded={downloaded}
          />} />
        </Routes>
        <Layout />
        <Footer />
      </div>
  );
}

export default App;

