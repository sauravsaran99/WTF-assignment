import React from "react";
import style from "./Footer.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export const Footer = () => {
  return (
    <div className={style.footer}>
      <div>
        <div>
          <img src="/footer-logo.png" alt="footerlogo" width="120px" height="60px" />
        </div>
        <div style={{
            margin: "15px",
        }}>
          <InstagramIcon></InstagramIcon>
          <FacebookIcon></FacebookIcon>
          <LinkedInIcon></LinkedInIcon>
        </div>
      </div>
      <div className={style.footeruidesign}>
        <div>
            <ul className={style.footerfirstul}>
                <li style={{
            fontSize: "22px",
            fontWeight: "bold",
            marginBottom: "10px",
            color: "#fff"
        }}>Quick Links</li>
                <li>About</li>
                <li>FAQs</li>
                <li>Privacy Policy</li>
                <li>WTF in News</li>
                <li>Terms & Conditions</li>
                <li>Refund & Cancellation</li>
            </ul>
        </div>
      </div>
      <div>
        <div>
            <ul className={style.footerfirstul}>
                <li style={{
            fontSize: "22px",
            fontWeight: "bold",
            marginBottom: "10px",
            color: "#fff"
        }}>Explore</li>
                <li>Arenas</li>
                <li>Studios</li>
                <li>Nutrition</li>
            </ul>
        </div>
      </div>
      <div className={style.footeruidesign}>
        <div>
            <ul className={style.footerfirstul}>
                <li style={{
            fontSize: "22px",
            fontWeight: "bold",
            marginBottom: "10px",
            color: "#fff"
        }}>Contact</li>
                <li>About</li>
                <li>FAQs</li>
                <li>Privacy Policy</li>
                <li>WTF in News</li>
                <li>Terms & Conditions</li>
                <li>Refund & Cancellation</li>
            </ul>
        </div>
      </div>
    </div>
  );
};
