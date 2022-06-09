import { Layout, Menu, Avatar, Button } from "antd";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Todos from "./Todos";

const LogoImg = styled.img`
  height: 58px;
  width: 58px;
`;

const { Header, Content, Sider } = Layout;
const items = ["전공", "자격증"].map((name, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    label: name,
    color: "black",
    children: [
      `${name}캡스톤디자인 II`,
      `${name}지능형시스템`,
      `${name}UNIX시스템`,
      `${name}정보보호`,
    ].map((sub) => {
      return {
        key: sub,
        label: sub,
      };
    }),
  };
});

const MainPage = () => (
  <Layout style={{ height: "100%" }}>
    <Header
      className="header"
      style={{ background: "white", padding: "0 10px", borderBottom: '1px solid black' }}
    >
      <div className="logo">
        <Link to="/" style={{ float: "left" }}>
          <LogoImg src={require("../logo.png")} alt="logo" />
        </Link>
        <Link to="/" style={{ float: "left" }}>
          <p
            style={{
              float: "left",
              color: "black",
              fontFamily: "나눔스퀘어 Bold",
            }}
          >
            To-Do it
          </p>
        </Link>
      </div>
      <p style={{ float: "left", marginLeft: "100px" }}>
        김지우 회원님, 반갑습니다.
      </p>
      <Avatar
        size={60}
        src={require("../avatarimg.png")}
        style={{ float: "right", marginRight: "30px" }}
      />
      <Button
        type="primary"
        shape="round"
        style={{
          float: "right",
          marginTop: "15px",
          marginRight: "30px",
          borderColor: "black",
          background: "#FFE699",
          color: "black",
        }}
      >
        To-Do 만들기
      </Button>
    </Header>
    <Layout style={{ marginTop: "15px" }}>
      <Sider width={200} className="site-layout-background">
        <p style={{ background: "#F3F3F3", marginBottom: "0px" }}>
          김지우님의 To-Do
        </p>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{
            background: "#F3F3F3",
            height: "100%",
            borderRight: 0,
          }}
          items={items}
        />
      </Sider>
      <Layout
        style={{
          padding: "0 24px 24px",
          background: "white",
        }}
      >
        <Todos />
      </Layout>
    </Layout>
  </Layout>
);

export default MainPage;
