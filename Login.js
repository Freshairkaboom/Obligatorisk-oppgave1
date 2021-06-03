//Model
let loginID = "";
let loginPass = "";

//Controller
function checkUserID(id) {
    if (id == "Lars" || id == "Kasper" || id == "Morten" || id == "Nanna" || id == "Terje" || id == "Joakim" || id == "Therese") {
        passordView();
        return "Riktig";
    }
    else {
        brukerView();
        return "Feil brukernavn";
    }
}
function checkUserPass(pass) {
    if (pass === "GET123" || pass === "123GET") {
        loggedInView();
        return "Riktig passord!"
    }
    else {
        alert('Du valgte feil passord!')
        brukerView();
        return "Feil passord";
    }
}
