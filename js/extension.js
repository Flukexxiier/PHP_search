/* Writer: FPS */

const autoTheme = 'LightMode';
const darkDisplay = 'DarkMode';
const defaultModeConst = 'AutoDisplay';

let darkMode = localStorage.getItem('darkMode');
const content = document.getElementById('content');
const mode = document.getElementById('eventButton');
const defaultMode = document.getElementsByClassName('defaultMode');
const eventMode = document.getElementById('eventMode_animate');

const darkmodeEnable = () => {
    document.body.classList.add('dark_mode');
    // document.body.classList.add('dark_mode');
    localStorage.setItem('darkMode' , 'enable');
    mode.innerHTML = '<i class="fa-regular fa-lightbulb"></i> <a title="Dark mode is on">สว่าง</a>';
}

const darkmodeDisabled = () => {
    document.body.classList.remove('dark_mode');
    localStorage.setItem('darkMode' , null);
    mode.innerHTML = '<i class="fa-solid fa-moon"></i> <a title="Dark mode is off">มืด</a>';
}

if (darkMode === 'enable') {
    darkmodeEnable();
}

mode.addEventListener('click' , () => {

    if(defaultMode) {
        darkMode = localStorage.getItem('darkMode');
        if (darkMode !== 'enable') {
            darkmodeEnable();
        } else {
            darkmodeDisabled();
        }
    }

});

const textArea = document.getElementById('textArea');
const limit = document.getElementById('limitCount');
const alert = document.getElementById('displayAlert');
const numbers = 500;

limit.textContent = 0 + "/" + numbers;

textArea.addEventListener('keyup' , e => {
    textArea.style.height = 'auto';

    let Height = e.target.scrollHeight;
    textArea.style.height = `${Height}px`;
});

textArea.addEventListener('input' , function() {

    let varcharLength = textArea.value.length;
    limit.textContent = varcharLength + "/" + numbers;

    if(varcharLength > numbers) {
        textArea.style.borderColor = "#ff2851";
        limit.style.color = "#ff2851";
        alert.innerHTML = 'จะสามารถดำเนินการต่อไปได้ (แต่ไม่ควรเกิน)';

    } else {
        textArea.style.borderColor = "#b2b2b2";
        limit.style.color = "#737373";
        alert.innerHTML = '';
    }

});

const openLoadcontent = document.querySelectorAll('[data_target]');
const contentLoaded = document.getElementById('LoadContent');
const overlay = document.getElementById('invits');

function ActiveContent() {
    contentLoaded.classList.add('ContentActivated');
}

function inActive() {
    contentLoaded.classList.remove('ContentActivated');
}

/* function with progress X */
const fileAccept = document.getElementById('file');
const removeX = document.querySelector('#removeX');
const displayContent = document.getElementById('imgDisplay');
// const upload = '';

fileAccept.addEventListener('change' , function() {

    const reader = new FileReader();
    reader.addEventListener('load' , () => {
    const uploaded = reader.result;
        document.getElementById('imgDisplay').style.width = '100%';
        document.getElementById('imgDisplay').style.height = '100vh';
        document.getElementById('imgDisplay').style.transition = '.25s';
        document.getElementById('imgDisplay').style.borderRadius = '5px';
        document.getElementById('imgDisplay').style.backgroundSize = 'cover';
        document.getElementById('imgDisplay').style.backgroundPosition = 'center';
        document.getElementById('imgDisplay').style.backgroundImage = `url(${uploaded})`;
    });
    reader.readAsDataURL(this.files[0]);

});

// removeX.addEventListener('click' , function() {
//     fileAccept.value = '';
// });

/* Progress X */
const Form = document.getElementById('uploadForm');
const progress = document.querySelector('progress_load > .progress_loadData');
const textProgress = progress.querySelector('progress_txtnums');

uploadForm.addEventListener('submit' , uploadFile);

function uploadFile(e) {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    xhr.open('POST' , 'create.php');
    xhr.upload.addEventListener('progress' , e => {
        const percent = e.lengthComputable ? (e.loaded / e.total) * 100 :0;
        progress.style.width = percent.toFixed(2) + '%';
        progress.textContent = percent.toFixed(2) + '%';
    });
    xhr.setRequestHeader('Content-Type' , 'multipart/form-data');
    xhr.send(new FormData(uploadForm));
}

/* Nav */
window.addEventListener('click' , function() {

    const nv_flix = document.getElementById('nv_res');

    if(window.onclick) {
        nv_flix.classList.add('flix_active');
    } else {
        nv_flix.classList.remove('flix_active');
    }

});