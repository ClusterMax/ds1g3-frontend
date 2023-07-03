import { createContext, useState } from "react";

const RecoverPasswordContext = createContext();

function RecoverPasswordProvider({ children }) {
  const [emailContext, setEmailContext] = useState("")

  const setEmailValue = (value) => {
    setEmailContext(value);
  };


  return (
    <RecoverPasswordContext.Provider value={{ emailContext, setEmailValue }}>
      {children}
    </RecoverPasswordContext.Provider>
  )
}

export { RecoverPasswordContext, RecoverPasswordProvider }