import React from 'react'
import "./Footer.css"
export default function Footer() {
    return (
        <div className="Footer_container">
            <div className="Footer_box">
                <h1 className="Footer_h"> IOEVA </h1>
                <h5 className="Footer_h5">Contact</h5>
                <p className='address'>5534 Somewhere In GEORGIA</p>
                <h3 className="Footer_h3"><a className="Footer_mail"  href="mailto: abc@example.com">Send Email</a></h3>    
                <h4>© 2022 IOEVA. All rights reserved.</h4>
            </div>
            <div className="footer_box">
                <h1 className="footer_h1"> Media</h1>
                <p> <a href='#'></a>Online</p>
                <p> <a href='#'></a>Print</p>
                <p> <a href='#'></a>Alternative Ads</p>
            </div>
            <div className="footer_box">
                <h1 className="footer_h1"> Technology</h1>
                <p> <a href='#'></a>Hardware Design</p>
                <p> <a href='#'></a>Software Design</p>
                <p> <a href='#'></a>Digital Signage</p>
            </div>
            <div className="footer_box">
                <p> <a href='#'></a>Automation</p>
                <p> <a href='#'></a>Artificial Intelligence</p>
                <p> <a href='#'></a>IoT</p>
            </div>
            <div className="footer_box">
                <h1 className="footer_h1"> Legal</h1>
                <p> <a href='#'></a>Privacy Policy</p>
                <p> <a href='#'></a>Terms of Use</p>
                <p> <a href='#'></a>Sitemap</p>
            </div>
        </div>
    )
}
