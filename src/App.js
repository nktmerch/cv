import React, { Component } from 'react';
import './App.css';
import Styles from './styles.js';

class App extends Component {
  render() {
    
    //TODO: move this somewhere better
    const profilePicture = "https://lh3.googleusercontent.com/NhAivPpv4fwi4OaheKmKOg7j0CVv7abAZbaa573m8mqjm47oeAPxiNCe3Gq-iHIhb2vbayme6gA-HOD7GyGholMdV2sryH5JuwWjGKx5X0EHFzKQCudvJctGQgskjU14_xhs6fCusnUTITZmbZJwBhjcbSYy8XeG8y9oqS28GwowsH6haG9ab-UQRewHvJsdQHyVqanycUVwLhHV2cDTu1AfAlfdP8c6OugbVD_3S60eVRf3pbiTvZ1qw3LeXVmgdIfrWtA7Rtkjn1Bheo38KGwazhxznJvOVKriP7Db8foDEkR-au9qehaBcGWudbxAaTYM9JOrtRNnM19o0_zpBk3KC6EQvuVABbUSELi47pbsafly02tSVHuPBcMhlj9Q6ayfeTJ5C04LrzHyTtXh-MJV153QhK6KZ6xB8Fw8UfU-mPEq57-zmxiriwsNZeAPavuRYE2-x5SV3UkOcujz8Z8RIpz4wg7tp1t1w3OhnCH0g4Ra4lEJ1kIj7-bEc22bFCFjC5l38_y0UnSLSTCNTXv39hfKVqpAnLu7fGNgBGl_Tr7wQOQMJfMZc5hVg6OjgZ3tQw0g4mqJJJrBdQC5LDhqnSHzRDFcz1QaJMal82IqfcBX2hc7I1Q6v1rtoCY4AY2pSEkiv94VnuoDt2hm1zbEwOUsVu0e3H00VXJx6-cd2l_1tIks68fdPBDhYEOZmTSNUvXzYRRB00T1CA=w771-h960-no";
    
    return (
      <div style={Styles.App}>
        <div style={Styles.Title}>
          <p>(Nicholas) Kiran Merchant</p>
        </div>
        <div style={Styles.ProfilePicture}>
          <img src={profilePicture} alt="Profile Picture" />
        </div>
        <div style={Styles.Bio}>
          <p>
            Hey it's me, Kiran Merchant. 
            And if I have one thing to say, really, truly,
            it's that A.J. (AJ) is a big &apos;ol dummy. 
            Thank you very much, please hire me. 
          </p>
        </div>
      </div>
    );
  }
}

export default App;
