import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { LoadingSpinner } from '../../../shared/components';
import { useAuth } from '../../../../application/hooks';
import logo from '../../../assets/img/logo-background-white.png';


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

  const { isLoading } = useAuth()

  useEffect(() => {
    localStorage.removeItem('classconnectTempEmail')
  }, [])

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

            {
              isLoading
              ? (
                <div className='u-py-10'>
                  <LoadingSpinner />
                </div>
              )
              : (
                <div className="auth-layout__children">
                  {children}
                  <p className="auth-layout__bottom">
                    {textNavigate}
                    <Link to={link}>{textLink}</Link>
                  </p>
                </div>
              )
            }

          </section>
        </div>

        <section className="auth-layout-slider">Slider</section>
      </div>
    </div>
  );
};
