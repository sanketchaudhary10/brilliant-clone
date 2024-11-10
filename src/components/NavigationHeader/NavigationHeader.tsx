// src/components/NavigationHeader.tsx
import React from 'react';
import styles from './NavigationHeader.module.css';
import { Link } from 'react-router-dom';

const NavigationHeader: React.FC = () => {
  return (
    <header className={styles.header}>
        <h1>Brilliant</h1>
        <Link to="/login">
        <button>Log in</button>
        </Link>
    </header>
  );
};

export default NavigationHeader;
