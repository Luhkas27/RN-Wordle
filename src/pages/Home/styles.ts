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
