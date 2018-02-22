import  {colors} from './Variables';
import styled from 'styled-components';


export const IconButton = styled.button`
background: ${colors.secondary};
border: 2px solid ${colors.secondary};
width: 32px;
height: 32px;
font-weight: 700;
color: ${colors.light};
display; inline;
cursor: pointer;
&:hover {
		 color: ${colors.secondary};
		 background: ${colors.light};
	 }
@media (min-width: 768px) {
   font-size: 16px;
 }
`;
