import React from 'react';
import { Menu } from 'antd'

const Overview: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row"}}>
      <Menu>
        <Menu.Item key="1">Dashboard</Menu.Item>
        <Menu.Item key="2">Servers</Menu.Item>
        <Menu.Item key="3">Exchange Servers</Menu.Item>
        <Menu.Item key="4">Mapping</Menu.Item>
        <Menu.Item key="5">Messages</Menu.Item>
        <Menu.Item key="6">Notification</Menu.Item>
        <Menu.Item key="7">Reports</Menu.Item>
        <Menu.Item key="8">User Settings</Menu.Item>
      </Menu>
      <div>Overview</div>
    </div>
  );
};

export default Overview;