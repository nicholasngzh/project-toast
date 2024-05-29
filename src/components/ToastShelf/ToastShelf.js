import React from "react"

import Toast from "../Toast"
import styles from "./ToastShelf.module.css"

function ToastShelf({ toastList, onDeleteToast }) {
  return (
    <ol className={styles.wrapper}>
      {toastList.map((toastObject) => (
        <li className={styles.toastWrapper} key={toastObject.key}>
          <Toast
            dismiss={() => onDeleteToast(toastObject.key)}
            variant={toastObject.variant}
          >
            {toastObject.message}
          </Toast>
        </li>
      ))}
    </ol>
  )
}

export default ToastShelf
