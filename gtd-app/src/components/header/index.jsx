//libs
import styled from 'styled-components';

const Wrapper = styled.header`
  width: 100%;
  height: 82px;
  background:var(--light-blue);
`;

const Perfil = styled.div`
  width: 514px;
  height: 120px;
  margin: 12px 0 0 80px;

  position: fixed;

  display: flex;
  flex-direction: row;
  align-items: center;

  .circle {
    width: 120px;
    height: 120px;
    background-color: var(--white);
    border-radius: 100%;
    border: 2px solid var(--white);

    position: absolute;
    
  }

  .rectangle {
    width: 415px;
    height: 77px;
    background-color: var(--dark-blue);
    border-radius: 12px;
    padding: 7px 18px;


    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    position: absolute;
    left: 99px;

    .name {
      font-family: var(--font);
      font-size: 2.7rem;
      color: var(--white);
    }
  }
`;

const Button = styled.button`
  width: 177px;
  height: 40px;
  border-radius: 12px;
  background-color:var(--dark-blue);
  padding: 0 16px;

  font-size: 1.5rem;
  color: var(--white);

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 52px;
  right: 80px;

  cursor: pointer;
`;


export default function Header() {
  return(
    <>
    <Wrapper>
      <Perfil>
        <div className="rectangle">
          <h1 className="name">DAVID SANTOS</h1>
        </div>
        <div className="circle"></div>
      </Perfil>

      <Button>+ Projetos</Button>
    </Wrapper>
    </>
  )
};

