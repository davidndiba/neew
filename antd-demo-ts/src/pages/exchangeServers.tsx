import { Layout, Card, Row, Col, Typography, Avatar, Table, Tag, Space } from 'antd';
import React from 'react';
import { Menu } from 'antd'
import { Progress } from 'antd'
import { Link } from 'react-router-dom'

const { Header, Footer, Sider, Content } = Layout;
const { Text } = Typography;

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_: any, { tags }: { tags?: string[] }) => (
      <>
        {tags && tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_: any, record: DataType) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const Server: React.FC = () => {
  return (
    <div>
      <Layout>
      <Sider>
      <Menu theme="dark" mode="inline">
        <h1>D2S Data Exchange</h1>
        <Menu.Item key="1">
          <Link to="/">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/server">Servers</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/exchangeServers">Exchange Servers</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/mapping">Mapping</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/messages">Messages</Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Link to="/notification">Notification</Link>
        </Menu.Item>
        <Menu.Item key="7">
          <Link to="/reports">Reports</Link>
        </Menu.Item>
        <Menu.Item key="8">
          <Link to="/user-settings">User Settings</Link>
        </Menu.Item>
      </Menu>
    </Sider>
        <Layout>
          <Header>
          <Text style={{color:"white"}} type="secondary">Home</Text>
         <Avatar src="https://joeschmoe.io/api/v1/random" />
          </Header>
          <Content
            className="site-layout-background"
            style={{
              padding: 34,
              margin: 0,
              minHeight: 500,
            }}
          >
            <div className="site-card-wrapper">
              <Row gutter={16}>
                <Col span={8}>
                  <Card title="Card 1" bordered={false}>
                    Card content
                  </Card>
                </Col>
                <Col span={8}>
                  <Card title="Card 2" bordered={false}>
                    Card content
                  </Card>
                </Col>
                <Col span={8}>
                  <Card title="Card 3" bordered={false}>
                    Card content
                  </Card>
                </Col>
              </Row>
              <Row gutter={16}> 
                <Col span={8}>
                    <Card title='Pie chart' bordered= {false}>
                      Card content
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title='Card 7' bordered= {false}>
                      Session A  <Progress percent={80} />
                      Session B  <Progress percent={60} />
                      Session C  <Progress percent={40} />
                      Session D  <Progress percent={20} />
                    </Card>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={8}>
                  <Card title="Card 4" bordered={false}>
                    Card content
                  </Card>
                </Col>
                <Col span={8}>
                  <Card title="Card 5" bordered={false}>
                    Card content
                  </Card>
                </Col>
                <Col span={8}>
                  <Card title="Card 6" bordered={false}>
                    Card content
                  </Card>
                </Col>
              </Row>
              <Table columns={columns} dataSource={data} />
            </div>
          </Content>
          <Footer>
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default Server;
