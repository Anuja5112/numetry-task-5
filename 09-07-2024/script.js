function sendmail() {
    let parms = {
        fname: document.getElementById('fname').value.trim(),
        lname: document.getElementById('lname').value.trim(),
        email: document.getElementById('email').value.trim(),
        gender: document.getElementById('gender').value.trim(),
        dob: document.getElementById('dob').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        address: document.getElementById('address').value.trim(),

    }
emailjs.send("service_796whr7","template_hgyizyr",parms).then(alert("Email sent !!"))

}