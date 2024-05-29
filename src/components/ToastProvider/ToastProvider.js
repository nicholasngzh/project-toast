import React from "react"

export const ToastContext = React.createContext()

function ToastProvider({ children }) {
  const handleDeleteToast = (key) => {
    const newToastList = [...toastList].filter(
      (toastObject) => toastObject.key !== key
    )
    setToastList(newToastList)
  }

  const handleAddToast = (newToast) => {
    const newToastList = [...toastList]
    newToastList.push(newToast)
    setToastList(newToastList)
  }

  const [toastList, setToastList] = React.useState([])

  return (
    <ToastContext.Provider
      value={{ toastList, setToastList, handleDeleteToast, handleAddToast }}
    >
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider