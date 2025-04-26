import React, { useMemo } from 'react';
import logo from '../../assets/img/logo-background-white.png';
import { Link } from 'react-router-dom';

interface AuthLayoutProps {
  children: React.ReactNode;
  pageName: string;
  title: string;
  subtitle: string;
  text: string;
  textNavigate: string;
  textLink: string;
  link: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  pageName,
  title,
  subtitle,
  text,
  textNavigate, 
  textLink,
  link
}) => {

  const animationName = useMemo(() => {
    return pageName === 'login' 
    ? 'u-animate-moveToLeft'
    : 'u-animate-moveToRight'
  }, [pageName])

  return (
    <div className="auth-layout">
      <div className="auth-layout__grid">

        <div className='auth-layout__content-box'>
          <section className={`auth-layout__content ${animationName}`}>
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

            <header className="auth-layout__header">
              <h1 className="heading-primary">
                {title} <br /> {subtitle}
              </h1>
              <p className="auth-layout__text">{text}</p>
            </header>

            <div className="auth-layout__children">{children}</div>

            <p className="auth-layout__bottom">
              {textNavigate}
              <Link to={link}>{textLink}</Link>
            </p>
          </section>
        </div>

        <section className="auth-layout-slider">Slider</section>
      </div>
    </div>
  );
};
