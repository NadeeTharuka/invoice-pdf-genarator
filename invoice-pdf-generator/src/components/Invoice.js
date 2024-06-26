import React from 'react';

const Invoice = React.forwardRef((props, ref) => (
  <div ref={ref} className="invoice">
    <h1>Invoice</h1>
    <p>Date: {props.date}</p>
    <p>Customer: {props.customer}</p>
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {props.items.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p>Total: {props.total}</p>
  </div>
));

export default Invoice;
