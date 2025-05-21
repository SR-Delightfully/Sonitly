import ImagePlaceholder from '../images/image-placeholder.png';
import BannerPlaceholder from '../images/banner-placeholder.png';

const UserSettings = () => {
    return (
        <ol id="containers">
            <li className="form-container">
                <div id="hero-container" className="form-hero-container">
                    <form id="settings-form">
                    <h2 id="user-settings">Settings</h2>
        
                        <div id="user-info" className="settings-htmlFor-group">
                            <div>
                                <span>
                                    <label htmlFor="profile-picture">Profile Picture:</label>
                                    <input className="btn-float" type="file" id="profile-picture"></input>   
                                    <img id="profile-picture-img" src={ImagePlaceholder} />    

                                </span>
                                <span id='profile-picture-controls'>
                                    <input type="reset" value="Clear Photo" />
                                    <input type="submit" value="Save Photo" />
                                </span>
                            </div>
                            <div id="user-personal-info">
                                <span>
                                    <label htmlFor="username">Username:</label>
                                    <input type="text" id="username"></input>    
                                </span>
                                <span id='form-name-fields'>
                                    <span>
                                        <label htmlFor="first-name">First Name:</label>
                                        <input type="text" id="first-name"></input>    
                                    </span>
    
                                    <span>
                                        <label htmlFor="last-name">Last Name:</label>
                                        <input type="text" id="last-name"></input>    
                                    </span>
                                </span>
                                <span id="email-group">
                                    <label htmlFor="email">Email Address:</label>
                                    <input type="text" id="email"></input>    
                                </span>
                                <span>        
                                    <label htmlFor="about-me">About Me:</label>
                                    <input type="textarea" id="about-me"></input>    
                                </span>
                            </div>
                            <div id="password-group">
                                    <span>
                                        <label htmlFor="password">Password:</label>
                                        <input id="password" type="password"></input>
                                    </span>
                                    <span>
                                        <label htmlFor="confirm">Confirm Password:</label>
                                        <input id="confirm" type="password"></input>
                                    </span>
                                    <span>
                                            <label htmlFor="show-password">Show Password</label>
                                            <input id="show-password" type='radio'></input>
                                            <p id="alert-password" className="">This is an alert message!</p>
                                    </span>
                                    <span id="htmlFor-controls">
                                        <input type="reset" value="Reset Changes" />
                                        <input type="submit" value="Save Changes" />
                                    </span>
                            </div>
                        </div>
                        <hr />
                        <div id="banner-group">
                            <span>
                                <label htmlFor="banner-picture">Banner Picture:</label>
                                <img id="banner-picture-img" src={BannerPlaceholder} />
                                <input className="btn-float" type="file" id="banner-picture"></input>  
                                <span id="banner-controls">
                                    <input type="reset" value ="Clear Photo" />
                                    <input type="submit" value="Save Photo" />
                                </span>  
                            </span>
                            
                        </div>
                    </form>
                </div>
            </li>
            <li className="more-htmlFor-container">
                <div>
                    <h2 id="connction-settings">Connections</h2>
                </div>

                <div>
                    <h2 id="accessibility-settings">Accessability</h2>
                </div>
            </li>
        </ol>
    );
  }
  
  export default UserSettings;
  