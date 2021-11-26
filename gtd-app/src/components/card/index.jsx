//lib
import styled from 'styled-components';

const Wrapper = styled.div`
  width: calc(100vw - 160px);
  height: 163px;
  background-color: var(--white);
  margin: 90px 80px 0;
  border-radius: 12px;

  .cardTitle {
    width: 100%;
    height: 63px;
    padding-left: 19px;
    background-color: var(--dark-blue);
    border-radius: 12px;

    display: flex;
    align-items: center;

    .title {
      font-family: var(--font);
      font-size: 2rem;
      color: var(--white)
    }
  }
`;

const TableHeader = styled.div`
  width: 100%;
  padding: 8px;

  font-family: var(--font);
  font-weight: bold;

  display: grid;
  grid-template-columns: 4fr 1fr 1fr 1fr 1fr;
`;

const TableContent = styled(TableHeader)`
  font-weight: normal;
  
  div {
    margin: 1px;
  }

  .center {
    margin-left: 30%;
  }
`;

//function
export default function Card({ title, tableTitle, tableContent }) {
  return (
    <Wrapper>
      <div className="cardTitle">
        <h2 className="title">{title}</h2>
      </div>

      <TableHeader>
        {tableTitle.map(
          item => (
            <div>{item}</div>
          )
        )}
      </TableHeader>

      <TableContent>
        {tableContent.map(
          item => (
            <div>
              {typeof item == "boolean" ? (
                <div className="center">
                  <input type="checkbox" />
                </div>
              ) : (
                item
              )}
            </div>
          )
        )}
      </TableContent>
    </Wrapper>
  )
};
