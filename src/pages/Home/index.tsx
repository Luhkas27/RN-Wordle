import Keyboard from '../../components/Keyboard';
import { Cell, CellText, Container, Map, Row, Title } from './styles';

const NUMBER_OF_TRIES = 6;

export function Home() {
  const word = 'hello';
  const letters = word.split('');

  const rows = new Array(NUMBER_OF_TRIES).fill(
    new Array(letters.length).fill('a')
  );

  return (
    <Container>
      <Title>WORDLE</Title>

      <Map>
        {rows.map((row) => (
          <Row>
            {row.map((cell) => (
              <Cell>
                <CellText>{cell.toUpperCase()}</CellText>
              </Cell>
            ))}
          </Row>
        ))}
      </Map>

      <Keyboard />
    </Container>
  );
}
