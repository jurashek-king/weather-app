import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  padding-top: 0.8rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  box-shadow: 5px 5px 10px 2px var(--independence);
  background-color: var(--spaceCadet);
  

  p,
  h3 {
    color: var(--isabelline);
  }
`;

export default Wrapper;
