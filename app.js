const tabs = document.getElementsByClassName('tab');
const tabLinks = document.getElementsByClassName('tab-link');

for (let i = 0; i < tabs.length; i++) {
  tabLinks[i].addEventListener('click', () => {
    for (let j = 0; j < tabs.length; j++) {
      tabs[j].className = 'text-gray-500 p-2 tab';
    }
    tabs[i].className = 'border-b-4 border-blue-400 p-2 tab';
  })
}