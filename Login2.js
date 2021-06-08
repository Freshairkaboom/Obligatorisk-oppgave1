//Model
let View = document.getElementById('app');

//View
brukerView();
function brukerView() {
    View.innerHTML = `
    <div><h1>Logg inn her</h1><div>

    <div id="Separator" style="margin:200px;"></div>

    <details>
    <summary><strong>Få engangspassord</strong></summary>
    GET123 eller 123GET
    </details>

    <div class="loginbox">
    <h3>Logg inn her</h3>
    <h4>Brukernavn</h4>
    <input type="text" oninput="loginID = this.value" "value="${loginID} id="brukernavn">
    <button onclick=checkUserID(loginID)>Neste</button
    </div>
    `
}
function passordView() {
    View.innerHTML = `
    <div><h1>Login side</h1><div>

    <div id="Separator" style="margin:200px;"></div>

    <div class="loginbox">
    <h3>Logg inn her</h3>
    <h4>Passord</h4>
    <input type="password" oninput="loginPass = this.value" "value="${loginPass} id="passord">
    <button onclick="checkUserPass(loginPass)">Neste</button
    </div>
    `
}
function loggedInView() {
    View.innerHTML = `
    <div><h1>Du er logget inn som `+checkUserID(loginID)+`!</h1><div>
    `
}
