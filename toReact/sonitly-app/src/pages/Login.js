const Login = () => {
  return (
    <div id="login-container">
        <div id="form-circle-left"></div>

        <div id="form-container">
          <h1>Login</h1>
          <form action="server'endpoint" method="post">
            <input placeholder="email" type="text" />
            <br />
            <input placeholder="password" type="text" />
            <br />
            <div id="forgot-password">
                <a href="reset-password">forgot password?</a>
            </div>
            <br />
            <button id="login-button" type="button">Login</button> 
          </form>
        </div>
    </div>
  );
}

export default Login;
