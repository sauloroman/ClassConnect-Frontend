import React from 'react';
import { LogoClassConnect } from '../../../shared/components';
import { useNavigatePage } from '../../../hooks';

interface AuthPasswordLayoutProps {
  children: React.ReactNode;
  showReturnButton?: boolean;
  colorWave: string;
}

export const AuthPasswordLayout: React.FC<AuthPasswordLayoutProps> = ({
  children,
  showReturnButton,
  colorWave
}) => {

  const { returnPage } = useNavigatePage()

  return (
    <div className="auth-password">
      { showReturnButton && <button onClick={ returnPage } className='auth-password__return btn btn--grad-2'>&larr;</button>}
      <div className="auth-password__container card">
        <div className="auth-password__logo">
          <LogoClassConnect />
        </div>
        <div className="auth-password__content">
          { children }
        </div>
      </div>
      <div className="auth-password__bottom" style={{ 
        backgroundColor: `${colorWave}`
      }}>
        <p>Recupera tu contraseña</p>
        <p>ClassConnect</p>
      </div>
    </div>
  );
};
