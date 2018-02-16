
import styled from 'styled-components';

export const Flex = styled.div`
display: flex;
flex-direction: ${props => props.direction || 'column'};
align-items: ${props => props.align || 'center'};
justify-content: ${props => props.justify || 'center'};

@media (min-width: 768px) {
  flex-direction: ${props => props.directionLg || 'row'};
}
`;
