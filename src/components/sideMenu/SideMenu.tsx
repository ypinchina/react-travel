import React from "react";
import styles from "./SideMenu.module.css";
import { sideMenuList } from "./mockup";
import { Menu } from "antd";
import { GoldOutlined } from "@ant-design/icons";
export const SideMenu: React.FC = () => {
  return (
    <Menu mode="vertical" className={styles["side-menu"]}>
      {sideMenuList.map((m, index) => (
        <Menu.SubMenu
          key={`side-menu-${index}`}
          title={
            <span>
              <GoldOutlined />
              {m.title}
            </span>
          }
        >
          {m.subMenu.map((sm, smIndex) => (
            <Menu.SubMenu key={`sub-menu-${smIndex}`} title={sm.title}>
              {sm.subMenu.map((ssm, ssmIndex) => (
                <Menu.Item key={`sub-sub-menu-${ssmIndex}`}>{ssm}</Menu.Item>
              ))}
            </Menu.SubMenu>
          ))}
        </Menu.SubMenu>
      ))}
    </Menu>
  );
};
