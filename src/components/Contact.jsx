import React from "react";
import styled from "styled-components";
import Map from "../img/map.png";
import Phone from "../img/phone.png";
import Send from "../img/send.png";

const Container = styled.div`
  height: 90%;
  background: url("https://www.toptal.com/designers/subtlepatterns/uploads/double-bubble-outline.png");
`;
const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    height: 50%;
    margin-right: 0;
  }
`;
const RightForm = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    height: 50%;
  }
`;
const Title = styled.h1`
  margin-left: 125px;
  margin-top: 0;
  margin-bottom: 50px;
  @media only screen and (max-width: 480px) {
    margin: 20px;
  }
`;
const Input = styled.input`
  width: 200px;
  padding: 15px;
  border-radius: 5px;
  @media only screen and (max-width: 480px) {
    padding: 2px;
    margin: 2px;
  }
`;
const TextArea = styled.textarea`
  width: 200px;
  height: 60%;
  padding: 15px;
  border-radius: 5px;
  @media only screen and (max-width: 480px) {
    padding: 2px;
    margin-top: 10px;
  }
`;
const Button = styled.button`
  border: none;
  background-color: darkblue;
  border-radius: 10px;
  cursor: pointer;
  color: #fff;
  padding: 15px;
  font-size: 15px;
  margin-top: 20px;
  @media only screen and (max-width: 480px) {
    padding: 5px;
    font-size: 14px;
  }
`;
const FormContainer = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
const AddressItem = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;
const Icon = styled.img`
  width: 20px;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    width: 15px;
  }
`;
const Text = styled.span`
  font-size: 20px;
  margin-right: 15px;
  @media only screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>
            Questions? <br /> Let's Get In Touch
          </Title>
          <Form>
            <LeftForm>
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" />
              <Input placeholder="Subject" />
            </LeftForm>
            <RightForm>
              <TextArea placeholder="Your Message" />
              <Button>Send</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
          <AddressItem>
            <Icon src={Map} />
            <Text>123 Mangaldai Park.., Assam, India</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Phone} />
            <Text>+91 749 6035 562</Text>
            <Text>+91 458 2365 619</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Send} />
            <Text>spprt@gmail.com</Text>
            <Text>spprt@gmail.com</Text>
          </AddressItem>
        </AddressContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;
