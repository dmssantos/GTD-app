import styled from 'styled-components';

const FooterBar = styled.footer`
  width: 100vw;
  height: 43px;
  margin-top: 12px;
  background: var(--light-blue);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Copy = styled.h1`
  color: var(--white);
  font-size: 1rem;
  font-weight: bold;
`;

export default function Footer() {
  return (
    <FooterBar>
      <Copy>Copyright@DavidSantos</Copy>
    </FooterBar>
  )
};
