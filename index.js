const employee = {
    name: "holla", 
    streetAddress: "addy",
}

function updateEmployeeWithKeyAndValue(employee, name, value) {
    
    const newEmployee = {...employee};    
    newEmployee[name] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, value) {
    
    employee[name] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, name) {
    
    const newEmployee = {...employee};    
    delete newEmployee[name];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, name) {
    
    delete employee[name];
    return employee;
}