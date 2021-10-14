const tabs = document.getElementsByClassName('tab');
const tabContent = document.getElementsByClassName('tab-content');
const contactBtn = document.getElementById('contact-btn');
const mode = document.getElementById('mode');
let theme = 'light';

let deselectTabs = function(target) {
  for (let i = 0; i < target.length; i++){
    target[i].className = theme === 'light' ? 'tab interact' : 'tab interact dark';
  }
};

let deselectContent = function (target) {
  for (let i = 0; i < target.length; i++) {
    target[i].className = 'tab-content';
  }
};

const themeToggle = () => {
  let state = mode.innerText;

  if (state === "🌚") {
    mode.innerText = "🌝";
    theme = 'light';
  } else {
    mode.innerText = "🌚";
    theme = 'dark';
  }
  toggleClasses();
};

const toggleClasses = () => {
  let body = document.getElementsByTagName('body')[0];
  let container = document.getElementById('container');
  let contact = document.getElementById('contact');
  let picture = document.getElementById('picture');
  let tabs = document.getElementById('tabs-container');
  let tab = [].slice.call(document.getElementsByClassName('tab'));
  let content = [].slice.call(document.getElementsByClassName('content-box'));
  let sub = [].slice.call(document.getElementsByClassName('sub'));

  let array = [body, container, contact, contactBtn, picture, tabs, tab, content, sub];

  array = array.flat();

  array.forEach(each => {
      each.classList.toggle('dark')
  });
}

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', () => {
    deselectTabs(tabs);
    deselectContent(tabContent);
    tabs[i].className = theme === 'light' ? 'tab selected' : 'tab selected dark';
    tabContent[i].className = 'tab-content show';
    setTimeout(() => {
      let docHeight = document.activeElement.clientHeight;
      let tabsRect = tabs[0].getClientRects()[0].x;
      if (docHeight < 1300) {
        window.scrollTo(0,0);
      } else {
        let width = window.innerWidth;
        window.scrollTo(0,tabsRect-30);
      }
    }, 100)
  })
}

(function() {
  contactBtn.addEventListener('click', () => sendMail())
})()

let sendMail = function () {
  window.location = "mailto:skirianov@gmail.com";
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  //dark mode
  let tweet = document.getElementById('follow');
  tweet.setAttribute('data-theme', 'dark');
  mode.innerText = "🌚";
  theme = 'dark';
  toggleClasses();
}

mode.addEventListener('click', themeToggle);
