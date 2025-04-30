import React from 'react';
import { AuthPasswordLayout } from '../../layout/password/AuthPasswordLayout';
import { PasswordFormEmail } from '../components/PasswordFormEmail';
import { useAuth } from '../../../../application/hooks';
import { LoadingSpinner } from '../../../shared/components';

export const AuthForgotPassword: React.FC = () => {
  const { isLoading } = useAuth();

  return (
    <AuthPasswordLayout showReturnButton colorWave='#4568DC'>
      <h1 className="heading-secondary">
        Recupera tu Contraseña
      </h1>
      <p>
        Si olvidaste tu contraseña, no te preocupes, coloca tu email y recibirás
        un correo electrónico con los pasos para crear una nueva.
      </p>

      {!isLoading ? (
        <PasswordFormEmail />
      ) : (
        <div className="u-my-8">
          <LoadingSpinner />
        </div>
      )}
    </AuthPasswordLayout>
  );
};
