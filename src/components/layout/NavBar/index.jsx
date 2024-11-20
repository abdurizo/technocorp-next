import styles from "./NavBar.module.css";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
    title: "Bosh sahifa",
  },
  {
    href: "/about",
    title: "about",
  },
  {
    href: "/centerstructure",
    title: "Markaz",
  },
  {
    href: "#",
    title: "Xizmatlar",
  },
  {
    href: "#",
    title: "Loyihalar",
  },
  {
    href: "/contactus",
    title: "Bog‘lanish",
  },
];

function NavBar() {
  const { i18n, t } = useTranslation();
  const [toggle, setToggle] = useState(true);
  const [search, setSearch] = useState(false);
  const router = useRouter();
  const { locale } = router;
  const pathname = usePathname();
  const handelAddClass = () => {
    setToggle(!toggle);
  };
  const handelAddClassSearch = (e) => {
    setSearch(!search);
  };

  return (
    <nav className={styles.logo}>
      <Link href="/" locale={locale}>
        <Image src={Logo} width={231} height={41} alt="icon glasses" />
      </Link>
      <ul className={styles.nav_list}>
        {Links.map((item) => (
          <li>
            <Link
              href={item.href}
              locale={locale}
              className={classNames(
                item.href === pathname &&
                  "bg-gradient-to-l from-white to-[#C6C6C6] text-black rounded-[10px] py-2 px-5 transition-colors"
              )}
            >
              {t(item.title)}
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.nav_icon}>
        <SiteView />
        <div
          className={`${styles.icon_animation} check`}
          onClick={handelAddClass}
        >
          <div className={styles.number}>+998 (55) 501-43-00</div>
          <div>
            <Image
              src={PhoneIcon}
              width={"auto"}
              height={"auto"}
              alt="icon glasses"
            />
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
              width={"auto"}
              height={"auto"}
              alt="icon glasses"
            />
          </div>
        </div>
        <Language />
      </div>
    </nav>
  );
}

export default NavBar;
