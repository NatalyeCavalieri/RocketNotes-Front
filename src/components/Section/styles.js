import styled from "styled-components";

export const Container = styled.section`
margin: 28px 0;

>h2{
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme})=> theme.COLORS.BACKGROUND_700};

  padding-bottom: 10px;
  margin-bottom: 12px;

  color: ${({theme})=> theme.COLORS.GRAY_100};
  font-size: 18px;
  font-weight: 400;
}
`