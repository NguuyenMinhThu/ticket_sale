import {
    BellOutlined,
    HomeOutlined,
    LaptopOutlined,
    MailOutlined,
    ProfileOutlined,
    SearchOutlined,
    SettingOutlined,
    CalendarOutlined
  } from "@ant-design/icons";
  import { Button, Card, Col, Layout, Menu, Row, Table, DatePicker } from "antd";
  import Sider from "antd/es/layout/Sider";
  import React,{ useState }  from "react";
  import "../stylePages/home.css";
  import { Content, Header } from "antd/es/layout/layout";
  import { ColumnsType } from "antd/es/table";
  
  const Trangchu: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    
    return (
      <>
        <Layout>
          <Sider
            className="menubar"
            width={200}
            style={{ backgroundColor: "Menu", height: "100vh" }}
          >
            <img className="logo" src="/asset/image/logo1.png" alt="" />
            <Menu theme="light" className="itembar">
              <Menu.Item
                className="menu-item"
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                <HomeOutlined style={{ marginRight: "8px" }} />
                Trang chủ
              </Menu.Item>
              <Menu.Item
                className="menu-item"
                onClick={() => {
                  window.location.href = "/test";
                }}
              >
                <LaptopOutlined style={{ marginRight: "8px" }} />
                Quản lý vé
              </Menu.Item>
              <Menu.Item
                className="menu-item"
                onClick={() => {
                  window.location.href = "/ve";
                }}
              >
                <ProfileOutlined style={{ marginRight: "8px" }} />
                Đổi soát vé
              </Menu.Item>
              <Menu.Item
                className="menu-item"
                onClick={() => {
                  window.location.href = "/caidat";
                }}
              >
                <SettingOutlined style={{ marginRight: "8px" }} />
                Cài đặt
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: "white" }}>
              <Row gutter={20} justify="start" align="middle">
                <Col span={20} >
                  <div style={{ position: "relative" }}>
                    <input
                      style={{
                        width: "25%",
                        fontSize: "20px",
                        paddingRight: "20px",
                      }}
                      placeholder="Search"
                    />
                    <span
                      style={{
                        position: "absolute",
                        top: "50%",
                        right: "775px",
                        transform: "translateY(-50%)",
                      }}
                    >
                      { <SearchOutlined />}
                    </span>
                  </div>
                </Col>
               
                 <i style={{marginRight:'10px', fontSize:'24px'}}> <MailOutlined /></i>
               
                 <i style={{marginRight:'10px', fontSize:'24px'}}> <BellOutlined /></i>
               
                  <img
                    className="img-avatar"
                    src="/asset/image/logo1.png"
                    alt=""
                  />
               
              </Row>
            </Header>
            <Content>
              <Card style={{ height: "500px", borderRadius: "10px" }}>
                <h1 style={{ fontSize: "27px" }}>Thống Kê</h1>
                <Row>
                  <Col span={15}>
                    <div style={{ position: "relative" }}>
                      <h2>Doanh thu</h2>
                    </div>
                  </Col>
                  <Col span={5}>
                  <DatePicker
                    style={{ marginLeft: "240px", width: "50%" }}
                    placeholder="Tháng 4, 2021"
                    suffixIcon={
                      <CalendarOutlined
                        style={{ color: "orange", fontSize: "16px" }}
                      />
                    }
                    onChange={(date: any) => setSelectedDate(date)}
                  />
                  </Col>
                </Row>
                
              </Card>
            </Content>
          </Layout>
        </Layout>
      </>
    );
  };
  
  export default Trangchu;
  