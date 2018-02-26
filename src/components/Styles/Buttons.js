import  {colors} from './Variables';
import styled from 'styled-components';


export const Button = styled.button`
padding: 0;
background: ${colors.secondary};
border: 2px solid ${colors.secondary};
font-size: 12px;
border-radius: 0px;
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
		 border: 2px solid ${colors.secondary};
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



export const IconButton = styled.button`
background: ${colors.secondary};
border: 2px solid ${colors.secondary};
margin-left:10px;
width: 32px;
height: 32px;
font-weight: 700;
color: ${colors.light};
display; inline;
cursor: pointer;
transition: color ease .6s, background ease .6s;
&:hover {
		 color: ${colors.secondary};
		 background: ${colors.light};
	 }
@media (min-width: 768px) {
   font-size: 16px;
}
`;
