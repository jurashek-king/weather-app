import styled from 'styled-components';

export const SwitchLabel = styled.label`
  box-sizing: content-box;
  background-color: var(--isabelline);
  display: block;
  width: 4.375rem;
  height: 2rem;
  border-radius: calc(4.375rem / 2);
  border: 0.0625rem solid var(--spaceCadet);
  position: relative;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &::after {
    content: '';
    background-color: var(--spaceCadet);
    height: 1.6rem;
    width: 2.2rem;
    position: absolute;
    top: 0.2rem;
    left: 0.2rem;
    border-radius: 1.6rem;
    transition: all 0.5s ease-in-out;
  }
`;

export const SwitchInput = styled.input`
  height: 0px;
  width: 0px;
  visibility: hidden;

  &:checked + ${SwitchLabel}::after {
    left: calc(100% - 2.4rem);
  }
`;
