const btn = document.querySelector('button')

const inputs = document.querySelector('form')

btn.addEventListener('click', function() {
Email.send({
    Host:"smtp.mailtrap.io",
    Username:"c32e131550aecb",
    Password: "6786a2c573a9c5",
    To : "nipuna775@gmail.com",
    From : inputs.elements["emial"].value,
    Subject:" Contact us ",
    Body:inputs.elements["any-questions"].value + "<br>" + inputs.elements["name"].value
}) .then(msg=>alert(" The email succesfully sent"))
})
