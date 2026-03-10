// 修改 App.tsx
import React from "react";
import logo from "./logo.svg";
import style from "./App.module.css";
import { Layout, Typography, Input } from 'antd'
const { Header } = Layout

function App() {
  return (
    <div className={style.App}>
      <Layout>
        <Header className={style.Header}>
          <img src={logo} alt="" className={style['App-logo']} />
          <Typography.Title level={3} className={style.Title}>React 旅游网</Typography.Title>
          <Input.Search 
            placeholder="请输入旅游目的地、主题、或关键字" 
            className={style.Search}
          />
        </Header>
      </Layout>
    </div>
  );
}

export default App;