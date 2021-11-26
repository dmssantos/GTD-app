//Libs

//components
import Header from '../../components/header/index';
import Card from '../../components/card/index';


//Function
export default function Inicio() {
  return (
    <>
      <Header />
      <Card
        title="Caixa de Entrada"
        tableTitle={['Tarefa', 'Prazo?', 'Prioritária?', 'Projeto', 'Contexto']}
        tableContent={['Tarefa-1', '22/12/22', true, 'Projeto-1', 'Rapida']}
      />
    </>
  )
};
