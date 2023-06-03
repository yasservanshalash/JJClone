'use client';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import styles from "../layout/navbar/NavBar.module.css"

const SettingsIco = () => {
  return (
    <>
      <IconButton>
        <SettingsIcon sx={{color: "#637381"}} className={styles.spin}/>
      </IconButton>
    </>
  );
};

export default SettingsIco;
