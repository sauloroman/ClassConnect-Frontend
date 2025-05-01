import React from 'react';
import { LogoClassConnect } from '../../../shared/components';
import { ClassConnectAccordenMenu, ClassConnectInfoUser, ClassConnectMenu } from '../../';

export const ClassConnectHeader: React.FC = () => {
  return (
    <header className="classconnect-header">
      <div className="classconnect-header__left">
        <ClassConnectMenu />
        <LogoClassConnect width={60} />
      </div>
      <div className="classconnect-header__right">
        <ClassConnectInfoUser />
        <ClassConnectAccordenMenu />
      </div>
    </header>
  );
};
