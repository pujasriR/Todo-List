import './CSS/TodoItems.css'
import checkmark from './Assets/checkmark.jpeg'
import crossmark from './Assets/crossmark.jpeg'
import uncheck from './Assets/uncheck.png'
//****************************** */
export const TodoItems = ({no,display,text,setTodos}) => {
    const deletes = (no)=>{
        let data=JSON.parse(localStorage.getItem("todos"));
        data=data.filter((todo)=>todo.no!==no)
        setTodos(data);
    }
    
    const toggle=(no)=>{
        let data=JSON.parse(localStorage.getItem("todos"));
        for(let i=0;i<data.length;i++){
            if(data[i].no==no){
                if(data[i].display===""){
                    data[i].display="line-through";

                }
                else{
                    data[i].display="";
                }
                break;
            }
        }
        setTodos(data);
    }
  return (
    <div className='todo-items'>
        <div className='todoitems-container' onClick={()=>{toggle(no)}}>
            {display===""?<img src={uncheck} alt=""width="50" height="60"/>:<img src={checkmark} alt=""width="50" height="60"/>}
            
            <div className='todoitems-text'>{text}</div>
            </div>
        <img className="todoitems-cross-icon" onClick={()=>{deletes(no)}} src={crossmark} alt=""width="40" height="50"/>
    </div>
  )
}
