import React, { useState } from 'react';
import { ContainerOutlined, HomeOutlined, SettingOutlined,ContactsOutlined,UnorderedListOutlined,InboxOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Trang Chủ', '1', <HomeOutlined />),
  getItem('Quản Lý Vé', '2', <ContactsOutlined />),

  getItem('Đổi soát vé', 'sub1', <ContainerOutlined />, [
    getItem('Danh sách sự kiện', '3', <UnorderedListOutlined />),
    getItem('Quản lý thiết bị', '4', <InboxOutlined />),
  ]),
  getItem('Cài đặt', 'sub2', <SettingOutlined />, [
    getItem('Gói dịch vụ', '7'),

  ]),
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const App: React.FC = () => {
  const [openKeys, setOpenKeys] = useState(['sub1']);

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{ width: 256 }}
      items={items}
    />
    
  );
};

export default App;