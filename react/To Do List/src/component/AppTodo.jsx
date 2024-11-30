import Button from "./Button";

const AppTodo=()=>{
    return  <div class="container text-center mb-5 ">
    <div class="row">
      <div class="col-3 "></div>  
      <div class="col-3">
      <input type="text" class="form-control" placeholder="To Do Task" ></input>
      </div>
      <div class="col-2">
      <input type="date" class="form-control "  ></input>
      </div>
      <div class="col-1 ">
      <Button btnText='add' btnType='success'/>
      </div>
      <div class="col-3 "></div>
    </div>
  </div>
}
export default AppTodo;

