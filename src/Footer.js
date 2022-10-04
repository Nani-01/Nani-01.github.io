import React from "react";

var Time = new Date();
var Year = Time.getFullYear();

function Footer() {

    return (<div className="footer">
        {/* <div className=" footer-items">
            Lakshmi Narayana K
        </div> */}
        <div className="footer-items" id="contact">
            <h4>Social-Links</h4>
            <ul class="social-network social-circle">
                <li><a href="https://www.facebook.com/profile.php?id=100007470466627" class="icoFacebook" title="Facebook"><i class="fa-brands fa-facebook"></i></a></li>
                <li><a href="https://www.linkedin.com/in/lakshmi-narayana-k-62a669224/" class="icoLinkedin" title="Linkedin"><i class="fa-brands fa-linkedin"></i></a></li>
                <li><a href="https://www.instagram.com/klngofficial/" class="icoInstagram" title="Instagram"><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href="https://github.com/KLNarayana03?tab=repositories" class="icoGithub" title="Github"><i class="fa-brands fa-github"></i></a></li>
                <li><a href="mailto:narayanabv2014@gmail.com" class="icoGmail" title="Gmail"><i class="fa-brands fa-google"></i></a></li>
            </ul>
        </div>
        <div className=" footer-items">
            Copyright ©{Year}| Made with ❤️ by Me
        </div>

    </div>);
}

export default Footer;