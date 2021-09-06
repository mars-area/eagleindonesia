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
import HoodieImg from "../asset/img/apparel/sportwearhoodie.jpg";
import JacketImg from "../asset/img/apparel/sportwearjacket.jpg";
import PantsImg from "../asset/img/apparel/sportwearpants.jpg";
import ShirtImg from "../asset/img/apparel/sportweartshirt.jpg";

function Apparel() {
  return (
    <Main>
      <MainTop />
      <Section>
        <Article>
          <CardImageWrapper>
            <CardImage src={HoodieImg} alt="rush-shoes" />
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
            <CardImage src={JacketImg} alt="rush-shoes" />
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
            <CardImage src={PantsImg} alt="rush-shoes" />
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
            <CardImage src={ShirtImg} alt="rush-shoes" />
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

export default Apparel;
