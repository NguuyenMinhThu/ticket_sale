import React, { useState } from "react";
import {
  BellOutlined,
  HomeOutlined,
  LaptopOutlined,
  MailOutlined,
  ProfileOutlined,
  SearchOutlined,
  SettingOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Layout, Menu, Row, Table, Modal , Input,DatePicker, Checkbox, Select,} from "antd";
import Sider from "antd/es/layout/Sider";
import "../stylePages/home.css";
import { Content, Header } from "antd/es/layout/layout";
import { ColumnsType } from "antd/es/table";

const Caidat: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false); 
  const [isChecked, setIsChecked] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("");
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
  const columns: ColumnsType<any> = [
    {
      title: "STT",
      dataIndex: "namedn",
      key: "namedn",
      width: 150,
    },
    {
      title: "Mã gói",
      dataIndex: "sove",
      key: "sove",
      width: 200,
    },
    {
      title: "Tên gói vé",
      dataIndex: "name",
      key: "name",
      width: 200,
    },
    {
      title: "Ngày áp dụng",
      dataIndex: "dateUsed",
      key: "dateUsed",
      width: 200,
    },
    {
      title: "Ngày hết hạn",
      dataIndex: "dateReleased",
      key: "dateReleased",
      width: 200,
    },
    {
      title: "Giá vé(VND/Vé)",
      dataIndex: "sd",
      key: "sd",
      width: 200,
    },
    {
      title: "Giá Combo(VND/Combo)",
      dataIndex: "checkin",
      key: "check",
      width: 250,
    },
    {
      title: "Tình Trạng",
      dataIndex: "ins",
      key: "ins",
      width: 200,
    },
    {
      title: "",
      dataIndex: "ntn",
      key: "ntn",
      width: 200,
    },
  ];
  const data = [
    {
      key: "1",
      namedn: "1",
      name: "Gói Gia đình ",
      sove: 1111111,
      sd: "90.000 VND",
      dateUsed: "2023-02-05", // Thêm giá trị ngày sử dụng
      dateReleased: "2023-03-13", // Thêm giá trị ngày xuất vé
      checkin: "678.000 VND/4 vé",
      ins: "Còn hàng",
      ntn: (
        <>
          <EditOutlined style={{ color: "orange", marginRight: "8px" }} />
          <span style={{ color: "orange" }}>Cập nhật</span>
        </>
      ),
    },
    {
      key: "2",
      namedn: "2",
      name: "Gói dự kiện",
      sove: 12121212,
      sd: "100.000 VND",
      dateUsed: "2023-10-18", // Thêm giá trị ngày sử dụ+ng
      dateReleased: "2023-12-30", // Thêm giá trị ngày xuất vé
      checkin: "500.000 VND/ 3 vé",
      ins: "Còn hàng",
      ntn: (
        <>
          <EditOutlined style={{ color: "orange", marginRight: "8px" }} />
          <span style={{ color: "orange" }}>Cập nhật</span>
        </>
      ),
    },
  ];

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    // Xử lý khi nhấn OK trong modal
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleCheckboxChange = (e: any) => {
    setIsChecked(e.target.checked);
  };
  const handleStatusChange = (value: string) => {
    setSelectedStatus(value);
  };
  return (
    <>
      <Layout>
        <Sider
          className="menubar"
          width={200}
          style={{ backgroundColor: "Menu", height: "100vh" }}
        >
          {/* Nội dung Sidebar */}
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
                    <SearchOutlined />
                  </span>
                </div>
              </Col>
              <Col>
                <i style={{ marginRight: "10px", fontSize: "24px" }}>
                  <MailOutlined />
                </i>
                <i style={{ marginRight: "10px", fontSize: "24px" }}>
                  <BellOutlined />
                </i>
                <img
                  className="img-avatar"
                  src="/asset/image/logo1.png"
                  alt=""
                />
              </Col>
            </Row>
          </Header>
          <Content>
            <Card style={{ height: "500px", borderRadius: "10px" }}>
              <h1 style={{ fontSize: "30px" }}>Danh sách gói vé</h1>
              <Row>
                <Col span={15}>
                  <div style={{ position: "relative" }}>
                    <input
                      style={{
                        width: "30%",
                        fontSize: "20px",
                        paddingRight: "30px",
                      }}
                      placeholder="Search"
                    />
                    <span
                      style={{
                        position: "absolute",
                        top: "50%",
                        right: "567px",
                        transform: "translateY(-50%)",
                      }}
                    >
                      <SearchOutlined />
                    </span>
                  </div>
                </Col>
                <Col span={5}>
                  <Button
                    style={{
                      marginLeft: "230px",
                      borderColor: "orange",
                      color: "orange",
                    }}
                  >
                    Xuất file
                  </Button>
                </Col>
                <Col span={4}>
                  <Button
                    style={{
                      marginLeft: "50px",
                      backgroundColor: "orange",
                      color: "white",
                      
                    }}
                    onClick={showModal}
                  >
                    Thêm gói vé
                  </Button>
                </Col>
              </Row>
              <Row style={{ marginTop: "30px" }}>
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
          </Content>
        </Layout>
      </Layout>
      {/* Modal */}
      <Modal
         title={<h1 style={{ fontSize: '24px', textAlign: 'center' }}>Thêm gói vé</h1>}
         visible={isModalVisible}
         onOk={handleOk}
         onCancel={handleCancel}
         centered
         okButtonProps={{ style: { backgroundColor: 'orange', color: 'white', width: '100px', textAlign: 'center' } }}
         cancelButtonProps={{ style: { backgroundColor: 'orange', color: 'white', width: '100px', textAlign: 'center' } }}
       >
        <h4>Tên gói vé</h4>
        <Input style={{ width: '50%' }} placeholder="Nhập tên gói vé" />
        <h4>Ngày áp dụng</h4>
        <DatePicker style={{ width: '25%' }} placeholder="dd/mm/yy" /> <DatePicker style={{ width: '25%' }} placeholder="dd/mm/yy" />
       
        <h4>Giá vé áp dụng</h4>
        <Checkbox checked={isChecked} onChange={handleCheckboxChange}>
          Vé lẻ(vnd/vé) với giá <Input style={{width:'100px',backgroundColor: 'Silver'}} placeholder="Giá vé" /> / vé
        </Checkbox>
        <p>
        <Checkbox checked={isChecked} onChange={handleCheckboxChange}>
          Combo vé với giá <Input style={{width:'100px',backgroundColor: 'Silver'}} placeholder="Giá vé" /> / <Input style={{width:'100px',backgroundColor: 'Silver'}} placeholder="Giá vé"/> vé
        </Checkbox>
        </p>
        <div>
          <h4>Tình trạng:</h4>
          <p>
          <select style={{ width: '120px', height: '30px'}}>
            <option value="all">Đang áp dụng</option>
            <option value="used">Đã sử dụng</option>
            <option value="notUsed">Chưa sử dụng</option>
          </select></p>
        </div>
      </Modal>
    </>
  );
};

export default Caidat;
