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
      <div className="validate-account__logo">
        <LogoClassConnect />
      </div>
      <div className="validate-account__background">
        <p className="validate-account__banner">ClassConnect</p>
      </div>
      <div className="validate-account__container">
        <div className="validate-account__content">
          <h1 className="heading-secondary u-text-center">{ title }</h1>
          <div className="flex flex-center">
            <p className="validate-account__strong">{ subtitle }</p>
          </div>
          <p className="validate-account__text">{ message }</p>
        </div>
        {children}
      </div>
    </div>
  );
};
