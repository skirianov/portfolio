/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const tabs = document.getElementsByClassName('tab');
const tabLinks = document.getElementsByClassName('tab-link');
const tabContent = document.getElementsByClassName('tab-content');
const contactBtn = document.getElementById('contact-btn');
let themeBtn = document.getElementById('switch-btn');

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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixtQkFBbUI7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLG1CQUFtQjtBQUNyQztBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGFicyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RhYicpO1xuY29uc3QgdGFiTGlua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YWItbGluaycpO1xuY29uc3QgdGFiQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RhYi1jb250ZW50Jyk7XG5jb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QtYnRuJyk7XG5sZXQgdGhlbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3dpdGNoLWJ0bicpO1xuXG5sZXQgZGVzZWxlY3RUYWJzID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFyZ2V0Lmxlbmd0aDsgaSsrKXtcbiAgICB0YXJnZXRbaV0uY2xhc3NOYW1lID0gXCJ0YWIgaW50ZXJhY3RcIlxuICB9XG59O1xuXG5sZXQgZGVzZWxlY3RDb250ZW50ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhcmdldC5sZW5ndGg7IGkrKykge1xuICAgIHRhcmdldFtpXS5jbGFzc05hbWUgPSAndGFiLWNvbnRlbnQnO1xuICB9XG59O1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IHRhYnMubGVuZ3RoOyBpKyspIHtcbiAgdGFiTGlua3NbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZGVzZWxlY3RUYWJzKHRhYnMpO1xuICAgIGRlc2VsZWN0Q29udGVudCh0YWJDb250ZW50KTtcbiAgICB0YWJzW2ldLmNsYXNzTmFtZSA9ICd0YWIgc2VsZWN0ZWQnO1xuICAgIHRhYkNvbnRlbnRbaV0uY2xhc3NOYW1lID0gJ3RhYi1jb250ZW50IHNob3cnO1xuICB9KVxufVxuXG4oZnVuY3Rpb24oKSB7XG4gIGNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbGV0IGNvbnRhY3RUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdC10YWInKTtcbiAgICBkZXNlbGVjdFRhYnModGFicyk7XG4gICAgZGVzZWxlY3RDb250ZW50KHRhYkNvbnRlbnQpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0cycpLmNsYXNzTmFtZSA9IFwidGFiLWNvbnRlbnQgc2hvd1wiO1xuICAgIGNvbnRhY3RUYWIuY2xhc3NOYW1lID0gJ3RhYiBzZWxlY3RlZCc7XG4gIH0pO1xufSkoKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9