export default function Login() {
    return (
        <div className="login-container">
            <h1 className='loginTitle'>Login</h1>
            <form className="login-form">
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" required />
                </div>
                <div className="actions">
                    <button type="submit">Sign In</button>
                    
                </div>
                <div className="actions-row">
                
                    <button type="button" className="google-btn">Sign in with Google</button>
                    <button type="button" className="signup">Sign Up</button>
                </div>
            </form>
        </div>
    )
}
