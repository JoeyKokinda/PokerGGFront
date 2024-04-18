import { useState } from 'react';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Sample transaction data (replace with your actual data)
  const transactions = [
    { type: 'Deposit', amount: 100, date: '2023-06-01' },
    { type: 'Withdraw', amount: 50, date: '2023-06-02' },
    // Add more transaction objects as needed
  ];

  const totalPages = Math.ceil(transactions.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderTransactionItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentTransactions = transactions.slice(startIndex, endIndex);

    return currentTransactions.map((transaction, index) => (
      <div key={index} className="transaction-item">
        <span>{transaction.type}</span>
        <span>${transaction.amount}</span>
        <span>{transaction.date}</span>
      </div>
    ));
  };

return (
    <div className="homecont">
        <div className="header">
            <h2>Fire Club</h2>
            <button className="account-button">
                <img src="../public/profile.svg" alt="Profile" />
            </button>
        </div>
        <div className="home-form">
            <div className="form-group">
                <button className="homebutt">Deposit</button>
            </div>
            <div className="form-group">
                <button className="homebutt">Withdraw</button>
            </div>
            <div className="history">
                <h2 className="historybutt">History</h2>
                <div className="transaction-history">{renderTransactionItems()}</div>
                <div className="pagination">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
            <button className="support-btn">Support</button>
        </div>
    </div>
);
}