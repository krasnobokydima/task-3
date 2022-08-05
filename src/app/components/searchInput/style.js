import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { GrPowerReset } from "react-icons/gr";

export const SearchContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	width: 100%;
`;

export const SearchIcon = styled(BsSearch)`
	position: absolute;
	right: 80px;
	font-size: 1.2em;
	cursor: pointer;
	transition: color 0.3s ease;

	&:hover {
		color: rgb(128, 203, 196);
	}
`;

export const ResetIcon = styled(GrPowerReset)`
	height: 60px;
	width: 60px;
	padding: 18px;
	border: 1px solid rgba(0, 0, 0, 0.12);

	cursor: pointer;
	transition: background-color 0.3s ease, border-color 0.3s ease;
	background-color: rgba(0, 0, 0, 0.05);

	&:hover {
		
		background-color: rgba(0, 0, 0, 0.08);
		border-color: rgba(0, 0, 0, 0.2);
	}
`;

export const Input = styled.input`
	box-sizing: border-box;
	height: 60px;
	color: "#80cbc4";
	display: block;
	font-size: 16px;
	font-weight: 300;
	width: 100%;
	border-right: none;


	padding-left: 20px;	
	border: 1px solid rgba(0, 0, 0, 0.12);

	background-color: transparent;
	border-radius: 0;
	outline: none;
	transition: box-shadow 0.3s, border 0.3s, -webkit-box-shadow 0.3s;
`;
