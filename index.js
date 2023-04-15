function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors']
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice
}

function pitifulHumanChoice() {
    document.getElementById("myDropdown").classList.toggle("show");
    window.onclick = function(event) {
        if (!EventTarget.target.matches('.dropbtn')) {
            let dropdowns = document.getElementsByClassName("dropdown-content");
            let i;
            for (i = 0; i <dropdowns.length; i++) {
                let openDropdown =dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classlist.remove('show');
                }
            }
        }
    }
}


