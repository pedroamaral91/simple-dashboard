import styled from 'styled-components';
import { metrics } from '../../../../styles';

type RowProps = {
  col: number;
};

export const Form = styled.form`
  @media only screen and (min-width: ${metrics.mobileS}) {
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 1em 0;
  }
  @media only screen and (min-width: ${metrics.tablet}) {
    padding: 1em 5em;
  }
`;

export const Row = styled.div<RowProps>`
  @media only screen and (min-width: ${metrics.mobileS}) {
    display: grid;
    grid-auto-rows: 60px;
    margin: 10px 0;
  }
  @media only screen and (min-width: ${metrics.tablet}) {
    display: grid;
    grid-template-columns: ${({ col }) => `repeat(${col}, 1fr)`};
    grid-auto-rows: 80px;
    grid-column-gap: 20px;
    align-items: center;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const ButtonSave = styled.div`
  margin: 10px 0;
  width: 25%;
  align-self: center;
`;
