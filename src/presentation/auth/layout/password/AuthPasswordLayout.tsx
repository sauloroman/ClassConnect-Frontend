import React from 'react';
import logo from '../../../assets/img/logo-background-white.png';
import { useNavigatePage } from '../../../hooks';

interface AuthPasswordLayoutProps {
  children: React.ReactNode;
  showReturnButton?: boolean;
}

export const AuthPasswordLayout: React.FC<AuthPasswordLayoutProps> = ({
  children,
  showReturnButton = true,
}) => {
  const { returnPage } = useNavigatePage();

  return (
    <div className="auth-password">
      <div className="auth-password__grid">
        <div className="auth-password__content">
          <header className="auth-password__header">
            {showReturnButton && (
              <button onClick={returnPage} className="btn btn--grad-2">
                &larr;
              </button>
            )}
            <div className="auth-layout__logo-box">
              <img
                className="auth-layout__logo"
                src={logo}
                alt="ClassConnect Logo Bg white"
              />
              <p className="auth-layout__name">
                Class<span>Connect</span>
              </p>
            </div>
          </header>
          {children}
        </div>
        <div className="auth-password__banner">
          <p className="auth-password__message">ClassConnect</p>
        </div>
      </div>
    </div>
  );
};
