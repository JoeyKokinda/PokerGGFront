export default function Home() {
    return (
        <div className="homecont">
            <h2>GoMoney App</h2>
            <div className="home-form">
                <div className="form-group">
                    <button className="homebutt">Deposit</button>
                </div>
                <div className="form-group">
                    <button className="homebutt">Withdraw</button>
                </div>
                <div className="history">
                    <h2 className="historybutt">History</h2>
                </div>
                <button className="support-btn">Support</button>
            </div>
        </div>
    );
}
