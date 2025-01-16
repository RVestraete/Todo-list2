import { loadData, saveData } from "./storage";
import { getAllProjects, initAllProjects } from "./project";


export function initialise() {

    const storedData = loadData();

    if (storedData){
        initAllProjects(storedData);
        //...
    } else { 

        return null;
        // To be done
    }
}

