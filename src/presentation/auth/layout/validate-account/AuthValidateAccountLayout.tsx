import React from 'react';
import { LogoClassConnect } from '../../../shared/components';

interface AuthValidateAccountLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  message: string;
}

export const AuthValidateAccountLayout: React.FC<
  AuthValidateAccountLayoutProps
> = ({ children, title, subtitle, message }) => {
  return (
    <div className="validate-account">
      <div className="validate-account__container card">
        <div className="flex flex-center">
          <LogoClassConnect />
        </div>
        <h1 className='validate-account__title heading-secondary'>{ title }</h1>
        <div className="flex flex-center">
          <p className='validate-account__subtitle'>{subtitle}</p>
        </div>
        <p className='validate-account__message'>{message}</p>
        <div>
          {children}
        </div>
      </div>
      <div className="validate-account__banner validate-account__banner--left">
        <p className="validate-account__banner-message">ClassConnect</p>
      </div>
      <div className="validate-account__banner validate-account__banner--right">
        <p className="validate-account__banner-message">Validación</p>
      </div>
    </div>
  );
};
