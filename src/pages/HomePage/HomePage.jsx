import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Root = styled.div``;

const Banner = styled.div`
	width: 100%;
	height: 200px;
	background-color: #ccc;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 20px;
`;

const ButtonArea = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 30px;
`;

const Button = styled(Link)`
	height: 50px;
	width: 100px;
	margin: 0 auto;
	text-decoration: none;
	color: #333;
	background-color: #ccc;
	border-radius: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export default function HomePage() {
	return (
		<Root>
			<Banner>歡迎光臨我的頁面</Banner>
			<ButtonArea>
				<Button to="/todo_list">點此開始</Button>
			</ButtonArea>
		</Root>
	);
}
