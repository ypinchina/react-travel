import style from "./App.module.css";
import { Headers, Footers } from "./components";
import { Row, Col } from "antd";
function App() {
  return (
    <div className={style.App}>
      <Headers />
      <div className={style["page-content"]}>
        <Row style={{ marginTop: 20 }}>
          <Col span={6}>
            <div style={{backgroundColor: 'blue'}}>多重菜单</div>
          </Col>
          <Col span={18}>
            <div style={{backgroundColor: 'red'}}>走马灯</div>
          </Col>
        </Row>
      </div>
      <Footers />
    </div>
  );
}

export default App;
