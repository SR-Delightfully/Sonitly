const UserSettings = () => {
    return (
        <ol id="containers">
            <li>
                <div id="hero-container">
                    <h2>Settings</h2>
                    <form>
                        <div id="user-info" className="settings-form-group">
                            <div>
                                <span>
                                    <label for="profile-picture">Profile Picture:</label>
                                    <input type="file" id="profile-picture"></input>    
                                    <img src="/" />    
                                </span>
                                <span>
                                    <input type="reset" value="Clear Photo" />
                                    <input type="submit" value="Save Photo" />
                                </span>
                            </div>
                            <div>
                                <span>
                                    <label for="username">Username:</label>
                                    <input type="text" id="username"></input>    
                                </span>

                                <span>
                                    <label for="first-name">First Name:</label>
                                    <input type="text" id="first-name"></input>    
                                </span>
 
                                <span>
                                    <label for="last-name">Last Name:</label>
                                    <input type="text" id="last-name"></input>    
                                </span>
                            </div>
                            <div>
                                <span>
                                    <label for="email">Email Address:</label>
                                    <input type="text" id="email"></input>    
                                </span>
                                <span>        
                                    <label for="about-me">About Me:</label>
                                    <input type="text" id="about-me"></input>    
                                </span>
                            </div>
                            <div>
                            <span>
                                <label for="password">Password:</label>
                                <input id="password" type="password"></input>
                                <label for="confirm">Confirm Password:</label>
                                <input id="confirm" type="password"></input>
                                <input type="clear" />
                                <input type="submit" value="Save Photo" />
                            </span>
                            </div>
                        </div>
                        <div id="user-banner" className="settings-form-group">
                            <span>        
                                <label for="banner-picture">About Me:</label>
                                <input type="file" id="banner-picture"></input>    
                                <img src="/" />
                                <>
                                    <input type="reset" value ="Clear Photo" />
                                    <input type="submit" value="Save Photo" />
                                </>
                            </span>
                        </div>
                    </form>
                </div>
            </li>
        </ol>
    );
  }
  
  export default UserSettings;
  