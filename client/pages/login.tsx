import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Login.module.css';

import { Panel, InputGroup, Input, Button } from 'rsuite';

const layout = {
  width: 300,
  marginBottom: 10,
};

const Login: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login Page</title>
      </Head>

      <main className={styles.main}>
        <Panel header="Panel title" bordered className={styles.panelItem}>
          <InputGroup inside style={layout}>
            <InputGroup.Addon>1</InputGroup.Addon>
            <Input />
          </InputGroup>

          <InputGroup inside style={layout}>
            <InputGroup.Addon>2</InputGroup.Addon>
            <Input />
          </InputGroup>

          <Button type="submit">登录系统</Button>
        </Panel>
      </main>
    </div>
  );
};

export default Login;
