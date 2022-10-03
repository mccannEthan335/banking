
document.querySelector('.menu-icon').addEventListener('click', openMenu);

function openMenu() {
  document.getElementById('openmenu').style.display="block";
  document.querySelector('.settings').style.display="none";
  document.getElementById('top').style.display='none';
  document.querySelector('.settings').style.color="#44c281";
}

document.querySelector('.load-more').addEventListener('click', loadMore);

function loadMore() {
  document.querySelector('.trans-block-2').style.display='block';
}

document.querySelector(".exit").addEventListener('click', closeMenu);

function closeMenu() {
  document.querySelector('#openmenu').style.display='none';
  document.querySelector('.settings').style.display='block';
  document.getElementById('top').style.display='block'
  document.querySelector('.settings').style.color="#fff";
}

document.querySelector('.settings').addEventListener('click', openSettings);

function openSettings() {
  document.querySelector('.home-page').style.display='none';
  document.querySelector('.settings-page').style.display='block';
  document.querySelector('.personal-info').style.display='none';
  document.querySelector('.deposit-list').style.display='none';
  document.querySelector('.checking').style.display='none';
}

document.querySelector('.return-home').addEventListener('click', returnHome);

function returnHome() {
  document.querySelector('.settings-page').style.display='none';
  document.querySelector('.home-page').style.display='block';
  document.querySelector('.personal-info').style.display='none';
  document.querySelector('#openmenu').style.display='none';
  document.querySelector('.checking').style.display='none';
  document.querySelector('.deposit-list').style.display='none';
}


document.querySelector('#p-info').addEventListener('click', showInfo);

function showInfo() {
  document.querySelector('.personal-info').style.display='block';


  document.querySelector('.settings-page').style.display='none';
  document.querySelector('.checking').style.display='none';
  document.querySelector('.deposit-list').style.display='none';

}


document.querySelector('.openmenu1').addEventListener('click', accountInfo);

function accountInfo() {
  document.querySelector('.checking').style.display='block';

  document.querySelector('.home-page').style.display='none';
  document.querySelector('.deposit-list').style.display='none';
  document.querySelector('.personal-info').style.display='none';
  document.querySelector('.settings-page').style.display='none';
}

document.querySelector('.z').addEventListener('click', showDeposits);

function showDeposits() {
  document.querySelector('.deposit-list').style.display='block';

}

document.querySelector('.rh').addEventListener('click', goHome);

function goHome() {
  document.querySelector('.checking').style.display='none';
  document.querySelector('.home-page').style.display='block';
  document.querySelector('.personal-info').style.display='none';
  document.querySelector('.deposit-list').style.display='none';
}
