const Signup = () => {
  return (
    <div id="sign-up-container">
      <div id="form-circle-right"></div>

      <div id="sign-up-form-container">
        <h1>Sign up</h1>
        <form action="server'endpoint" method="post">
          <input placeholder="first name" type="text" />
          <input placeholder="last name" type="text" />
          <br />
          <input placeholder="email" type="text" />
            
          <input placeholder="phone number" type="text" />
          <br />
          <input placeholder="password" type="password" />
          <br />
          <input placeholder="confirm password" type="password" />
          <div id="have-account">
            <a href="sign-up">Already have an account?</a>
          </div>
          <br />
          <button id="sign-up-button" type="button">Sign up</button> 
        </form>
      </div>
    </div>
  );
}

export default Signup;
