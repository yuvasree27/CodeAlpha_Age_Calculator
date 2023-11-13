function calculateAge() {
    var birthdate = document.getElementById('birthdate').value;
    
    if (!birthdate) {
        alert("Please enter your birthdate.");
        return;
    }

    var today = moment();
    var birthdateMoment = moment(birthdate, 'YYYY-MM-DD');

    var years = today.diff(birthdateMoment, 'years');
    birthdateMoment.add(years, 'years');

    var months = today.diff(birthdateMoment, 'months');
    birthdateMoment.add(months, 'months');

    var days = today.diff(birthdateMoment, 'days');

    document.getElementById('result').innerHTML = 'Your age is: ' + years + ' years, ' + months + ' months, and ' + days + ' days';
}
