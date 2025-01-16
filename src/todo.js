import { getAllProjects } from "./project";
import { saveData } from "./storage";


class Todo {
    constructor(project, name, description, dueDate) {
        this.project = project;
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.isDone = false;
    }

    setName(name) {
        this.name = name;
    }
    
    setDescription(description) {
        this.description = description;
    }

    setDueDate(dueDate) {
        this.dueDate = dueDate;
    }

    toggleState() {
        this.isDone = !this.isDone;
    }
}

export function createTodo (project, name, description, dueDate) {

    const TodoObj = new Todo(project,name,description,dueDate);

    return TodoObj

}

export function deleteTodo(){
    
}


// TODO: function to update Todo details

// TODO: function to update DOM (import function)




