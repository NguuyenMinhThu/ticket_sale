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
import React, { useEffect, useState } from "react";
import "../stylePages/home.css";
import { Content, Header } from "antd/es/layout/layout";
import { firestore } from "../Firebase/firebase";

interface TicketData {
  STT: string;
  Numbersticket: string;
  Bookingcode: string;
  Checkin: string;
  dateexprot: string;
  dateuse: string;
  status: string;
}
const DSVe: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [usageStatus, setUsageStatus] = useState<string | null>(null);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);
  const [TicketList, setTicketList] = useState<TicketData[]>([]);

  useEffect(() => {
    const loadFirestoreData = async () => {
      try {
        const querySnapshot = await firestore.collection("ticket").get();
        const tickets: any[] = [];
        querySnapshot.forEach((doc: any) => {
          const data = doc.data();
          tickets.push(data);
        });
        setTicketList(tickets);
      } catch (error) {
        console.error("Lỗi khi load dữ liệu từ Firestore:", error);
      }
    };

    loadFirestoreData();
  }, []);


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

  const columns = [
    {
      title: "STT",
      dataIndex: "STT",
      key: "STT",
      width: 150,
    },
    {
      title: "Bookingcode",
      dataIndex: "Bookingcode",
      key: "Bookingcode",
      width: 150,
    },
    {
      title: "Số vé",
      dataIndex: "Numbersticket",
      key: "Numbersticket",
      width: 150,
    },
    {
      title: "Tình trạng sd",
      dataIndex: "status",
      key: "status",
      width: 200   ,
    },
    {
      title: "Ngày sử dụng",
      dataIndex: "dateuse",
      key: "dateuse",
      width: 200,
    },
    {
      title: "Ngày xuất vé",
      dataIndex: "dateexport",
      key: "dateexport",
      width: 200,
    },
    {
      title: "Checkin",
      dataIndex: "Checkin",
      key: "Checkin",
      width: 200,
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
                      right: "773px",
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
                        right: "565px",
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
                  dataSource={TicketList}
                  pagination={{
                    pageSize: 10,
                    pageSizeOptions: ["10", "20", "30"],
                  }}
                />
              </Row>
            </Card>
          </Content>
          <Modal
            title={
              <h1 style={{ fontSize: "24px", textAlign: "center" }}>Lọc vé</h1>
            }
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
