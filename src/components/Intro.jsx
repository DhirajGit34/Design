import React from "react";
import styled from "styled-components";
import Woman from "../img/best.png";
import AnimatedShape from "./AnimatedShape";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;
const Right = styled.div`
  width: 40%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const Title = styled.h1`
  width: 60%;
  font-size: 60px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size:50px;
  }
`;
const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Info = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction:column;
  }
`;
const Button = styled.button`
  padding: 15px;
  font-size: 20px;
  background-color: darkblue;
  color: white;
  border-radius: 10px;
  border: none;
  font-weight: bold;
  letter-spacing: 2;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
  margin-bottom:20px;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;
const Phone = styled.span`
  color: #ff8fb1;
  font-weight: bold;
  font-size: 20px;
`;
const ContectText = styled.span`
  color: gray;
  font-size: 20px;
  margin-top: 5px;
`;
const Image = styled.img`
  width: 100%;
`;

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Adventures in creative page</Title>
        <Desc>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </Desc>
        <Info>
          <Button>Start A project</Button>
          <Contact>
            <Phone>Call Us (021) 198-268</Phone>
            <ContectText>For any query and concern</ContectText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src={Woman}></Image>
      </Right>
      <AnimatedShape />
    </Container>
  );
};

export default Intro;
