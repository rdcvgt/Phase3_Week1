import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import ListPage from "../../pages/ListPage";
import Header from "../Header";

const Root = styled.div``;

export default function App() {
	return (
		<Root>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/todo_list" element={<ListPage />} />
				</Routes>
			</BrowserRouter>
		</Root>
	);
}
