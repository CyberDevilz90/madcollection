import React from "react";

const Footer = ({ currentYear }) => {
  // Menerima tahun sebagai prop
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>&copy; {currentYear} | MAD GROUP | Designed by Ahmad Mahmudi</p>
    </footer>
  );
};

const styles = {
  text: {
    color: "black", 
    fontSize: 14, 
    fontWeight: 300,
  },
  footer: {
    position: "absolute",
    bottom: 0,
  }
};

export default Footer;
