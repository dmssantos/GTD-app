import styled from 'styled-components';

const Wrapper = styled.main`
  width: 90vw;
  margin: 50px 24px 24px 24px;
  padding-bottom: 12px;
  background: var(--light-blue);
  border-radius: 12px;

  display: flex;
  flex-direction: column;
`;

const TitleBar = styled.div`
  width: 100%;
  padding: 12px;
  background: var(--dark-blue);
  border-radius: 12px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: var(--white);
  font-size: 2.5rem;
`;

const Form = styled.div`
  width: 100%;
  padding: 12px;
`;

const Label = styled.div`
  width: 100%;
  padding: 8px;
  display: flex;
  flex-direction: column;
`;

const LabelDualColumn = styled(Label)`
  flex-direction: row;
  padding: 0;
`;

const LabelCheckbox = styled(Label)`
  flex-direction: row;
  align-items: center;
  padding: 36px 0 0 72px;
`;

const LabelTitle = styled.h1`
  color: var(--white);
  font-size: 1.5rem;
  font-weight: bold;
  padding-right: 12px;
`;

const LabelInputText = styled.input`
  width: 100%;
  height: 2rem;
  border-radius: 12px;
  padding: 2px 5px;
  font-size: 1.5rem;
  border-style: none;
`;

const LabelInputDate = styled(LabelInputText)`
  width: 100%;
`;

const LabelInputCheckbox = styled(LabelInputText)`
  width: 24px;
  margin-right: 12px;
`;

const LabelSelect = styled.select`
  width: 100%;
  height: 2rem;
  border-radius: 12px;
  padding: 2px 5px;
  font-size: 1.5rem;
`;

const ButtonLabel = styled(Label)`
  flex-direction: row;
  justify-content: flex-end;
`;

const AddButton = styled.button`
  width: fit-content;
  padding: 2px 18px;
  background: var(--dark-blue);
  color: var(--white);
  font-size: 1.5rem;
  border-style: none;
  border-radius: 12px;
`;

export default function NovaTarefa() {
  return (
    <Wrapper>
      <TitleBar>
        <Title>Nova Tarefa</Title>
      </TitleBar>

      <Form>
        <Label>
          <LabelTitle>Tarefas</LabelTitle>
          <LabelInputText type="text" />
        </Label>

        <LabelDualColumn>
          <Label>
            <LabelTitle>Prazo</LabelTitle>
            <LabelInputDate type="date" />
          </Label>

          <LabelCheckbox>
            <LabelInputCheckbox type="checkbox" />
            <LabelTitle>Prioridade</LabelTitle>
          </LabelCheckbox>
        </LabelDualColumn>

        <Label>
          <LabelTitle>Projeto</LabelTitle>
          <LabelSelect>
            <option>Nenhum </option>
            <option>Projeto - 1</option>
            <option>Projeto - 2</option>
          </LabelSelect>
        </Label>

        <Label>
          <LabelTitle>Contexto</LabelTitle>
          <LabelSelect>
            <option>Rapidinha</option>
            <option>Alta Concentração</option>
          </LabelSelect>
        </Label>

        <ButtonLabel>
          <AddButton>Adicionar</AddButton>
        </ButtonLabel>


      </Form>
    </Wrapper>
  )
};
