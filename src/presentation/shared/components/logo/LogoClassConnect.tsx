import React from 'react';
import logoWhite from '../../../assets/img/logo-background-white.png'

interface LogoClassConnectProps {
  width?: number
}

export const LogoClassConnect: React.FC<LogoClassConnectProps> = ({ width }) => {
  return (
    <div className="logo__box">
      <img
        style={{ width }}
        className="logo__img"
        src={logoWhite}
        alt="ClassConnect Logo Bg white"
      />
      <p className="logo__name">
        Class<span>Connect</span>
      </p>
    </div>
  );
};
