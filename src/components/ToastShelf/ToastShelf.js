import React from "react"

import Toast from "../Toast"
import styles from "./ToastShelf.module.css"
import { ToastContext } from "../ToastProvider/ToastProvider"

function ToastShelf({ onDeleteToast }) {
  const { toastList } = React.useContext(ToastContext)

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
