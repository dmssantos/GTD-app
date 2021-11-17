//Bibliotecas
import styled from 'styled-components';

//Icons
import googleIcon from '../../assets/images/google.svg';
import facebookIcon from '../../assets/images/facebook.svg';
import linkedinIcon from '../../assets/images/linkedin.svg';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 6rem;
  color: white;
  font-family: sans-serif;
  padding: 12px;
`;

const Icons = styled.div`
  width: 300px;
  padding: 12px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;

  img {
    width: 50px;
    height: fit-content;
    margin: 12px 24px;
    cursor: pointer;
  }
`;


export default function Login() {
  return (
    <Wrapper>
      <Title>Login</Title>
      <Icons>
        <img src={googleIcon} alt="google" />
        <img src={facebookIcon} alt="facebook" />
        <img src={linkedinIcon} alt="linkedin" />
      </Icons>
    </Wrapper>
  )
};
