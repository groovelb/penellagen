import styled from '../chart/node_modules/styled-components';

const Container = styled.table`
  width: 100%;
  overflow: hidden;
  border-collapse: separate;
  border-spacing: 0;
  ${props => props.theme.typeBlock.table}
`;

const Tr = styled.tr`
  background-color: ${ props => props.isHeader?'#c3b6b2':'none'};
  color: ${ props => props.theme.color.white};
`;

const Td = styled.td`
  background-color: ${ props => props.isHighlight?props.theme.color.pinkOrange:'none'};
  text-align: center;
  height: 40px;
  @media screen and (max-width: 800px) {
    width: 48px;
    height: 24px;
    white-space: pre-line;
  }
 `;

function Table({data}){
  return(
    <Container>
      {
        data.map((row,i) => 
          <Tr
            key={i}
            isHeader={i===0}
          >
            {
              row.map((col,j) =>
                <Td
                  isHighlight={col.isHighlight}
                  key={j}
                >
                  {col.value}
                </Td>
              )
            }
          </Tr>
        )
      }
    </Container>
  )
}

export default Table;