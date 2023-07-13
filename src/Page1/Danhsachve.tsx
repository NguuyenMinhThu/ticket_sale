import {
  BellOutlined,
  HomeOutlined,
  LaptopOutlined,
  MailOutlined,
  MessageOutlined,
  ProfileOutlined
} from "@ant-design/icons";
import { Button, Card, Col, Layout, Menu, Row, Table } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";
import "../stylePages/home.css";
import { Content, Header } from "antd/es/layout/layout";
import { ColumnsType } from "antd/es/table";

// interface DataType {
//   key: string;
//   name: string;
//   number: number; // Thêm trường number cho số vé
//   age: number;
//   tags: string[];
//   dateUsed: string; // Thêm trường dateUsed cho ngày sử dụng
//   dateReleased: string; // Thêm trường dateReleased cho ngày xuất vé
//   in: string,
// }

const DSVe: React.FC = () => {
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

  //Bảng table
  const columns: ColumnsType<any> = [
    {
      title: "STT",
      dataIndex: "namedn",
      key: "namedn",
      width: 150,
    },
    {
      title: "Booking code",
      dataIndex: "name",
      key: "name",
      width: 200,
    },
    {
      title: "Số vé",
      dataIndex: "phone",
      key: "phone",
      width: 150,
    },
    {
      title: "Tình trạng sử dụng",
      dataIndex: "email",
      key: "email",
      width: 200,
    },
    {
      title: "Ngày sử dụng",
      dataIndex: "role",
      key: "role",
      width: 200,
    },
    {
      title: "Ngày xuất vé",
      dataIndex: "condition",
      key: "condition",
      width: 200,
    },
    {
      title: "Cổng check-in",
      dataIndex: "checkin",
      key: "check",
      width: 200,
    },
    // {
    //   title: " ",
    //   dataIndex: "updateAction",
    //   key: "updateAction",
    //   width: 100,
    //   render: (_text: any, record: UserData) => (
    //     <>
    //       <Button onClick={() => handleUpdate(record.id)}>Cập nhật</Button>
    //     </>
    //   ),
    // },
  ];
  const data = [
    {
      key: "1",
      namedn: "1",
      name: "ALT20210501",
      phone: 1111111,
      email: "Het han",
      role: "2023-02-05", // Thêm giá trị ngày sử dụng
      condition: "2023-03-13", // Thêm giá trị ngày xuất vé
      checkin: "Cong 1",
    },
    {
      key: "2",
      namedn: "2",
      name: "ALT20210501",
      phone: 12121212,
      email: "Het han",
      role: "2023-10-18", // Thêm giá trị ngày sử dụng
      condition: "2023-12-30", // Thêm giá trị ngày xuất vé
      checkin: "Cong 1",
    },
    {
      key: "3",
      namedn: "3",
      name: "ALT20210501",
      phone: 1212000,
email: "Het han",
      role: "2023-08-02", // Thêm giá trị ngày sử dụng
      condition: "2023-09-13", // Thêm giá trị ngày xuất vé
      checkin: "Cong 1",
    },
  ];
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
                window.location.href = "/dashboard";
              }}
            >
              <HomeOutlined />
              Trang chủ
            </Menu.Item>
            <Menu.Item
              className="menu-item"
              onClick={() => {
                window.location.href = "/thietbi";
              }}
            >
              <LaptopOutlined className="icon-sider" />
              Quản lý vé
            </Menu.Item>
            <Menu.Item
              className="menu-item"
              onClick={() => {
                window.location.href = "/doisoatve";
              }}
            >
              <MessageOutlined className="icon-sider" />
              Đổi soát vé
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "white" }}>
            <Row gutter={20} justify="end" align="middle">
              <Col span={18}>
                <input
                  style={{ marginTop: "10px" }}
                  className="input-chung"
                  type="text"
                  placeholder="search" 
                />
              </Col>
              <Col span={2}>
                <MailOutlined />
              </Col>
              <Col span={2}>
                <BellOutlined />
              </Col>
              <Col span={2}>
                <img
                  className="img-avatar"
                  src="/asset/image/logo1.png"
                  alt=""
                />
              </Col>
            </Row>
          </Header>
          <Content>
            <Card style={{ height: "645px", borderRadius: "20px" }}>
              <h1>Danh sách vé</h1>
              <Row>
                <Col span={15}>
                  <input className="input-chung" type="text" />
                </Col>
                <Col span={5}>
                  <Button style={{ marginLeft: "240px" }}>Lọc vé</Button>
                </Col>
                <Col span={4}>
                  <Button style={{ marginLeft: "50px" }}>Xuất file</Button>
                </Col>
              </Row>
              <Row style={{ marginTop: "30px" }}>
                <Table
                  columns={columns}
                  // className="custom-table"
                  dataSource={data}
                  pagination={{
                    pageSize: 10,
                    pageSizeOptions: ["10", "20", "30"],
}}
                />
              </Row>
            </Card>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default DSVe;