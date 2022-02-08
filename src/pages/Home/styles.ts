import styled from 'styled-components/native';
import { colors } from '../../constants';

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

export const Map = styled.View`
  align-self: stretch;

  height: 100px;
`;

export const Row = styled.View`
  align-self: stretch;
  flex-direction: row;
`;

export const Cell = styled.View.attrs({
  aspectRatio: 1,
})`
  flex: 1;

  border-width: 2px;
  border-color: ${colors.darkgrey};
  margin: 3px;
`;
