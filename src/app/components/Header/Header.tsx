"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.blackStrip}>
        <div className={styles.stripItem}>
          <Image src="/images/element.svg" alt="Icon" width={20} height={20} />
          <span>Lorem ipsum dolor</span>
        </div>
        <div className={styles.stripItem}>
          <Image src="/images/element.svg" alt="Icon" width={20} height={20} />
          <span>Lorem ipsum dolor</span>
        </div>
        <div className={styles.stripItem}>
          <Image src="/images/element.svg" alt="Icon" width={20} height={20} />
          <span>Lorem ipsum dolor</span>
        </div>
      </div>

      <div className={styles.header}>
        <div className={styles.logoContainer}>
          <Image src="/images/logo.svg" alt="Logo" width={40} height={40} />
        </div>

        <div className={styles.logoText}>
          <Link href="/">LOGO</Link>
        </div>

        <div className={styles.headerRight}>
          <div className={styles.icons}>
            <button className={styles.iconButton} aria-label="Search">
              <Image
                src="/images/search.svg"
                alt="Search"
                width={24}
                height={24}
              />
            </button>
            <button className={styles.iconButton} aria-label="Favorites">
              <Image
                src="/images/heart.svg"
                alt="Favorites"
                width={24}
                height={24}
              />
            </button>
            <button className={styles.iconButton} aria-label="Shopping Bag">
              <Image
                src="/images/shopping-bag.svg"
                alt="Shopping Bag"
                width={24}
                height={24}
              />
            </button>
            <button className={styles.iconButton} aria-label="Profile">
              <Image
                src="/images/profile.svg"
                alt="Profile"
                width={24}
                height={24}
              />
            </button>

            <div className={styles.language}>
              <span>ENG</span>
              <Image
                src="/images/arrow-down.svg"
                alt="Language dropdown"
                width={12}
                height={12}
                className={styles.arrowDown}
              />
            </div>
          </div>
        </div>
      </div>

      <nav className={styles.navigation}>
        <ul>
          <li className={styles.active}>
            <Link href="/shop">SHOP</Link>
          </li>
          <li>
            <Link href="/skills">SKILLS</Link>
          </li>
          <li>
            <Link href="/stories">STORIES</Link>
          </li>
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
          <li>
            <Link href="/contact">CONTACT US</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
