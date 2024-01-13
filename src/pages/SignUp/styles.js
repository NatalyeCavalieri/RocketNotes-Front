import styled from "styled-components";
import backgroundImg from '../../assets/image.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  width: 100%;
`

export const Form = styled.form`
  padding: 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > h1 {
    font-size: 40px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > h2 {
    font-size: 22px;
    margin: 48px 0;
    font-weight: 500;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > a {
    margin-top: 70px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  width: 800px;
  filter: saturate(70%);
`