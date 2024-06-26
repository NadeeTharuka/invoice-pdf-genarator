import React, { useRef } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import Invoice from './components/Invoice';
import './App.css';

const App = () => {
  const invoiceRef = useRef();

  const generatePDF = () => {
    const input = invoiceRef.current;
    html2canvas(input)
      .then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save("invoice.pdf");
      })
      .catch(err => {
        console.error('Error generating PDF:', err);
      });
  };

  const invoiceData = {
    date: '2024-06-26',
    customer: 'John Doe',
    items: [
      { name: 'Product 1', quantity: 2, price: '$10' },
      { name: 'Product 2', quantity: 1, price: '$20' },
    ],
    total: '$40'
  };

  return (
    <div className="App">
      <Invoice ref={invoiceRef} {...invoiceData} />
      <button onClick={generatePDF}>Generate PDF</button>
    </div>
  );
};

export default App;
