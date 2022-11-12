import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 50px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
// logo styling
const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline crimson;
`;
const Menu = styled.ul`
  display: flex;
  list-style: none;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
`;

const Button = styled.button`
  border: 2px solid white;
  font-size: 20px;
  padding: 5px 12px;
  background-color: #00adb5;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Design</Logo>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>Features</MenuItem>
            <MenuItem>Service</MenuItem>
            <MenuItem>Pricing</MenuItem>
            <MenuItem>Contect</MenuItem>
          </Menu>
        </Left>
        <Button>JOIN NOW</Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
