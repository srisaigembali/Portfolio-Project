let tablinks = document.getElementsByClassName('tab-links');
let tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname) {
  for (var tablink of tablinks) {
    tablink.classList.remove('active-link');
  }
  for (var tabcontent of tabcontents) {
    tabcontent.classList.remove('active-tab');
  }
  // event.currentTarget.classList.add("active-link");
  let x;
  if (tabname == 'skills') x = 't1';
  else if (tabname == 'experience') x = 't2';
  else x = 't3';
  document.getElementsByClassName(x)[0].classList.add('active-link');
  document.getElementById(tabname).classList.add('active-tab');
}

let sidemenu = document.getElementById('sidemenu');

function openMenu() {
  sidemenu.style.right = '0';
}

function closeMenu() {
  sidemenu.style.right = '-200px';
}

const scriptURL =
  'https://script.google.com/macros/s/AKfycbx2LVCnwRFVg7YBO3Fsj3oYpu5zsdCZYN-Mh-s26HNjOJ2qJ0orUc0TYU2Jzb39Doi3qQ/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = 'Message sent successfully!';
      setTimeout(function () {
        msg.innerHTML = '';
      }, 1000);
      form.reset();
    })
    .catch((error) => console.error('Error!', error.message));
});

let icon = document.getElementById('icon');
icon.onclick = function () {
  document.body.classList.toggle('light');
  if (document.body.classList.contains('light'))
    icon.classList.replace('fa-sun', 'fa-moon');
  else icon.classList.replace('fa-moon', 'fa-sun');
};

let projectbtn = document.getElementById('projectbtn');
projectbtn.onclick = () => {
  let list2 = document.getElementById('list2');
  list2.classList.toggle('list');
  if (list2.classList.contains('list')) {
    projectbtn.textContent = 'See More';
  } else {
    projectbtn.textContent = 'See Less';
  }
};
