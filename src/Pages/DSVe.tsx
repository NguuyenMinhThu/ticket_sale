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
  Modal,
  Row,
  Table,
  DatePicker,
  Radio,
  Checkbox,
} from "antd";
import Sider from "antd/es/layout/Sider";
import React, { useState } from "react";
import "../stylePages/home.css";
import { Content, Header } from "antd/es/layout/layout";
import { ColumnsType } from "antd/es/table";

const DSVe: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [usageStatus, setUsageStatus] = useState<string | null>(null);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);
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
      dataIndex: "sove",
      key: "sove",
      width: 150,
    },
    {
      title: "Tình trạng sử dụng",
      dataIndex: "sd",
      key: "sd",
      width: 200,
    },
    {
      title: "Ngày sử dụng",
      dataIndex: "dateUsed",
      key: "dateUsed",
      width: 200,
    },
    {
      title: "Ngày xuất vé",
      dataIndex: "dateReleased",
      key: "dateReleased",
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
      sove: 1111111,
      sd: "Het han",
      dateUsed: "2023-02-05", // Thêm giá trị ngày sử dụng
      dateReleased: "2023-03-13", // Thêm giá trị ngày xuất vé
      checkin: "Cổng 1",
    },
    {
      key: "2",
      namedn: "2",
      name: "ALT202120393",
      sove: 12121212,
      sd: "Het han",
      dateUsed: "2023-10-18", // Thêm giá trị ngày sử dụng
      dateReleased: "2023-12-30", // Thêm giá trị ngày xuất vé
      checkin: "Cổng 1",
    },
    {
      key: "3",
      namedn: "3",
      name: "ALT202102405",
      sove: 1212000,
      sd: "Het han",
      dateUsed: "2023-08-02", // Thêm giá trị ngày sử dụng
      dateReleased: "2023-09-13", // Thêm giá trị ngày xuất vé
      checkin: "Cổng 1",
    },
    {
      key: "4",
      namedn: "4",
      name: "ALT20210560",
      sove: 1212000,
      sd: "Het han",
      dateUsed: "2023-05-10", // Thêm giá trị ngày sử dụng
      dateReleased: "2023-10-20", // Thêm giá trị ngày xuất vé
      checkin: "Cổng 1",
    },
    {
      key: "5",
      namedn: "5",
      name: "ALT20215650",
      sove: 1212000,
      sd: "Het han",
      dateUsed: "2023-08-01", // Thêm giá trị ngày sử dụng
      dateReleased: "2023-09-30", // Thêm giá trị ngày xuất vé
      checkin: "Cổng 1",
    },
    {
      key: "6",
      namedn: "6",
      name: "ALT202100234",
      sove: 1212000,
      sd: "Het han",
      dateUsed: "2023-07-10", // Thêm giá trị ngày sử dụng
      dateReleased: "2023-09-20", // Thêm giá trị ngày xuất vé
      checkin: "Cổng 1",
    },
    {
      key: "7",
      namedn: "7",
      name: "ALT202123022",
      sove: 1212000,
      sd: "Het han",
      dateUsed: "2023-08-02", // Thêm giá trị ngày sử dụng
      dateReleased: "2023-09-13", // Thêm giá trị ngày xuất vé
      checkin: "Cổng 1",
    },
  ];
  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };
  const handleFilterClick = () => {
    setIsModalVisible(true);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };
  const handleUsageStatusChange = (e: any) => {
    setUsageStatus(e.target.value);
  };
  const handleCheckboxChange = (e: any) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedCheckboxes((prevCheckboxes) => [...prevCheckboxes, value]);
    } else {
      setSelectedCheckboxes((prevCheckboxes) =>
        prevCheckboxes.filter((checkbox) => checkbox !== value)
      );
    }
  };
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
                      right: "765px",
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
            <Card style={{ height: "500px", borderRadius: "10px" }}>
              <h1 style={{ fontSize: "30px" }}>Danh sách vé</h1>
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
                        right: "558px",
                        transform: "translateY(-50%)",
                      }}
                    >
                      {<SearchOutlined />}
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
                    onClick={handleFilterClick}
                  >
                    Lọc vé
                  </Button>
                </Col>
                <Col span={4}>
                  <Button
                    style={{
                      marginLeft: "50px",
                      borderColor: "orange",
                      color: "orange",
                    }}
                  >
                    Xuất file
                  </Button>
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
          <Modal
           title={<h1 style={{ fontSize: '24px', textAlign: 'center' }}>Lọc vé</h1>}
            visible={isModalVisible}
            onCancel={handleModalCancel}
            footer={[
              <Button
                style={{
                  borderColor: "orange",
                  color: "orange",
                  width: "160px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "0 auto",
                }}
                key="submit"
                onClick={handleModalCancel}
              >
                Lọc
              </Button>,
            ]}
          >
            <div>
              <Row>
                <Col span={12}>
                  <h4>Từ ngày</h4>
                  <DatePicker
                    style={{ marginLeft: 10, width: 130 }}
                    onChange={handleDateChange}
                  />
                </Col>
                <Col span={12}>
                  <h4>Đến ngày đi</h4>
                  <DatePicker
                    style={{ marginLeft: 10, width: 130 }}
                    onChange={handleDateChange}
                  />
                </Col>
              </Row>
              <Row style={{ marginTop: 16 }}>
                <Col span={24}>
                  <h4>Tình trạng sử dụng</h4>
                  <Radio.Group
                    onChange={handleUsageStatusChange}
                    value={usageStatus}
                  >
                    <Radio value={null}>Tất cả</Radio>
                    <Radio value="used">Đã sử dụng</Radio>
                    <Radio value="unused">Chưa sử dụng</Radio>
                    <Radio value="expired">Hết hạn</Radio>
                  </Radio.Group>
                </Col>
              </Row>
              <Row style={{ marginTop: 16 }}>
                <Col span={12}>
                  <h4>Cổng Check-in</h4>
                  <div>
                  <Checkbox
                    value="checkbox1"
                    checked={selectedCheckboxes.includes("checkbox1")}
                    onChange={handleCheckboxChange}
                  >
                    Tất Cả 
                  </Checkbox>
                  
                  </div>
                </Col>
              </Row>
              
            </div>
          </Modal>
        </Layout>
        
      </Layout>
    </>
  );
};

export default DSVe;
