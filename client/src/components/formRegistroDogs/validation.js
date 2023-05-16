export const validate = (inputs) => {
    // inputs --. {userName: "Feli", password :""}
    const errors = {};
    console.log(inputs);
    if (!inputs.nombre) {
      errors.nombre = "No puede ser vacio";
    }
    
    return errors;
    // errors = {userName= ""}
  };