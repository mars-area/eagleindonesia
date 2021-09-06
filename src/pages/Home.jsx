import React from "react";
import styled from "styled-components";
import EternalImage from "../asset/img/shoes/eagle eternal.jpg";
import CartIcon from "../asset/icon/cart.svg";
import HeroImage from "../asset/img/hero.jpg";

const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 75px 1rem 1rem 1rem;
  background-image: url(${HeroImage});
  background-size: cover;

  @media (max-width: 640px) {
    flex-direction: column;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.75);
  }
`;

const HeaderLeft = styled.div`
  z-index: 2;
  max-width: 50%;

  @media (max-width: 640px) {
    max-width: 100%;
    padding: 1rem 0;
  }
`;

const Categ = styled.span`
  color: var(--color-dagray);
`;

const Merk = styled.h1`
  font-size: 3rem;
  color: var(--color-secondary);

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Desc = styled.p`
  letter-spacing: 0.03rem;
  color: var(--color-dagray);
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0.875rem 1.5rem;
  margin: 1rem 0 0 0;
  font-family: "Cardo", serif;
  font-size: 0.875rem;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  background-color: var(--color-ligray);
  color: var(--color-dagray);
  cursor: pointer;
  box-shadow: 0 10px 15px -10px rgb(0 0 0 / 25%);
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: var(--color-primary);
    color: var(--color-secondary);
  }
`;

const Icon = styled.img`
  height: 0.875rem;
  margin: 0 0.5rem 0 0;
`;

const HeaderRight = styled.div`
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;

  @media (max-width: 640px) {
    width: 100%;
  }
`;

const Card = styled.div`
  max-height: 400px;
  width: 250px;
  border-radius: 20px;
  border: 1px solid #e5e5e5;
  overflow: hidden;
  background-color: var(--color-primary);
  transition: all 0.3s ease-in-out;

  &:hover {
    margin-left: 0.5rem;
  }
`;

const CardImageWrapper = styled.div``;

const CardImage = styled.img`
  width: 250px;
`;

const CardBody = styled.div`
  padding: 1rem;
`;

const CardTitle = styled.h3`
  font-family: "Oswald", serif;
  color: var(--color-dagray);
  font-size: 1.25rem;
  text-align: center;
  text-transform: uppercase;
  border-bottom: 1px solid var(--color-medgray);
`;

const CardPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0.25rem 0 0 0;
`;

const CardPriceDiscount = styled.span`
  font-family: "Oswald";
  font-size: 1.15rem;
  font-weight: 500;
  color: var(--color-secondary);
`;

const CardPrice = styled.span`
  margin-left: 0.5rem;
  font-family: "Oswald";
  font-size: 0.875rem;
  font-weight: 300;
  text-decoration: line-through;
  color: var(--color-medgray);
`;

const CardAction = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const CardButton = styled.button`
  border: 1px solid var(--color-gray);
  color: var(--color-primary);
  background: var(--color-dagray);
  padding: 0.5rem 1.25rem;
  border-radius: 5px;
  margin: 0.25rem 0 0 0;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: var(--color-secondary);
  }
`;

function Home() {
  return (
    <Header>
      <HeaderLeft>
        <Categ>Top Comfort, The Best Looks</Categ>
        <Merk>Eternal Eagle Shoes</Merk>
        <Desc>
          Running shoes for men and women with the best features that support
          your sports performance.
        </Desc>
        <Button>
          <Icon src={CartIcon} alt="cart-icon" /> Add to Cart
        </Button>
      </HeaderLeft>
      <HeaderRight>
        <Card>
          <CardImageWrapper>
            <CardImage src={EternalImage} alt="shoes-img" />
          </CardImageWrapper>
          <CardBody>
            <CardTitle>Eternal Eagle Shoes</CardTitle>
            <CardPriceWrapper>
              <CardPriceDiscount>Rp199.900</CardPriceDiscount>
              <CardPrice>Rp299.900</CardPrice>
            </CardPriceWrapper>
            <CardAction>
              <CardButton>Buy</CardButton>
            </CardAction>
          </CardBody>
        </Card>
      </HeaderRight>
    </Header>
  );
}

export default Home;
export {
  Card,
  CardImageWrapper,
  CardImage,
  CardBody,
  CardTitle,
  CardPriceWrapper,
  CardPriceDiscount,
  CardPrice,
  CardAction,
  CardButton,
};
