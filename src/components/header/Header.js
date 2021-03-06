import React from "react";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css["header"]}>
      <ul>
        <li>HW20 - Dad Jokes (Google Cloud function) {}</li>
        <li>
          <a href="https://github.com/bentzen-andy/hw20-dad-jokes-cloud-function">
            Github
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
