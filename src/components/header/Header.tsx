import React from "react";
import logo from "../../assets/logo.svg";
import style from "./Header.module.css";
import { Layout, Typography, Input, Space, Button, Dropdown, Menu } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
const { Header } = Layout;
export const Headers: React.FC = () => {
  return (
    <div className={style["app-header"]}>
      <div className={style["top-header"]}>
        <div>
          <Typography.Text>让旅游更幸福</Typography.Text>
          <Space.Compact style={{ marginLeft: 15 }}>
            <Button icon={<GlobalOutlined />}>语言</Button>
            <Dropdown
              menu={{
                items: [
                  { key: "1", label: "中文" },
                  { key: "2", label: "English" },
                ],
              }}
            >
              <Button icon={<GlobalOutlined />} />
            </Dropdown>
          </Space.Compact>
        </div>

        <Space className={style["button-group"]}>
          <Button>登录</Button>
          <Button>注册</Button>
        </Space>
      </div>
      <Layout>
        <Header className={style.Header}>
          <img src={logo} alt="" className={style["App-logo"]} />
          <Typography.Title level={3} className={style.Title}>
            React 旅游网
          </Typography.Title>
          <Input.Search
            placeholder="请输入旅游目的地、主题、或关键字"
            className={style.Search}
          />
        </Header>
      </Layout>
      <Menu
        mode="horizontal"
        className={style["main-menu"]}
        items={[
          { key: "1", label: "首页" },
          { key: "2", label: "周末游" },
          { key: "3", label: "主题游" },
          { key: "4", label: "自由行" },
          { key: "5", label: "私家团" },
          { key: "6", label: "游轮" },
          { key: "7", label: "酒店+景点" },
          { key: "8", label: "当地玩乐" },
          { key: "9", label: "定制玩乐" },
          { key: "10", label: "游学" },
        ]}
      />
    </div>
  );
};
