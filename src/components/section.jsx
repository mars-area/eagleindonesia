import styled from "styled-components";

export const Section = styled.section`
  margin-top: -50px;
  padding: 4.5rem 1rem 1rem 1rem;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: "content";
  grid-gap: 1rem;

  @media (min-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
