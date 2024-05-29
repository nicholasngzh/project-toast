import React from "react"

import Button from "../Button"

import styles from "./ToastPlayground.module.css"

import Toast from "../Toast"
import ToastShelf from "../ToastShelf/ToastShelf"

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"]

function ToastPlayground() {
  const [message, setMessage] = React.useState("")
  const [selectedVariant, setSelectedVariant] = React.useState(
    VARIANT_OPTIONS[0]
  )
  const [toastList, setToastList] = React.useState([])

  const handlePopToast = (event) => {
    event.preventDefault()
    const newToast = {
      message: message,
      variant: selectedVariant,
      key: crypto.randomUUID(),
    }
    const newToastList = [...toastList]
    newToastList.push(newToast)
    setToastList(newToastList)
    setMessage("")
    setSelectedVariant(VARIANT_OPTIONS[0])
  }

  const handleDeleteToast = (key) => {
    const newToastList = [...toastList].filter(
      (toastObject) => toastObject.key !== key
    )
    setToastList(newToastList)
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toastList={toastList} onDeleteToast={handleDeleteToast} />

      <form className={styles.controlsWrapper} onSubmit={handlePopToast}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              value={message}
              onChange={(event) => {
                setMessage(event.target.value)
              }}
              className={styles.messageInput}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variant, idx) => (
              <label key={idx} htmlFor={`variant-${variant}`}>
                <input
                  id={`variant-${variant}`}
                  type="radio"
                  name="variant"
                  value={variant}
                  checked={selectedVariant === variant}
                  onChange={() => {
                    setSelectedVariant(variant)
                  }}
                />
                {variant}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={handlePopToast}>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ToastPlayground
