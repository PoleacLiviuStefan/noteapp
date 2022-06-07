import React from "react";
import styles from "./CheckStatus.module.css";
import { useState } from "react";
export default function checkstatus({ onClick }) {
  return (
    <div className={styles.container} onClick={onClick}>
      <button> &#10004; </button>
    </div>
  );
}
