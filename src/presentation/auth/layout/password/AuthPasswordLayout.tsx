import React from 'react';
import { useNavigatePage } from '../../../hooks';
import { LogoClassConnect } from '../../../shared/components';

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
            <LogoClassConnect />
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
