import React, { useEffect, useState } from 'react';
import styles from './PurchaseHistory.module.scss';

const PurchaseHistory = () => {
  const [purchaseHistory, setPurchaseHistory] = useState([]);

  useEffect(() => {
    // Dữ liệu tĩnh mô phỏng lịch sử mua hàng
    const mockPurchaseHistory = [
      {
        id: '1',
        date: '2023-05-30T12:34:56Z',
        total: 150.0,
        items: [
          {
            id: 'a1',
            name: 'Product A',
            quantity: 2,
            price: 50.0
          },
          {
            id: 'b2',
            name: 'Product B',
            quantity: 1,
            price: 50.0
          }
        ]
      },
      {
        id: '2',
        date: '2023-06-01T15:22:30Z',
        total: 100.0,
        items: [
          {
            id: 'c3',
            name: 'Product C',
            quantity: 1,
            price: 100.0
          }
        ]
      }
    ];

    setPurchaseHistory(mockPurchaseHistory);
  }, []);

  return (
    <div className={styles['purchase-history']}>
      <h1>Purchase History</h1>
      {purchaseHistory.length === 0 ? (
        <p className={styles['no-history']}>No purchase history available.</p>
      ) : (
        <ul>
          {purchaseHistory.map((purchase) => (
            <li key={purchase.id}>
              <ul>
                {purchase.items.map((item) => (
                    <li key={item.id}>
                    <p>Item: {item.name}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ${item.price}</p>
                  </li>
                ))}
              </ul>
                <p>Order ID: {purchase.id}</p>
                <p>Date: {new Date(purchase.date).toLocaleDateString()}</p>
                <p className={styles.Price}>Total: ${purchase.total}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PurchaseHistory;