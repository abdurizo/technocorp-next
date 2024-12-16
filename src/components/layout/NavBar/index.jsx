import styles from "./NavBar.module.css";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";

import Language from "@/components/Language";
import Logo from "@/img/logo.svg";
import PhoneIcon from "@/icon/phone.svg";
import SearchIcon from "@/icon/search.svg";
import SiteView from "@/components/SiteView/index";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const Links = [
  {
    href: "/",
    title: "home_page",
  },
  {
    href: "/about",
    title: "about",
  },
  {
    href: "/centerstructure",
    title: "center",
  },
  {
    href: "/servise",
    title: "services",
  },
  {
    href: "/projects",
    title: "projects",
  },
  {
    href: "/news",
    title: "news",
  },
  {
    href: "/contactus",
    title: "contactus",
  },
];

function NavBar() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [search, setSearch] = useState(false);
  const [toggleLanguage, setToggleLanguage] = useState(false);
  const router = useRouter();
  const { locale } = router;
  const pathname = usePathname();
  const handelAddClass = () => {
    setToggle(!toggle);
  };

  const handelSetToggleLanguage = () => {
    setToggleLanguage(!toggleLanguage);
  };
  const handelAddClassSearch = (e) => {
    setSearch(!search);
  };

  useEffect(() => {
    if (menuOpen) {
      // Когда меню открыто, блокируем прокрутку
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      // Когда меню закрыто, восстанавливаем прокрутку
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav className={styles.nav}>
      <Link href="/" locale={locale} className={styles.logo}>
        <Image src={Logo} width={231} height={41} alt="icon glasses" />
      </Link>

      <div
        className={`${styles.burger} ${menuOpen ? styles.burger_open : ""}`}
        // className={styles.burger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={menuOpen ? styles.burger_open : ""}></span>
        <span className={menuOpen ? styles.burger_open : ""}></span>
        <span className={menuOpen ? styles.burger_open : ""}></span>
      </div>

      <ul
        className={`${styles.nav_list} ${
          menuOpen ? styles.nav_list_open : styles.nav_list_closed
        }`}
      >
        {Links.map((item) => {
          const isActiveParent =
            pathname === item.href || pathname.startsWith(item.href + "/");

          return (
            <li>
              <Link
                href={item.href}
                locale={locale}
                className={classNames(
                  isActiveParent &&
                    "bg-gradient-to-l from-white to-[#C6C6C6] text-black rounded-[10px] py-2 px-5 transition-colors",
                  styles.nav_item
                )}
              >
                {t(item.title)}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className={styles.nav_icon}>
        <SiteView />

        <div
          className={`${styles.icon_animation} check`}
          onClick={handelAddClass}
        >
          {!toggleLanguage && (
            <div className={styles.number}>+998 (55) 501-43-00</div>
          )}
          <div>
            <a href="tel:+998555014300">
              <Image
                src={PhoneIcon}
                width={50}
                height={50}
                alt="icon glasses"
                className={styles.icon}
              />
            </a>
          </div>
        </div>
        <div className={styles.icon_animation}>
          <input
            type="text"
            className={`${styles.search} ${
              search ? styles.search_active : ""
            } `}
            placeholder="search"
          />
          <div onClick={handelAddClassSearch}>
            <Image
              src={SearchIcon}
              width={50}
              height={50}
              alt="icon glasses"
              className={styles.icon}
            />
          </div>
        </div>

        <Language
          toggle={toggleLanguage}
          handelAddClass={handelSetToggleLanguage}
        />
      </div>
    </nav>
  );
}

export default NavBar;
