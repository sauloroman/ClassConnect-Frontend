export const isPasswordValid = ( password: string ) => {

  const lengthCheck = password.length >= 8 
  const hasNumber = /[0-9]/.test( password )
  const hasUppercase = /[A-Z]/.test( password )

  return lengthCheck && hasNumber && hasUppercase

}