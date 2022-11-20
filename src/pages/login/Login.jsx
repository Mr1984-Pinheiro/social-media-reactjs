import "./login.scss"

const Login = () => {
  return (
    <div className="login">
        <div className="card">
            <div className="left">
                <h1>Hello Everyone.</h1>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                <span>Don't you have an account?</span>
                <button>Register</button>
            </div>
            <div className="right">
                <h1>Login</h1>
                <form >
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login