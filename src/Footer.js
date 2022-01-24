import React from 'react';
// import {FaFacebook, FaInstagram, FaTwitter,FaRegCopyright} from 'react-icons/all'



function Footer(){
    const today = new Date();
    const date = today.getFullYear();
    return (
        <div className="footer">
            
            <div className="footer-info">

            {/* <FaRegCopyright/>  */}
            <span><h6>{date} Kipu's Rescue</h6> </span>
            200 Middle Street
            <br/>
            Astoria NY 11103 
            <br/>
            tashitigershark@gmail.com

            <br/>
            kipu's Rescue is my project. You can reach me at 877-393-4448.
            </div>
            
            <div className="footer-signup">
            {/* <FaFacebook style={{fontSize: '65px'}}/>
            <FaInstagram style={{fontSize: '65px'}}/>
            <FaTwitter style={{fontSize: '65px'}}/> */}
            

                </div>

                
        </div>
    )
}

export default Footer;
