import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-right: 50px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    margin-right: 0;
    margin-bottom: 10px;
    padding: 10px;
  }
`;
const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Price = styled.span`
  font-weight: bold;
  font-size: 50px;
  @media only screen and (max-width: 480px) {
    font-size: 30px;
  }
`;
const Type = styled.button`
  padding: 10px;
  font-size: 20px;
  margin: 10px 0;
  border: 1.5px solid crimson;
  color: crimson;
  background-color: white;
  border-radius: 30px;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const List = styled.ul`
  list-style: none;
`;
const ListItem = styled.li`
  margin: 30px 0;
  @media only screen and (max-width: 480px) {
    margin: 10px;
    font-size: 12px;
  }
`;
const Button = styled.button`
  padding: 10px;
  border: none;
  background-color: darkblue;
  font-size: 16px;
  font-weight: bold;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    padding: 5px;
    font-size:12px;
  }
`;

const PriceCut = ({ price, type }) => {
  return (
    <Container>
      <PriceContainer>
        $<Price>{price}</Price>/month
      </PriceContainer>
      <Type>{type} Plan</Type>
      <List>
        <ListItem>Exclusive Support</ListItem>
        <ListItem>Exclusive Support</ListItem>
        <ListItem>Exclusive Support</ListItem>
        <ListItem>Exclusive Support</ListItem>
      </List>
      <Button>Enroll Now</Button>
    </Container>
  );
};

export default PriceCut;
