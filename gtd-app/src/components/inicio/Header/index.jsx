import styled from 'styled-components';

import plusIcon from '../../../utils/icons/plusIcon.svg';

const HeaderBar = styled.header`
  width: 100%;
  height: 82px;
  background: var(--light-blue);
  margin-bottom: 60px;
`;

const Wrapper = styled.div`
  width: 514px;
  height: 120px;
  position: fixed;
  top: 12px;
  left: 87px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  background: var(--white);
`;

const UserBox = styled.div`
  width: 415px;
  height: 77px;
  background: var(--dark-blue);
  display: flex;
  flex-direction: row;
  border-radius: 12px;

  position: relative;
  left: -30px;
  z-index: -1;

  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 7px 18px;
`;

const NameUser = styled.h1`
  color: var(--white);
  font-size: 2.70rem;
  margin-left: 32px;
`;

const PlusIcon = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 100%;
  border: none;
  background: var(--dark-blue);

  position: fixed;
  top: 28px;
  right: 87px;

  display: flex;
  justify-content: center;
`;

const Icon = styled.img`
  width: 36px;
`;



export default function Header() {
  return (
    <HeaderBar>
      <Wrapper>
        <Avatar></Avatar>
        <UserBox>
          <NameUser>DAVID SANTOS</NameUser>
        </UserBox>
      </Wrapper>

      <PlusIcon>
        <Icon src={plusIcon} />
      </PlusIcon>

    </HeaderBar>
  )
};
