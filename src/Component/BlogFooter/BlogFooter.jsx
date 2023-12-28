// Footer.js
import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const BlogFooter = () => {
  return (
    <Footer
      style={{ textAlign: 'center', backgroundColor: '#f0f2f5' }}
    >
      <p>© 2023 Your Blog Name. All rights reserved.</p>
    </Footer>
  );
};

export default BlogFooter;
