export const getLocalStorage = ( nameLocalStorage: string ) => {
  return JSON.parse( localStorage.getItem( nameLocalStorage )!)
}