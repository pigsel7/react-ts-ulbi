import React, {useEffect, useState} from "react";
import axios from "axios";
import Card, {CardVariant} from "./components/Card";
import { IUser, ITodo } from "./types/types";
import UserList from "./components/UserList";   //лист подходит только под user-ов
import UserItem from "./components/UserItem";   
import TodoItem from "./components/TodoItem";
import List from "./components/List";     //универсальный лист с помощью дженерика
import EventsExample from "./components/EventsExample";


const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchUsers()
    fetchTodos()
  }, [])

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch(e) {
      alert(e);
    }
  }
  async function fetchTodos() {
      try {
          const response = await axios.get<ITodo[]>(
              "https://jsonplaceholder.typicode.com/todos?_limit=10"
          );
          setTodos(response.data);
      } catch (e) {
          alert(e);
      }
  }

  return(
    <div className="">
      <Card width="200px" height="200px" variant={CardVariant.outlined} onClick={(count: number) => console.log('click:', count)}>
        {/* <button>Кнопка</button> */}
      </Card>
      <hr />
      <br />
      <h1>Users:</h1>
      <List items={users} renderItem=
        {(user: IUser) => <UserItem key={user.id} user={user}/>}
      />
      <hr />
      <br />
      <h1>Todos:</h1>
      <List items={todos} renderItem=
      {(todo: ITodo) => <TodoItem key={todo.id} todo={todo} />}
      />
      <hr />
      <br />
      <EventsExample />
    </div>
  )
}


export default App;