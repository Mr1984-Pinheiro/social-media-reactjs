import "./register.scss"

const Register = () => {
  return (
    <div className="register">
        <div className="card">
            <div className="left">
                <h1>Pinheiro Social</h1>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                <span>Do you have an account?</span>
                <button>Login</button>
            </div>
            <div className="right">
                <h1>Register</h1>
                <form >
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="text" placeholder="Name" />
                    <button>Register</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register