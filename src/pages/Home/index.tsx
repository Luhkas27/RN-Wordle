import { useState } from 'react';
import Keyboard from '../../components/Keyboard';
import { CLEAR, ENTER } from '../../constants';
import { Cell, CellText, Container, Map, Row, Title } from './styles';

const NUMBER_OF_TRIES = 6;

const copyArray = (arr) => {
  return [...arr.map((rows) => [...rows])];
};

export function Home() {
  const word = 'hello';
  const letters = word.split('');

  const [rows, setRows] = useState(
    new Array(NUMBER_OF_TRIES).fill(new Array(letters.length).fill(''))
  );
  const [currentRow, setCurrentRow] = useState(0);
  const [currentColumn, setCurrentColumn] = useState(0);

  const handleKeyPressed = (key: string) => {
    const updatedRows = copyArray(rows);

    if (key === CLEAR) {
      const previousColumn = currentColumn - 1;
      if (previousColumn >= 0) {
        updatedRows[currentRow][previousColumn] = '';
        setRows(updatedRows);
        setCurrentColumn(previousColumn);
      }
      return;
    }

    if (key === ENTER) {
      if (currentColumn === rows[0].length) {
        setCurrentRow(currentRow + 1);
        setCurrentColumn(0);
      }

      return;
    }

    if (currentColumn < rows[0].length) {
      updatedRows[currentRow][currentColumn] = key;
      setRows(updatedRows);
      setCurrentColumn(currentColumn + 1);
    }
  };

  const isCellActive = (row: number, col: number) => {
    return row === currentRow && col === currentColumn;
  };

  return (
    <Container>
      <Title>WORDLE</Title>

      <Map>
        {rows.map((row, i) => (
          <Row key={`row-${i}`}>
            {row.map((cell, j) => (
              <Cell key={`cell-${i}-${j}`} cellActive={isCellActive(i, j)}>
                <CellText>{cell?.toUpperCase()}</CellText>
              </Cell>
            ))}
          </Row>
        ))}
      </Map>

      <Keyboard onKeyPressed={handleKeyPressed} />
    </Container>
  );
}
