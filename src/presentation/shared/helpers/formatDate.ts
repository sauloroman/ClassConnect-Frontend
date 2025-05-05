export const formatDate = ( 
  utcString: Date, 
  locale: string = 'es-MX', 
  options: Intl.DateTimeFormatOptions = {}
): string => {
  const dateUTC = new Date( utcString )
  return dateUTC.toLocaleString( locale, { ...options} )
}