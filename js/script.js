document.getElementById('year').innerHTML = '© '+ new Date().getFullYear();

document.getElementById('menu').addEventListener('click', (e)=> showSideMenu(e));

document.querySelector('.sideMenu2').addEventListener('click', hideSideMenu);

function showSideMenu(e)  {
    e.preventDefault;
    document.querySelector('body').style.overflow = "hidden";
    document.querySelector('.sideMenu').style.display = "block";
    document.querySelector('.sideMenu2').style.display = "block";
}

function hideSideMenu() {
    document.querySelector('body').style.overflow = "scroll";
    document.querySelector('.sideMenu').style.display = "none";
    document.querySelector('.sideMenu2').style.display = "none";
}