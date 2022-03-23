import React from "react";
import "./nav.css";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
// import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import ConstructionIcon from "@mui/icons-material/Construction";
import CollectionsIcon from "@mui/icons-material/Collections";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#' className={activeNav === '#' ? 'active' : ''}
      onClick={() => setActiveNav("#")}>
        <HomeIcon />
      </a>
      <a href="#about" className={activeNav === '#about' ? 'active' : ''}
      onClick={() => setActiveNav("#about")}>
        <InfoIcon />
      </a>
      {/* <a href="#experience" className={activeNav === '#experience' ? 'active' : ''}
      onClick={() => setActiveNav("#experience")}>
        <WorkHistoryIcon />
      </a> */}
      <a href="#skills" className={activeNav === '#skills' ? 'active' : ''}
      onClick={() => setActiveNav("#skills")}>
        <ConstructionIcon />
      </a>
      <a href="#projects" className={activeNav === '#projects' ? 'active' : ''}
      onClick={() => setActiveNav("#projects")}>
        <CollectionsIcon />
      </a>
      <a href="#contact" className={activeNav === '#contact' ? 'active' : ''}
      onClick={() => setActiveNav("#contact")}>
        <PermContactCalendarIcon />
      </a>
    </nav>
  );
};

export default Nav;
