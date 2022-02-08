import Keyboard from '../../components/Keyboard';
import { Cell, Container, Map, Row, Title } from './styles';

export function Home() {
  return (
    <Container>
      <Title>WORDLE</Title>

      <Map>
        <Row>
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
        </Row>
      </Map>

      <Keyboard />
    </Container>
  );
}
