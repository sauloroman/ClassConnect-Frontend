import React from 'react';
import logoWhite from '../../../assets/img/logo-background-white.png'

export const LogoClassConnect: React.FC = () => {
  return (
    <div className="logo__box">
      <img
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
