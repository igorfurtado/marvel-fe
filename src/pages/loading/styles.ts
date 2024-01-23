import styled from 'styled-components'

export const LoadingPage = styled.section`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgb(255 255 255/ 80%);
  cursor: wait;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 40px;
    gap: 8px;
  }
`
