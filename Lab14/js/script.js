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

/*
This HomeWork completed by Samaratunga Nikandr
If you see this in homework from another people -- it's plagiarism
*/

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
        }
        else if (styleName == 'Список'){
            styleList.classList.add('standard');
        }
        else{
            styleList.classList.add('compact');
        }
    })
});

/*    if (styleList.classList.length > 1) {
    styleList.classList.remove(styleList.classList[element.classList.length - 1]);
}

let themeButton = document.querySelectorAll('.theme-button');
let themeName;
themeButton.forEach(function(button) {
    button.addEventListener('click', function() {
      themeName = this.querySelector('.theme-button span').textContent;
      this.classList.toggle('active')
    if (themeName == 'Темная'){
        document.documentElement.setAttribute('data-theme-name', 'dark');
    }
    else if (themeName == 'Светлая'){
        document.documentElement.setAttribute('data-theme-name', 'light');
    }
    else{
        document.documentElement.setAttribute('data-theme-name', 'texture');
    }
    })
});
*/

















/*
This HomeWork completed by Samaratunga Nikandr
If you see this in homework from another people -- it's plagiarism
*/
