import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.blackStrip}>
        <div className={styles.stripContent}>
          <div className={styles.stripItem}>
            <Image
              src="/images/element.svg"
              alt="Icon"
              width={24}
              height={24}
            />
            <span>Lorem ipsum dolor</span>
          </div>
          <div className={styles.stripItem}>
            <Image
              src="/images/element.svg"
              alt="Icon"
              width={24}
              height={24}
            />
            <span>Lorem ipsum dolor</span>
          </div>
          <div className={styles.stripItem}>
            <Image
              src="/images/element.svg"
              alt="Icon"
              width={24}
              height={24}
            />
            <span>Lorem ipsum dolor</span>
          </div>
        </div>
      </div>

      <div className={styles.mainHeader}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/images/logo.svg" alt="LOGO" width={120} height={40} />
          </Link>
        </div>

        <nav className={styles.navigation}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>
                SHOP
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/skills" className={styles.navLink}>
                SKILLS
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/stories" className={styles.navLink}>
                STORIES
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/about" className={styles.navLink}>
                ABOUT
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/contact" className={styles.navLink}>
                CONTACT US
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <div className={styles.language}>
            <span>ENG</span>
            <Image
              src="/images/arrow-down.svg"
              alt="Arrow down"
              width={16}
              height={16}
            />
          </div>

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
                alt="Heart"
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
