function validateForm() {
    var nameInput = document.getElementById('name');
    var surnameInput = document.getElementById('surname');
	var emailInput = document.getElementById('email');
    var cinInput = document.getElementById('cin');
    var cinValue = cinInput.value;
	if (nameInput === "" || surnameInput === "" || cinValue === "" || emailInput ==="") {
		alert("Veuillez remplir tous les champs.");
		return; 
	}	
    if (!/^[a-zA-Z\s]{3,}$/.test(nameInput.value)) {
        document.getElementById('validationMessage').innerText = 'Name must contain only characters and be at least 3 characters long.';
        nameInput.focus();
        return;
    }
    if (!/^[a-zA-Z\s]{3,}$/.test(surnameInput.value)) {
        document.getElementById('validationMessage').innerText = 'Surname must contain only characters and be at least 3 characters long.';
        surnameInput.focus();
        return;
    }
    if (!/^\d{8}$/.test(cinValue)) {
        document.getElementById('validationMessage').innerText = 'CIN must be a number with exactly 8 digits.';
        cinInput.focus();
        return;
         }
    var emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        document.getElementById('validationMessage').innerText = 'Enter a valid email address.';
        emailInput.focus();
        return;
    }
	else {
		document.getElementById('validationMessage').innerText = '';
		alert('message envoyé avec succés');
	}

}