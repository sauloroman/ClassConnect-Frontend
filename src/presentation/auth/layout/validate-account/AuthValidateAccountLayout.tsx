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
      {children}
    </div>
  );
};
