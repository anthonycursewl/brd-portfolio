import "./anthony-main.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProjectsBrd from "./sec-project-brd";
import { useState } from "react";

export default function Main() {
  const [copy, setCopy] = useState(false);
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopy(true);

    setTimeout(() => {
      setCopy(false);
    }, 1000);
  };

  const [copy2, setCopy2] = useState(false);
  const copyToClipboard2 = (text) => {
    navigator.clipboard.writeText(text);
    setCopy2(true);

    setTimeout(() => {
      setCopy2(false);
    }, 1000);
  };

  return (
    <motion.section
      className="sec-mn-if"
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -70, opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="all-content-idk">
          <h1>Anthony Zerpa</h1>
          <span>New portfolio coming soon. Try again later.</span>
      </div>
    </motion.section>
  );
}
