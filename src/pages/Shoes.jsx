import React from "react";
import { Main } from "../components/mainwrapper";
import MainTop from "../components/maintop";
import { Section } from "../components/section";
import { Article } from "../components/article";
import {
  CardImageWrapper,
  CardImage,
  CardBody,
  CardTitle,
  CardPriceWrapper,
  CardPriceDiscount,
  CardPrice,
  CardAction,
  CardButton,
} from "./Home";
import RushShoes from "../asset/img/shoes/eagle rush.jpg";
import MagnumShoes from "../asset/img/shoes/Magnum2.jpg";
import FighterShoes from "../asset/img/shoes/fighter.jpg";
import EternalShoes from "../asset/img/shoes/eagle eternal.jpg";

function Shoes() {
  return (
    <Main>
      <MainTop />
      <Section>
        <Article>
          <CardImageWrapper>
            <CardImage src={RushShoes} alt="rush-shoes" />
          </CardImageWrapper>
          <CardBody>
            <CardTitle>Rush Eagle Shoes</CardTitle>
            <CardPriceWrapper>
              <CardPriceDiscount>Rp149.900</CardPriceDiscount>
              <CardPrice>Rp295.900</CardPrice>
            </CardPriceWrapper>
            <CardAction>
              <CardButton>Buy</CardButton>
            </CardAction>
          </CardBody>
        </Article>

        <Article>
          <CardImageWrapper>
            <CardImage src={MagnumShoes} alt="rush-shoes" />
          </CardImageWrapper>
          <CardBody>
            <CardTitle>Magnum Eagle Shoes</CardTitle>
            <CardPriceWrapper>
              <CardPriceDiscount>Rp239.920</CardPriceDiscount>
              <CardPrice>Rp299.900</CardPrice>
            </CardPriceWrapper>
            <CardAction>
              <CardButton>Buy</CardButton>
            </CardAction>
          </CardBody>
        </Article>

        <Article>
          <CardImageWrapper>
            <CardImage src={FighterShoes} alt="rush-shoes" />
          </CardImageWrapper>
          <CardBody>
            <CardTitle>Fighter Eagle Shoes</CardTitle>
            <CardPriceWrapper>
              <CardPriceDiscount>Rp239.950</CardPriceDiscount>
              <CardPrice>Rp479.900</CardPrice>
            </CardPriceWrapper>
            <CardAction>
              <CardButton>Buy</CardButton>
            </CardAction>
          </CardBody>
        </Article>

        <Article>
          <CardImageWrapper>
            <CardImage src={EternalShoes} alt="rush-shoes" />
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
        </Article>
      </Section>
    </Main>
  );
}

export default Shoes;
