import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { InputGroup, Input, Button } from 'rsuite';
import SortUpIcon from '@rsuite/icons/SortUp';
import EmailIcon from '@rsuite/icons/Email';
import EyeCloseIcon from '@rsuite/icons/EyeClose';
import VisibleIcon from '@rsuite/icons/Visible';
import CharacterLockIcon from '@rsuite/icons/CharacterLock';

import styles from '../styles/Login.module.css';

const layout = {
  width: 300,
  marginBottom: 20,
};

const Login: NextPage = () => {
  const [visible, setVisible] = React.useState(false);
  const [isLogin, setLogin] = React.useState(true);

  const handleInputChangeChange = () => {
    setVisible(!visible);
  };

  const handleLoginChangeChange = () => {
    setLogin(!isLogin);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Login Page</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.ctxWrapper}>
          <InputGroup inside style={layout} className={styles.input}>
            <InputGroup.Addon>
              <EmailIcon />
            </InputGroup.Addon>
            <Input placeholder="Your Account" />
          </InputGroup>

          <InputGroup inside style={layout} className={styles.input}>
            <InputGroup.Addon>
              <CharacterLockIcon />
            </InputGroup.Addon>
            <Input
              placeholder="Your Password"
              type={visible ? 'text' : 'password'}
            />
            <InputGroup.Button onClick={handleInputChangeChange}>
              {visible ? <EyeCloseIcon /> : <VisibleIcon />}
            </InputGroup.Button>
          </InputGroup>

          <Button
            type="submit"
            className={styles.button}
            appearance="primary"
            style={{ width: 300 }}
            color="blue"
          >
            {isLogin ? '登录系统' : '注册账号'}
            <SortUpIcon
              style={{
                transform: 'rotate(90deg)',
                fontSize: '20px',
              }}
            />
          </Button>

          <div className={styles.tips} onClick={handleLoginChangeChange}>
            {isLogin ? 'Go To SignUp' : 'Go To Login'}{' '}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
