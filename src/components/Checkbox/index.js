import React from "react";
import styles from "./styles.module.css";

export default React.memo(({ checked, onClick }) => {
  return (
    <div
      style={{ display: "flex", flexGrow: 0, alignItems: "center" }}
      onClick={onClick}
    >
      <input
        type="checkbox"
        className={styles.checkboxInput}
        defaultChecked={checked}
      />
      <span className={styles.checkboxCustomizedInput}>
        <span
          className={styles.check}
          style={{
            display: checked ? "block" : "none",
          }}
        ></span>
      </span>
    </div>
  );
});
