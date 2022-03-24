import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import axios from 'axios';
import { InputGroup, Input, Button, toaster, Notification } from 'rsuite';
import SortUpIcon from '@rsuite/icons/SortUp';
import EmailIcon from '@rsuite/icons/Email';
import EyeCloseIcon from '@rsuite/icons/EyeClose';
import VisibleIcon from '@rsuite/icons/Visible';
import CharacterLockIcon from '@rsuite/icons/CharacterLock';

import styles from '../styles/Login.module.css';

type MessageType = 'info' | 'success' | 'warning' | 'error';

const message = (config: {
  type: MessageType;
  title: string;
  content: string;
}) => {
  return (
    <Notification type={config.type} header={config.title} closable>
      <div style={{ minWidth: 200, minHeight: 40 }}>{config.content}</div>
    </Notification>
  );
};

const layout = {
  width: 300,
  marginBottom: 20,
};

const Login: NextPage = () => {
  const [visible, setVisible] = React.useState(false);
  const [isLogin, setLogin] = React.useState(true);
  const [mail, setMail] = React.useState('');
  const [pass, setPass] = React.useState('');

  const handleInputChangeChange = () => {
    setVisible(!visible);
  };

  const handleLoginChangeChange = () => {
    setLogin(!isLogin);
  };

  const handlePassChange = (val: string) => {
    setPass(val.trim());
  };

  const handleMailChange = (val: string) => {
    setMail(val.trim());
  };

  const handleSignUp = () => {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

    return axios
      .post(`${baseURL}/account/register`, {
        email: mail,
        password: pass,
      })
      .then((res: any) => {
        if (res.data.code == 200) {
          toaster.push(
            message({ type: 'success', title: '提示', content: '注册成功' }),
            {
              placement: 'topEnd',
            },
          );
        }
      });
  };

  const handleLogin = () => {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

    return axios
      .post(`${baseURL}/account/login`, {
        email: mail,
        password: pass,
      })
      .then((res: any) => {
        console.info(res);
        if (res.data.code == 200) {
          toaster.push(
            message({ type: 'success', title: '提示', content: '登录成功' }),
            {
              placement: 'topEnd',
            },
          );
        }
      });
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
            <Input
              placeholder="Your Account"
              value={mail}
              onChange={handleMailChange}
            />
          </InputGroup>

          <InputGroup inside style={layout} className={styles.input}>
            <InputGroup.Addon>
              <CharacterLockIcon />
            </InputGroup.Addon>
            <Input
              placeholder="Your Password"
              type={visible ? 'text' : 'password'}
              value={pass}
              onChange={handlePassChange}
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
            onClick={isLogin ? handleLogin : handleSignUp}
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
