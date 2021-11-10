import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import TokenStorage from '../../common/token';

import { Button, Radio } from 'antd';
import { Layout } from 'antd';

const Headerlayout = ({ token, getToken }) => {
  const tokenStorage = new TokenStorage();

  const { Header, Footer, Sider, Content } = Layout;
  const goToLoginpage = () => {
    Router.push('/login');
  };
  const goToRegisterpage = () => {
    Router.push('/register');
  };

  const onLoginOut = (e) => {
    e.preventDefault();
    tokenStorage.clearToken();
    getToken(null); //index token state 변경
  };

  return (
    <>
      <div className="header-wrap">
        <Header className="header">
          <h1 className="logo">
            {/* <img src="../../public/images/logo.png" alt="삼삼오오 로고" /> */}
            {/* 이미지 경로 잡는 방법 src에서 /기입하면 public으로 인식함 */}
            <img src="/images/logo.png" alt="삼삼오오 로고" />
          </h1>
          <nav className="navigation">
            <ul>
              <li>
                {token ? (
                  <Button
                    className="logout"
                    type="primary"
                    onClick={onLoginOut}
                  >
                    로그아웃
                  </Button>
                ) : (
                  <Button
                    className="login"
                    type="primary"
                    onClick={goToLoginpage}
                  >
                    로그인
                  </Button>
                )}
              </li>
              <li>
                <Button
                  className="register"
                  type="primary"
                  onClick={goToRegisterpage}
                >
                  회원가입
                </Button>
              </li>
              <li>
                <Button className="new-writing" type="primary">
                  새글쓰기
                </Button>
              </li>
            </ul>
          </nav>
        </Header>
      </div>
    </>
  );
};

export default Headerlayout;
