import Button from "./Button";

const TodoItem=({id, tododate, todotext})=>{
    return <div class="container text-center mb-3">
    <div class="container text-center">
  <div class="row">
  <div class="col-3 "></div>
    <div class="col-3">
    <div class="row">
<div class="text-truncate text-start">
  {todotext}
</div>
</div>
    </div>
    <div class="col-2 text-start">
    {tododate}
    </div>
    <div class="col-1">
    <Button btnText='Delete' btnType='danger'/>
    </div>
    <div class="col-3 "></div>
  </div>
</div>
    </div>
}
export default TodoItem; 