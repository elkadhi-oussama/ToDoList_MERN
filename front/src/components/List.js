import React from "react";
import Todo from "./Todo";

const List = ({ list, removeTodoListProp, editTodoListProp }) => {
  const renderedList = list.map((el) => (
    <Todo
      title={el.title}
      completed={el.completed}
      removeTodoItemProp={(e) => removeTodoListProp(el._id)}
      editTodoItemProp = { (updatedItem)=> editTodoListProp(el._id, updatedItem)}
      key={el.title}
    />
  ));
  return <div className="ui grid center aligned">{renderedList}</div>;
};

export default List;
