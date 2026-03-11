import { Layout, Typography } from "antd";
const { Footer } = Layout;
export const Footers: React.FC = () => {
  return (
    <Layout>
      <Footer>
        <Typography.Title level={3} style={{ textAlign: "center" }}>
          &copy; 2023 React 旅游网. All rights reserved.
        </Typography.Title>
      </Footer>
    </Layout>
  );
};
