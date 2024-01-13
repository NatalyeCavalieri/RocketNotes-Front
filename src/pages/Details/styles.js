import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";
  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: #ff9000 #312e38;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: #312e38;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #ff9000;
    border-radius: 10px;
    border: 3px solid #ff9000;
  }


  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 30px 0;
  }
`

export const Links = styled.ul`
list-style: none;

>li{
  margin-top: 12px;

  a{
    color: ${({theme})=> theme.COLORS.WHITEOPACITY};
    font-style: italic;
  }
}
`

export const Content = styled.div`
  max-width: 550px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > button:first-child {
    align-self: end;
  }

  > h1 {
    font-size: 32px;
    font-weight: 400;
    padding-top: 48px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > p {
    font-size: 16px;
    margin-top: 16px;
    margin-bottom: 20px;
    text-align: justify;
  }
`