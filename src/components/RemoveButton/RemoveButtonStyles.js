import styled from 'styled-components';

export const RemoveButton = styled.button`
  width: 2rem;
  height: 2rem;
  background: var(--independence);
  border-radius: 50%;
  border: 1px solid var(--independece);
  cursor: pointer;
  position: absolute;
  top: -1rem;
  left: -1rem;

  :active {
    box-shadow: inset 3px 2px 3px var(--spaceCadet);
  }

  ::after,
  ::before {
    --adjustableWidth: 1rem;
    width: var(--adjustableWidth);
    content: ' ';
    background-color: white;
    height: 2px;
    position: absolute;
    top: calc(1rem - 1px);
    left: 0.5rem;
  }

  ::after {
    transform: rotate(45deg);
  }

  ::before {
    transform: rotate(-45deg);
  }

  :active::after {
    transform: rotate(45deg) scale(0.9);
  }

  :active::before {
    transform: rotate(-45deg) scale(0.9);
  }
`;
