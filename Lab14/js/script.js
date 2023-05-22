let themeButtons = document.querySelectorAll('.theme-button');
let activeButton = null;

themeButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const clickedButton = this;
    const clickedThemeName = clickedButton.querySelector('span').textContent;

    if (activeButton) {
      activeButton.classList.remove('active');
    }

    clickedButton.classList.add('active');
    activeButton = clickedButton;

    if (clickedThemeName === 'Темная') {
      document.documentElement.setAttribute('data-theme-name', 'dark');
    } else if (clickedThemeName === 'Светлая') {
      document.documentElement.setAttribute('data-theme-name', 'light');
    } else {
      document.documentElement.setAttribute('data-theme-name', 'texture');
    }
  });
});

let styleButton = document.querySelectorAll('.card-view-item button');
let styleList = document.querySelector('.cards');
let activeStyleButton = null;

styleButton.forEach(function(button) {
    button.addEventListener('click', function() {
        const clickedStyleButton = this;
        const styleName = this.querySelector('.card-view-button span').textContent;

        if (activeStyleButton){
            activeStyleButton.classList.remove('active');
        }

        clickedStyleButton.classList.add('active');
        activeStyleButton = clickedStyleButton;

        if (styleName == 'Плитка'){
            styleList.classList.add('tile');
            styleList.classList.remove('standard');
            styleList.classList.remove('compact');
        }
        else if (styleName == 'Список'){
          styleList.classList.remove('tile');
          styleList.classList.add('standard');
          styleList.classList.remove('compact');
        }
        else{
          styleList.classList.remove('tile');
          styleList.classList.remove('standard');
          styleList.classList.add('compact');
        }
    })
});
