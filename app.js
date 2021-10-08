const tabs = document.getElementsByClassName('tab');
const tabLinks = document.getElementsByClassName('tab-link');
const tabContent = document.getElementsByClassName('tab-content');
const contactBtn = document.getElementById('contact-btn');

let deselectTabs = function(target) {
  for (let i = 0; i < target.length; i++){
    target[i].className = "tab interact"
  }
};

let deselectContent = function (target) {
  for (let i = 0; i < target.length; i++) {
    target[i].className = 'tab-content';
  }
};

for (let i = 0; i < tabs.length; i++) {
  tabLinks[i].addEventListener('click', () => {
    deselectTabs(tabs);
    deselectContent(tabContent);
    tabs[i].className = 'tab selected';
    tabContent[i].className = 'tab-content show';
  })
}

(function() {

  contactBtn.addEventListener('click', () => {
    let contactTab = document.getElementById('contact-tab');
    deselectTabs(tabs);
    deselectContent(tabContent);
    document.getElementById('contacts').className = "tab-content show";
    contactTab.className = 'tab selected';
  });
})()
