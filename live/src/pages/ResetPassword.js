const ResetPassword = () => {
    return (
      <div id="sign-up-container">
        <div id="reset-password-form-container">
          <h1>Reset Password</h1>
          <form action="server'endpoint" method="post">
            <input placeholder="password" type="password" />
            <br/>
            <input placeholder="re-type password" type="password" />
            
            
            <button id="reset-password-button" type="button">confirm</button> 
          </form>
        </div>
      </div>
    );
  }
  
  export default ResetPassword;
  