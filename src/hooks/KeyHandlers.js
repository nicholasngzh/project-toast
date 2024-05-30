import React from "react"

function useEscapeKey(funcToCall) {
  React.useEffect(() => {
    const handleEscapeKeyDown = (event) => {
      if (event.code === "Escape") {
        funcToCall()
      }
    }
    window.addEventListener("keydown", handleEscapeKeyDown)

    return () => {
      window.removeEventListener("keydown", handleEscapeKeyDown)
    }
  }, [funcToCall])
}

export default useEscapeKey
