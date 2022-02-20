import styled from 'styled-components';

const Wrapper = styled.div`
  width: 80vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
  justify-items: center;
  justify-content: center;
  gap: 1rem 1rem;

  h2 {
    color: ${({ theme }) => theme.text};
  }
`;

export default Wrapper;
