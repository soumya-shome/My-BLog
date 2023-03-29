function onLo(){
(function(){
    emailjs.init("Zx6YskytANj24jfjK");
 })();
}


function navb(){ 
    const body = document.querySelector("body");
    const navbar = document.querySelector(".navbar");
    const menuBtn = document.querySelector(".menu-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    const menuB = document.querySelector(".menu-list");

    menuBtn.onclick = ()=>{
    navbar.classList.add("show");
    menuBtn.classList.add("hide");
    body.classList.add("disabled");
    }

    menuB.onclick = ()=>{
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
    body.classList.remove("disabled");
    }

    cancelBtn.onclick = ()=>{
    body.classList.remove("disabled");
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
    }
    navbar.classList.add("sticky")
}

function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    const serviceID = 'service_84kcyls';
    const templateID = 'template_bk6svmd';

    emailjs.send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("name").value="";
            document.getElementById("email").value="";
            document.getElementById("message").value="";
            console.log(res);
            alert("Your message has been sent successfully");
        })
        .catch((err) => console.log(err));
    }