const validRegister = (email: string, name:string, password: string): boolean => {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g; //Validando se um email é valido
    const emailResult = regexEmail.test(email)
    const regexPassword =  /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,}$/; // Validando se a senha tem mais de 6 caracters e que possui uma letra e um numero
    const passwordResult =  regexPassword.test(password)
    
    const user = name.length >= 3

    return emailResult && passwordResult && user;
}

export default validRegister;