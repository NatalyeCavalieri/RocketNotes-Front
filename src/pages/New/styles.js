import styled from "styled-components";

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
  }

  .marcador {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`
export const Form = styled.form`
  max-width: 550px;
  margin: 38px auto;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 36px;

    > button {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

`
