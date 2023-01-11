import React from "react";
import styled from "styled-components";

const Navbar = styled.div`
	width: 100%;
	height: 64px;
	background-color: #2a2a49;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #fff;
	font-size: 30px;
`;

export default function Header() {
	return <Navbar>React 練習專案</Navbar>;
}
