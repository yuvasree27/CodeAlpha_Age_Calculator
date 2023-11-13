function calculateAge() {
    const birthdate = new Date(document.getElementById("birthdate").value);
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();

    // Check if the birthday has occurred this year
    if (today.getMonth() < birthdate.getMonth() || (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate())) {
        age--;
    }

    document.getElementById("result").innerText = `Your age is ${age} years.`;
}

