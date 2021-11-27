import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 12rem;
  position: relative;
  padding-top: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  box-shadow: 5px 5px 10px 2px var(--independence);
  background-color: ${({ theme }) => theme.background};
  transition: all 0.25s linear;

  p,
  h2 {
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h2 {
    line-height: 1.5rem;
    max-height: 1.5rem;
  }

  img {
    width: 80%;
  }

`;

export default Wrapper;
