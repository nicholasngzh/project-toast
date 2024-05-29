import React from "react"

import Button from "../Button"

import styles from "./ToastPlayground.module.css"

import Toast from "../Toast"

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"]

function ToastPlayground() {
  const [message, setMessage] = React.useState("")
  const [selectedVariant, setSelectedVariant] = React.useState(
    VARIANT_OPTIONS[0]
  )
  const [showToast, setShowToast] = React.useState(false)

  const handlePopToast = (event) => {
    event.preventDefault()
    console.log(message)
    console.log(selectedVariant)
    setShowToast(true)
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {showToast && (
        <Toast
          message={message}
          variant={selectedVariant}
          dismiss={() => {
            setShowToast(false)
          }}
        ></Toast>
      )}

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
