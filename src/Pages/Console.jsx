// ConsolePage.js
import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;
const Console = () => {
  // const fetchMe = async () => {
  //   try {
  //     const response = await fetch('http://localhost:8000/console/');

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }

  //     const data = await response.json();
  //     console.log(data); // Log the entire response to see its structure
  //   } catch (error) {
  //     // Handle errors
  //     setError(error.message);
  //   }
  // };

  return (
    <div>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            items={[
              { key: '1', title: 'Home' },
              { key: '2', title: 'Posts' },
              { key: '3', title: 'Categories' },
            ]}
          ></Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb
            style={{ margin: '16px 0' }}
            items={[{ content: 'Home' }, { content: 'Console' }]}
          />
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Console</Breadcrumb.Item>
          </Breadcrumb> */}
          <div
            style={{
              background: '#fff',
              padding: 24,
              minHeight: 280,
            }}
          >
            {/* Add your content here */}
            <h1>Welcome to TommyBlog Console!</h1>
            {/* Add more components and features as needed */}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          TommyBlog ©2023
        </Footer>
      </Layout>
    </div>
  );
};

export default Console;
