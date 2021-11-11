import styled from 'styled-components';
import { Link } from 'react-router-dom';
import googleIcon from '../../utils/icons/googleIcon.svg';
import facebookIcon from '../../utils/icons/facebookIcon.svg';
import linkedinIcon from '../../utils/icons/linkedinIcon.svg';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: var(--white);
  font-size: 8rem;
`;

const Icons = styled.div`
  width: 50%;
  padding: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Icon = styled.img`
  width: 120px;
`;

export default function Login() {
  return (
    <Wrapper>
      <Title>Login</Title>
      <Icons>
        <Icon src={googleIcon} />
        <Icon src={facebookIcon} />
        <Icon src={linkedinIcon} />
      </Icons>
    </Wrapper>
  )
};

