type TodoActionTypes = 
       | IAdd
       | IRemove
       | IToggle
       | IClear;
       
type Actions = TodoActionTypes;

type Todo = {  
    id: string;
    title: string;
    completed: boolean;
}

type State = Todo[];

interface IAdd {
    type: 'add';
    title: string;
    id: string;
}

interface IToggle {
    type: 'toggle';
    id: string;
}
  
interface IRemove {
    type: 'remove';
    id: string;
}
  
interface IClear {
    type: 'clear';
}