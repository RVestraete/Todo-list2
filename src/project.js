import { saveData } from './storage';
 
class Project {
    todos = [];

    constructor(name){
        this.name = name;
    }

    addTodo(todo){
        this.todos.push(todo);
    }
}

defaultObject = new Project("Todos");

const allProjects = [defaultObject];

export function getAllProjects() {
    return allProjects;
}

export function createProject(projectName){
    if (projectName === "Todos"){
        return allProjects[0];
    }

    const todosList = [];
    const projectObj = new Project(projectName);

    allProjects.push(projectObj);
}

export function addTodoToProject(project, todo){
    project.addTodo(todo);
}

export function deleteProject(projectName){
    const index = allProjects.findIndex(project => project.name === projectName);

    if (index !== -1){
        allProjects.splice(index,1);
        saveData(allProjects);
    }
}

export function initAllProjects(newProjects) {

    allProjects = [];
    allProjects.push(...newProjects);
}


export function renameProject(oldProjectName, newProjectName){
    const projects = getAllProjects();
    const foundProject = projects.find(project => project.name === oldProjectName);

    if (foundProject){
        foundProject.name = newProjectName;

        // TODO: update each todo object's project name 
        // foundProject.todos.forEach.....

        // TODO: Update name in DOM (Import function from the DOM manip file)
    }
}




