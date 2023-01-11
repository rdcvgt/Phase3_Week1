import React, { useState, useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Root = styled.div``;
const InputArea = styled.div`
	width: 100%;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 10px;
	border-bottom: 1px solid #ccc;
	padding: 10px;
`;

const Input = styled.input`
	width: 200px;
	height: 40px;
	border-radius: 5px;
	outline: none;
`;

const Button = styled.button`
	height: 50px;
	width: 100px;
	margin-left: 20px;
	text-decoration: none;
	color: #333;
	border-radius: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	outline: none;
`;

const TodoItem = styled.div`
	width: 600px;
	height: 80px;
	border: 1px solid #ccc;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 30px;
	border-radius: 80px;
	margin-top: 20px;
`;

const TodoList = styled.div`
	font-size: 20px;
	color: #333;
`;

const BackToHomepage = styled(Link)`
	height: 50px;
	width: 100px;
	margin: 20px auto;
	border: 1px solid #333;
	text-decoration: none;
	color: #333;
	border-radius: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Todo = ({ todo, handleDeleteTodo }) => {
	return (
		<TodoItem>
			<TodoList>{todo.content}</TodoList>
			<Button onClick={() => handleDeleteTodo(todo.id)}>刪除</Button>
		</TodoItem>
	);
};

Todo.propTypes = {
	todo: PropTypes.object,
	handleDeleteTodo: PropTypes.func,
};

export default function ListPage() {
	const [todos, setTodos] = useState([]);
	const [value, setValue] = useState("");
	const id = useRef(0);

	const handleInputChange = (e) => {
		setValue(e.target.value);
	};

	const handleButtonClick = () => {
		setTodos([
			{
				id: id.current,
				content: value,
			},
			...todos,
		]);
		setValue("");
		id.current++;
	};

	const handleDeleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	return (
		<Root>
			<InputArea>
				<Input
					type="textarea"
					placeholder="請輸入內容"
					value={value}
					onChange={handleInputChange}
				/>
				<Button onClick={handleButtonClick}>新增記錄</Button>
			</InputArea>

			{todos.map((todo) => (
				<Todo
					key={todo.id}
					todo={todo}
					handleDeleteTodo={handleDeleteTodo}
				/>
			))}

			<BackToHomepage to="/">返回首頁</BackToHomepage>
		</Root>
	);
}
