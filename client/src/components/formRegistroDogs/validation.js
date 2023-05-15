export const validate = (inputs) => {
    // inputs --. {userName: "Feli", password :""}
    const errors = {};
    if (!inputs.raza) {
      errors.raza = "No puede ser vacio";
    }
    
    return errors;
    // errors = {userName= ""}
  };