export function saveData(projects){
    localStorage.setItem("projects", JSON.stringify(projects));
}

export function loadData() {
    const storedData = localStorage.getItem("projects");
    if (storedData){
        return storedData.parse(storedData);
    }
    return null
}

export function removeData() {
    localStorage.removeItem("projects");
}

export function checkIfDataExists() {
    return localStorage.getItem("projects") !== null;
}