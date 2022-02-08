import styled from 'styled-components/native';
import { colors } from '../../constants';

type PropsCell = {
  cellActive: boolean;
};

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;

  background-color: ${colors.black};
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: ${colors.lightgrey};
  letter-spacing: 7px;
`;

export const Map = styled.ScrollView`
  align-self: stretch;
  margin: 20px 0;

  height: 100px;
`;

export const Row = styled.View`
  align-self: stretch;
  flex-direction: row;
  justify-content: center;
`;

export const Cell = styled.View.attrs({
  aspectRatio: 1,
})<PropsCell>`
  flex: 1;
  justify-content: center;
  align-items: center;

  max-width: 70px;
  border-width: 2px;
  border-color: ${({ cellActive }) =>
    cellActive ? colors.lightgrey : colors.darkgrey};
  margin: 3px;
`;

export const CellText = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: ${colors.lightgrey};
`;
