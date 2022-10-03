document.querySelector('.menu-icon').addEventListener('click', openMenu);

function openMenu() {
  document.getElementById('openmenu').style.display="block";
  document.querySelector('.settings').style.display="none";
}

document.querySelector('.load-more').addEventListener('click', loadMore);

function loadMore() {
  document.querySelector('.trans-block-2').style.display='block';
}

document.querySelector(".exit").addEventListener('click', closeMenu);

function closeMenu() {
  document.querySelector('#openmenu').style.display='none';
  document.querySelector('.settings').style.display='block';
}

document.querySelector('.settings').addEventListener('click', openSettings);

function openSettings() {
  document.querySelector('.home-page').style.display='none';
  document.querySelector('.settings-page').style.display='block';
  document.querySelector('.personal-info').style.display='none';
}

document.querySelector('.return-home').addEventListener('click', returnHome);

function returnHome() {
  document.querySelector('.settings-page').style.display='none';
  document.querySelector('.home-page').style.display='block';
}


document.querySelector('#p-info').addEventListener('click', showInfo);

function showInfo() {
  document.querySelector('.personal-info').style.display='block';

  document.querySelector('.settings-page').style.display='none';

}


document.querySelector('.openmenu1').addEventListener('click', accountInfo);

function accountInfo() {
  document.querySelector('.checking').style.display='block';

  document.querySelector('.home-page').style.display='none';
}
