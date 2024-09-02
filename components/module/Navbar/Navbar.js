import React, { useEffect, useState } from "react";
import Link from "next/link";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

//style
import styles from "@/styles/navbar.module.css";
import { useRouter } from "next/router";

function Navbar() {
  const [search, setSearch] = useState("");

  const route = useRouter();

  const clickHandler = () => {
    if (!search) {
      alert("enter search text");
    } else {
      route.push(`/search?q=${search}`);
    }
  };
  useEffect(() => {
    setSearch(route.query.q);
    if (!route.query.q) {
      setSearch("");
    }
  }, [route.query.q]);

  const keyDownHandler = (e) => {
    if (e.keyCode !== 13) return;
    route.push(`/search?q=${search}`);
  };

  return (
    <div className={`container-fluid p-0 ${styles.nav_bar}`}>
      <nav
        className={`${styles.navbar} ${styles.navbar_expand_lg} bg-none navbar-dark py-3`}
      >
        <Link href="/" className={`${styles.navbar_brand} px-lg-4 m-0`}>
          <h1 className="m-0 display-4 text-uppercase text-white">
            Next-Coffee
          </h1>
        </Link>
        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`${styles.search_input}`}
            onKeyDown={keyDownHandler}
          />
          <span className={`${styles.search_icon}`} onClick={clickHandler}>
            <FontAwesomeIcon icon={Icons.faSearch} />
          </span>
        </div>
        <div
          className={`collapse ${styles.navbar_collapse} justify-content-between`}
          id="navbarCollapse"
        >
          <div className={`${styles.navbar_nav} ml-auto p-4`}>
            <Link
              href="/"
              className={`${styles.nav_link} ${styles.active_nav_link}`}
            >
              Home
            </Link>
            <Link href="/about" className={`${styles.nav_link} `}>
              About
            </Link>
            <Link href="/services" className={`${styles.nav_link} `}>
              Service
            </Link>
            <Link href="/menu" className={`${styles.nav_link} `}>
              Menu
            </Link>

            <div className={`${styles.dropdown}`}>
              <Link
                href="#"
                className={`${styles.nav_link} ${styles.dropdown_toggle}`}
                data-toggle="dropdown"
              >
                Pages
              </Link>
              <div className={`${styles.dropdown_menu}`}>
                <Link
                  href="/reservation"
                  className={`${styles.nav_link} ${styles.dropdown_item}`}
                >
                  Reservation
                </Link>
                <Link
                  href="/testimonial"
                  className={`${styles.nav_link} ${styles.dropdown_item}`}
                >
                  Testimonial
                </Link>
              </div>
            </div>
            <Link href="/contact" className={`${styles.nav_link} `}>
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
