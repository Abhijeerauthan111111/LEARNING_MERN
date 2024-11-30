import TodoItem from "./TodoItem";
const TodoItems=()=>{
    const todoitems=[{id:1 , todotext:"Buy MIlk", tododate:"4-Sept-2024"},
        {id:2 , todotext:"Go to college", tododate:"Everyday"},
        {id:3 , todotext:"Go to gym", tododate:"weekday"}];

    return <> {todoitems.map(item=><TodoItem key={item.id} tododate={item.tododate} todotext={item.todotext}/> )};</> 
}

export default TodoItems;