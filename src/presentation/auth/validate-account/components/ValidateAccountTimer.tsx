import React, { useEffect, useRef, useState } from 'react';
import { useTimer } from 'react-timer-hook';

let quantityMinutes = 2

export const ValidateAccountTimer: React.FC = () => {

  const linkRef = useRef<HTMLAnchorElement>(null)
  const timerRef = useRef<HTMLParagraphElement>(null)

  const [expiryDate, setExpiryDate] = useState<Date>(() => {
    const time = new Date()
    time.setSeconds( time.getSeconds() + quantityMinutes * 60 )
    return time
  })

  const { minutes, seconds, restart } = useTimer({ expiryTimestamp: expiryDate });

  const onResetTimer = () => {
    if ( !linkRef.current || !timerRef.current ) return

    linkRef.current.classList.add('u-hidden')
    linkRef.current.classList.remove('u-show')
    timerRef.current.classList.add('u-show')
    timerRef.current.classList.toggle('u-hidden')

    quantityMinutes *= 2
    const newTime = new Date();
    newTime.setSeconds(newTime.getSeconds() + quantityMinutes * 60 );

    setExpiryDate( newTime )
    restart( newTime )
  }

  useEffect(() => {
    if ( minutes === 0 && seconds === 0 && timerRef.current && linkRef.current ) {
      linkRef.current.classList.add('u-show')
      linkRef.current.classList.remove('u-hidden')
      timerRef.current.classList.add('u-hidden')
      timerRef.current.classList.remove('u-show')
    }
  }, [seconds])

  return (
    <div>
      <div className="flex flex-between">
        <p ref={ timerRef } className='u-show'>
          Puedes volver mandar el correo en: <br />
          <span className='u-strong'>{minutes.toString().padStart(2, '0')}: {seconds.toString().padStart(2, '0')}</span>
        </p>
        <a onClick={onResetTimer} ref={ linkRef } href="#" className="validate-account-message__no u-hidden">
          Reenviar el correo
        </a>
      </div>
    </div>
  );
};
