import React, { useState } from "react";
import styled from "styled-components";
import Man from "../img/tab2.png";
import MiniCard from "./MiniCard";
import Play from "../img/play.png";
import Video1 from "../video/video1.mp4";

const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  width: 50%;
  position: relative;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const Image = styled.img`
  display: ${(props) => props.open && "none"};
  height: 100vh;
  margin-left: 100px;
`;
const Video = styled.video`
  display: ${(props) => !props.open && "none"};
  height: 300px;
  position: absolute;
  top: 0;
  bottom: 0;
  border-radius: 5px;
  right: 0;
  margin: auto;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Right = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    padding: 20px;
  }
`;
const Title = styled.h1``;
const Desc = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: #555;
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;
const Button = styled.button`
  display: flex;
  align-item: center;
  width: 150px;
  border: none;
  background-color: darkblue;
  border-radius: 10px;
  cursor: pointer;
  color: #fff;
  padding: 15px;
  font-size: 15px;
  margin-top: 50px;
`;
const PlayImg = styled.img`
  width: 20px;
  margin-right: 10px;
`;
const Model = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;
const CloseButton = styled.button`
  position: absolute;
  background-color: #fff;
  padding: 5px;
  border: none;
  font-size: 20px;
  border-radius: 5px;
  top: 24%;
  right: 5px;
`;

const Service = () => {
  // for image
  const [open, setOpen] = useState(false);
  //for video in smallscreen
  const smallScreen = window.screen.width <= 480 ? true : false;

  return (
    <Container>
      <Left>
        <Image open={open} src={Man}></Image>
        <Video open={open} autoPlay loop controls muted src={Video1} />
      </Left>
      <Right>
        <Wrapper>
          <Title>Simple Process Start</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum
            lectus vitae dui porta tristique. Integer feugiat eros sit amet diam
            consectetur, id luctus purus luctus.Phasellus sed porttitor justo.
            Nunc fermentum dolor ut scelerisque aliquam. Cras aliquam enim sit
            amet velit rutrum, ac pellentesque enim euismod.{" "}
          </Desc>
          <CardContainer>
            <MiniCard />
            <MiniCard />
            <MiniCard />
          </CardContainer>
          <Button onClick={() => setOpen(true)}>
            <PlayImg src={Play}></PlayImg>How it works
          </Button>
        </Wrapper>
      </Right>
      {smallScreen && open && (
        <Model>
          <Video open={open} autoPlay loop controls muted src={Video1} />
          <CloseButton onClick={() => setOpen(false)}>Close</CloseButton>
        </Model>
      )}
    </Container>
  );
};
export default Service;
