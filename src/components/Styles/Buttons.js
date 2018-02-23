import  {colors} from './Variables';
import styled from 'styled-components';


export const Button = styled.button`
background: ${colors.secondary};
border: 2px solid ${colors.secondary};
width: 128px;
height: 36px;
font-weight: 700;
color: ${colors.light};
margin-left: auto;
margin-right: auto;
cursor: pointer;
display: block;
transition: color ease .6s, background ease .6s;
&:hover {
		 color: ${colors.secondary};
		 background: ${colors.light};
	 }
@media (min-width: 768px) {
   font-size: 16px;
 }
`;

export const ButtonSearch = Button.extend`
@media (min-width: 768px) {
   margin:0;
 }
`;
