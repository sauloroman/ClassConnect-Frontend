import { useEffect, useState } from "react";

export const useValidatePassword = ( password: string, confirmPassword: string ) => {
  const [errorDifferentPasswords, setErrorDifferentPasswords] = useState<string>('')
  
  useEffect(() => {
    if (confirmPassword !== password) {
      setErrorDifferentPasswords('Las contraseñas no son iguales')
    } else {
      setErrorDifferentPasswords('')
    }
  }, [confirmPassword]);

  return { errorDifferentPasswords }
}