import React from "react";
import styles from "./BasicAlert.module.css";
import { useState } from "react";

export default function BasicAlert({ title, onAccept, hideAlert }) {
  const [isActive, setIsActive] = useState(true);

  return (
    <div
      className={styles.container}
      style={isActive ? { display: "block" } : { display: "none" }}
    >
      <h2>{title}</h2>
      <div>
        <p>Are you sure?</p>
        <p>Don't give up so fast.</p>
      </div>
      <div className={styles.controls}>
        <button
          onClick={() => {
            onAccept();
            hideAlert();
          }}
        >
          YES
        </button>
        <button type="button" onClick={() => hideAlert()}>
          NOP
        </button>
      </div>
    </div>
  );
}
