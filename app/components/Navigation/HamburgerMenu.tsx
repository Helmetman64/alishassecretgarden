// app/components/Navigation/HamburgerMenu.tsx

"use client";

import { useState } from "react";
import styles from "./HamburgerMenu.module.css"; // Import CSS module
import Image from "next/image";
import logo from "../../public/asglogo.png";
import Link from "next/link";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.navWrapper}>
        <nav className={styles.navbar}>
          <Link href="/" onClick={closeMenu}>
            <Image src={logo} alt="Logo" width={200} height={115} />
          </Link>

          <div
            className={`${styles.menuToggle} ${isOpen ? styles.isActive : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            role="button"
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
          <ul className={`${styles.nav} ${isOpen ? styles.mobileNav : ""}`}>
            <li className={styles.navItem}>
              <Link href="/all-items" onClick={closeMenu}>
                All Items
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/about" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/contact" onClick={closeMenu}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HamburgerMenu;
