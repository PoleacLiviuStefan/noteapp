import React from "react";
import styles from "./DeleteNote.module.css";
import BasicAlert from "../Alerts/BasicAlert";
import { useState } from "react";

export default function DeleteNote({ onClick }) {
  return (
    <button type="button" className={styles.delete} onClick={onClick}>
      <span>&#129301;</span>
    </button>
  );
}
