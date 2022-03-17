import { useEffect, useState } from "react";
import todos from "./apis";
import Form from "./components/Form";
import List from "./components/List";
import Section from "./components/Section";

function App() {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await todos.get("/todo");
      setTodoList(data);
    }

    fetchData();
  }, []);

  const addTodo = async (item) => {
    const { data } = await todos.post("/todo", item);
    setTodoList((oldList) => [...oldList, data]);
  };
  const removeTodo = async (id) => {
    await todos.delete(`/todo/${id}`);
    setTodoList((oldList) => oldList.filter((el) => el._id !== id));
  };

  const editTodo = async (id, item) => {
    await todos.put(`/todo/${id}`, item);
  };
  return (
    <div className="ui container center aligned">
      <Section>
        {" "}
        <h1>To_Do App</h1>
      </Section>
      <Section>
        <Form addTodo={addTodo} />
      </Section>
      <Section>
        <List
          editTodoListProp={editTodo}
          removeTodoListProp={removeTodo}
          list={todoList}
        />
      </Section>
    </div>
  );
}

export default App;
