< !DOCTYPE html >
    <
    html >
    <
    head >
    <
    title > Title of the document < /title> <
    style >
    .modal {
        display: none;
        position: fixed;
        z - index: 8;
        left: 0;
        top: 0;
        width: 100 % ;
        height: 100 % ;
        overflow: auto;
        background - color: rgb(0, 0, 0);
        background - color: rgba(0, 0, 0, 0.4);
    }
    .modal - content {
        margin: 50 px auto;
        border: 1 px solid #999;

        width: 60%;

      }

      h2,

      p {

        margin: 0 0 20px;

        font-weight: 400;

        color: # 999;
    }
span {
    color: #666;

        display: block;

        padding: 0 0 5px;

      }

      form {

        padding: 25px;

        margin: 25px;

        box-shadow: 0 2px 5px # f5f5f5;
    background: #eee;
}
input,
textarea {
    width: 90 % ;
    padding: 10 px;
    margin - bottom: 20 px;
    border: 1 px solid #1c87c9;

        outline: none;

      }

      .contact-form button {

        width: 100%;

        padding: 10px;

        border: none;

        background: # 1 c87c9;
    font - size: 16 px;
    font - weight: 400;
    color: #fff;
}
button: hover {
        background: #2371a0;

      }

      .close {

        color: # aaa;
        float: right;
        font - size: 28 px;
        font - weight: bold;
    }
    .close: hover,
    .close: focus {
        color: black;
        text - decoration: none;
        cursor: pointer;
    }
button.button {
        background: none;
        border - top: none;
        outline: none;
        border - right: none;
        border - left: none;
        border - bottom: #02274a 1px solid;

        padding: 0 0 3px 0;

        font-size: 16px;

        cursor: pointer;

      }

      button.button:hover {

        border-bottom: # a99567 1 px solid;
        color: #a99567;
    } <
    /style> <
    /head> <
    body >
    <
    h2 > Multiple Popup Forms < /h2> <
    p >
    <
    button class = "button"
data - modal = "modalOne" > Be First < /button> <
    /p> <
    p >
    <
    button class = "button"
data - modal = "modalTwo" > Send a Compliant Form < /button> <
    /p> <
    div id = "modalOne"
class = "modal" >
    <
    div class = "modal-content" >
    <
    div class = "contact-form" >
    <
    a class = "close" > & times; < /a> <
form action = "/" >
    <
    h2 > Be First < /h2> <
    div >
    <
    input class = "fname"
type = "text"
name = "name"
placeholder = "Full name" / >
    <
    input type = "text"
name = "name"
placeholder = "Email" / >
    <
    input type = "text"
name = "name"
placeholder = "Phone number" / >
    <
    input type = "text"
name = "name"
placeholder = "Website" / >
    <
    /div> <
    span > Message < /span> <
    div >
    <
    textarea rows = "4" > < /textarea> <
    /div> <
    button type = "submit"
href = "/" > Submit < /button> <
    /form> <
    /div> <
    /div> <
    /div> <
    div id = "modalTwo"
class = "modal" >
    <
    div class = "modal-content" >
    <
    div class = "Be-First" >
    <
    span class = "close" > & times; < /span> <
form action = "/" >
    <
    h2 > Complaint form < /h2> <
    div >
    <
    input class = "fname"
type = "text"
name = "name"
placeholder = "Full name" / >
    <
    input type = "text"
name = "name"
placeholder = "Email" / >
    <
    input type = "text"
name = "name"
placeholder = "Phone number" / >
    <
    input type = "text"
name = "name"
placeholder = "Website" / >
    <
    /div> <
    span > Message < /span> <
    div >
    <
    textarea rows = "4" > < /textarea> <
    /div> <
    button type = "submit"
href = "/" > Submit < /button> <
    /form> <
    /div> <
    /div> <
    /div> <
    script >
    let modalBtns = [...document.querySelectorAll(".button")];
modalBtns.forEach(function(btn) {
    btn.onclick = function() {
        let modal = btn.getAttribute("data-modal");
        document.getElementById(modal).style.display = "block";
    };
});
let closeBtns = [...document.querySelectorAll(".close")];
closeBtns.forEach(function(btn) {
    btn.onclick = function() {
        let modal = btn.closest(".modal");
        modal.style.display = "none";
    };
});
window.onclick = function(event) {
    if (event.target.className === "modal") {
        event.target.style.display = "none";
    }
}; <
/script> <
/body> <
/html>