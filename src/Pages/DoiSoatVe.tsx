import {
  BellOutlined,
  HomeOutlined,
  LaptopOutlined,
  MailOutlined,
  ProfileOutlined,
  SearchOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Layout,
  Menu,
  Radio,
  Row,
  Table,
  DatePicker,
} from "antd";
import Sider from "antd/es/layout/Sider";
import React, { useState } from "react";
import "../stylePages/home.css";
import { Content, Header } from "antd/es/layout/layout";
import { ColumnsType } from "antd/es/table";

interface DataType {
  key: string;
  name: string;
  number: number;
  tags: string[];
  dateUsed: string;
  in: string;
}

const DoiSoatVe: React.FC = () => {
  const [doiSoatStatus, setDoiSoatStatus] = useState("");

  const handleDoiSoatStatusChange = (e: any) => {
    setDoiSoatStatus(e.target.value);
  };

  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={() => (window.location.href = "/vaitro")}>
        Quản lý vai trò
      </Menu.Item>
      <Menu.Item key="2" onClick={() => (window.location.href = "/taikhoan")}>
        Quản lý tài khoản
      </Menu.Item>
      <Menu.Item
        key="3"
        onClick={() => (window.location.href = "/nhatkynguoidung")}
      >
        Nhật kí người dùng
      </Menu.Item>
    </Menu>
  );

  // Bảng table
  const columns: ColumnsType<DataType> = [
    {
      title: "STT ",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Số vé",
      dataIndex: "number",
      key: "number",
    },
    {
      title: "Tên lọai vé",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Ngày sử dụng",
      dataIndex: "dateUsed",
      key: "dateUsed",
    },
    {
      title: "Cổng check-in",
      dataIndex: "in",
      key: "in",
    },
  ];
  const data: DataType[] = [
    {
      key: "1",
      name: "ALT20210501",
      number: 12,
      tags: ["Hết Hạn"],
      dateUsed: "2023-07-01", // Thêm giá trị ngày sử dụng
      in: "ALT20210501",
    },
    {
      key: "2",
      name: "Jim Green",
      number: 42,
      tags: ["Hết Hạn"],
      dateUsed: "2023-07-02",
      in: "ALT20210501",
    },
    {
      key: "3",
      name: "Joe Black",
      number: 32,
      tags: ["Hết Hạn"],
      dateUsed: "2023-07-03",
      in: "ALT20210501",
    },
  ];

  return (
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
            <Col span={20}>
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
                  {<SearchOutlined />}
                </span>
              </div>
            </Col>

            <i style={{ marginRight: "10px", fontSize: "24px" }}>
              {" "}
              <MailOutlined />
            </i>

            <i style={{ marginRight: "10px", fontSize: "24px" }}>
              {" "}
              <BellOutlined />
            </i>

            <img className="img-avatar" src="/asset/image/logo1.png" alt="" />
          </Row>
        </Header>
        <Content>
          <Row gutter={25}>
            <Col span={16}>
              <Card style={{ height: "550px", borderRadius: "10px" }}>
                <h1 style={{ fontSize: "30px" }}>Đổi Soát Vé</h1>
                <Row>
                  <Col span={12}>
                    <div style={{ position: "relative" }}>
                      <input
                        style={{
                          width: "100%",
                          fontSize: "20px",
                          paddingRight: "30px",
                        }}
                        placeholder="Search"
                      />
                      <span
                        style={{
                          position: "absolute",
                          top: "50%",
                          right: "10px",
                          transform: "translateY(-50%)",
                        }}
                      >
                        {<SearchOutlined />}
                      </span>
                    </div>
                  </Col>
                  <Col span={12}>
                    <Button
                      style={{
                        marginLeft: "100px",
                        backgroundColor: "orange",
                        color: "white",
                      }}    
                    >
                      Chốt vé soát
                    </Button>
                  </Col>
                </Row>
                <Row style={{ marginTop: "50px" }}>
                  <Table
                    columns={columns}
                    dataSource={data}
                    pagination={{
                      pageSize: 10,
                      pageSizeOptions: ["10", "20", "30"],
                    }}
                  />
                </Row>
              </Card>
            </Col>
            <Col span={8}>
              <Card style={{ height: "550px", borderRadius: "10px" }}>
                <h4 style={{ fontSize: "30px" }}>Lọc Vé</h4>
                <p>Tình trạng đối soát</p>
                <Radio.Group
                  onChange={handleDoiSoatStatusChange}
                  value={doiSoatStatus}
                >
                  <p>
                    <Radio value="all">Tất cả</Radio>
                  </p>
                  <p>
                    <Radio value="doiSoat">Đang đối soát</Radio>
                  </p>
                  <Radio value="chuaDoiSoat">Chưa đối soát</Radio>
                </Radio.Group>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <p style={{ marginRight: "10px" }}>Loại vé:</p>
                  <p>Vé Cổng</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "15px",
                  }}
                >
                  <p>Từ Ngày:</p>
                  <p>
                    <DatePicker
                      style={{ width: "100%" }}
                      placeholder="dd/mm/yy"
                    />
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "15px",
                  }}
                >
                  <p>Đến Ngày:</p>
                  <p>
                    <DatePicker
                      style={{ width: "100%" }}
                      placeholder="dd/mm/yy"
                    />
                  </p>
                </div>
                <div>
                  <Button style={{
                      marginLeft: "230px",
                      borderColor: "orange",
                      color: "orange",
                    }} >Lọc</Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DoiSoatVe;
