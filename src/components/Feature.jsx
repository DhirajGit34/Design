import React from "react";
import styled from "styled-components";
import App from "../img/app5.png";
import AnimatedShape from "./AnimatedShape";

const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;
const Left = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const Right = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
  width: 100%;
  }
`;
const Image = styled.img`
  width: 80%;
`;
const Title = styled.span`
  font-size: 70px;
  @media only screen and (max-width: 480px) {
  font-size:50px;
  }
`;
const SubTitle = styled.span`
  font-size: 24px;
  color: #333;
  font-style: italic;
  margin-top: 30px;
`;
const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`;
const Button = styled.button`
  width: 150px;
  font-size: 20px;
  padding: 15px 20px;
  background-color: darkblue;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 20px;
`;

const Feature = () => {
  return (
    <Container>
      <Left>
        <Image src={App}></Image>
      </Left>
      <Right>
        <Title>
          <b>good</b>design
          <br />
          <b>good</b>business
        </Title>
        <SubTitle>we know that good design means good business</SubTitle>
        <Desc>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </Desc>
        <Desc>
          It is a long established fact that a reader will be distracted.
        </Desc>
        <Button>Learn More</Button>
      </Right>
      <AnimatedShape />
    </Container>
  );
};

export default Feature;
