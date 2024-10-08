let password = prompt("Enter your password");

while (true) {
    let hasUppercase = false;
    let hasLowercase = false;
    let hasNumber = false;
    let hasSpecialCase = false;

    const specialCharacters = "@#$%^&*";


    // Check if password meets all conditions
    if (password.length >= 8) {
        for (let i = 0; i < password.length; i++) {
            let char = password.charAt(i);
            if (char === char.toUpperCase() && isNaN(char)) {
                hasUppercase = true;
            }
            if (char === char.toLowerCase() && isNaN(char)) {
                hasLowercase = true;
            }
            if (!isNaN(char)) {
                hasNumber = true;
            }
            if (specialCharacters.includes(char)){
                hasSpecialCase = true;
            }

        }
    }

    // If all conditions are met, break out of the loop
    if (hasUppercase && hasLowercase && hasNumber && hasSpecialCase) {
        alert("Password accepted!");
        break;
        
    } else {
        // re-prompting the user if conditions arent met
        let message = "Password should ";
        if (password.length < 8) {
            message += "be at least 8 characters long\n";
        }
        if (!hasUppercase) {
            message += "contain at least 1 uppercase letter\n";
        }
        if (!hasLowercase) {
            message += "contain at least 1 lowercase letter\n";
        }
        if (!hasNumber) {
            message += "contain at least 1 number\n";
        }
        if (!hasSpecialCase) {
            message += "contain at least 1 special case character (@, #, $, &, ^, *)";
        }

        password = prompt(message);
    }
}
