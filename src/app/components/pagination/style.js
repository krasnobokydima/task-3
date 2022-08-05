import styled from "styled-components";

export const Nav = styled.nav`
	margin: 15px 0;
`;

export const Ul = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	list-style: none;
	gap: 5px;
`;

export const Li = styled.li`
  display: inline-block;
    border-radius: 2px;
    text-align: center;
    vertical-align: top;
    height: 30px;
`;

export const Button = styled.button`
	padding: 5px 10px;
	border: 1px solid gray;

	cursor: pointer;

  background-color: ${({$active}) => $active ? '#80cbc4' : 'transparent'};
	color: ${({$active}) => $active ? '#fff' : '#80cbc4'};
	border: none;
`;
