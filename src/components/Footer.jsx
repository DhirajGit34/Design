import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 10%;
  background-color: #111;
  color: lightgray;
`;
const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    padding: 10px;
  }
`;
const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`;
const ListItem = styled.li`
  margin-right: 20px;
  font-size: 20px;
  @media only screen and (max-width: 480px) {
    margin-right: 10px;
    font-size: 15px;
  }
`;
const CopyWrite = styled.span`
  font-size: 20px;
  @media only screen and (max-width: 480px) {
    font-size: 15px;
  }
`;
const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <ListItem>Guide</ListItem>
          <ListItem>Support</ListItem>
          <ListItem>Api</ListItem>
          <ListItem>Community</ListItem>
        </List>
        <CopyWrite>Dhiraj Deka ©</CopyWrite>
      </Wrapper>
    </Container>
  );
};

export default Footer;
