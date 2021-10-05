import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 60%;
  max-width: 60rem;
  height: 2rem;
  /* margin: auto; */
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-left: 3rem;
  padding-right: 3rem;
  border-color: var(--isabelline);
  display: flex;
  align-items: center;
  justify-content: center;
  `;

export const SearchInput = styled.input`
  width: 60%;
  height: 100%;
  font-size: 1.5rem;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  text-indent: 0.5rem;
  border: none;

  ::placeholder {
    text-indent: 0.5rem;
  }

`;

export const SearchButton = styled.button`
  background: var(--independence);
  width: 3rem;
  height: 100%;
  cursor: pointer;
  position: relative;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  border: 1px solid var(--independece);

  :active {
    box-shadow: inset 3px 2px 3px var(--spaceCadet);
  }

  .search {
    color: var(--isabelline);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
