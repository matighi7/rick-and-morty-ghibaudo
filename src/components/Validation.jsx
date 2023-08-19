export const validateEmail = (email) => {
    if (!email) {
      return "Email vacío";
    }
  
    if (email.length > 35) {
      return "Email no puede tener más de 35 caracteres";
    }
  
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regex.test(email)) {
      return "Email inválido";
    }
  
    return "";
  };
  
  export const validatePassword = (password) => {
    if (password.length < 6 || password.length > 10) {
      return "Contraseña debe tener entre 6 y 10 caracteres";
    }
  
    const regex = /\d/;
    if (!regex.test(password)) {
      return "Contraseña debe contener al menos un número";
    }
  
    return "";
  };