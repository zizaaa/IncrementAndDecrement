let countDisplay = document.getElementById('count-el');
let increment = document.getElementById('increment');
let deccrement = document.getElementById('decrement');
let save = document.getElementById('save');
let logDisplay = document.getElementById('logs');
let clear = document.getElementById('clear');
let del = document.getElementById('delete');
const confirmYes = document.getElementById('yes');
const confirmNo = document.getElementById('no');

let count = 0;
let id;
let logs = [];

//retrieve logs from local storage
let savedlogs = JSON.parse(localStorage.getItem('logs'));
if (Array.isArray(savedlogs)) {
    logDisplay.innerText = savedlogs + ',';
} else {
    logs = [];
}
//increament button
increment.onclick = () => {

    count += 1;
    countDisplay.innerHTML = count;
};
//decrment button
decrement.onclick = () => {

    if (count == 0) {
        count = 0;
        countDisplay.innerHTML = count;
    } else if (count > 0) {
        count -= 1;
        countDisplay.innerHTML = count;
    }
};
//save button
save.onclick = () => {
    id = Math.random();
    logs.push(count);
    console.log(logs);
    logDisplay.innerText += `${logs.slice(-1)},`;
    countLog();
    saveMyLogs();
};

// Delete Button
del.onclick = () => {

    if (logs.length >= -1) {
        logs.pop();
        logDisplay.innerHTML = logs;
    }
    // if (savedlogs >= 0) {
    //     savedlogs.pop();
    //     logDisplay.innerHTML = savedlogs;
    // }
    console.log(savedlogs);
    console.log(logs);
    saveMyLogs();
};

//Clear Button
clear.onclick = () => {
    console.log(logs);
    console.log(savedlogs);
    const logChecker = () => {
        if (logs.length === 0 && savedlogs.length === 0) {
            document.querySelector('.pop-up-container').style.transform = "scale(0)";
        } else {
            document.querySelector('.pop-up-container').style.transform = "scale(1)";
        }
    };
    logChecker();
};

//Yes Button
confirmYes.onclick = () => {
    logs = [];
    logDisplay.innerHTML = '';
    savedlogs = [];
    localStorage.removeItem("logs");
    document.querySelector('.pop-up-container').style.transform = "scale(0)";
};
//No button
confirmNo.onclick = () => {
    document.querySelector('.pop-up-container').style.transform = "scale(0)";
};


const countLog = () => {
    count = 0;
    countDisplay.innerHTML = count;
};

//Save Logs to local Storage
const saveMyLogs = () => {
    localStorage.setItem('logs', JSON.stringify(logs));
    console.log('saved');

};

//download
function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

// Start file download.
document.getElementById("download").addEventListener("click", function() {
    // Generate download of hello.txt file with some content
    let text = `${logs} \n -Jay Ar Nava `;
    let filename = "Log.txt";

    download(filename, text);
}, false);


// const secondPopup = () => {
//     document.getElementById('editTitle').addEventListener('click', function() {
//         document.querySelector('#secondpop-up').style.transform = 'scale(1)';
//     });
//     document.getElementById('edit').addEventListener('click', function() {
//         const editMe = document.getElementById('editMe');
//         editMe.contentEditable = true;
//         editMe.style.backgroundColor = "#dddbdb";
//         editMe.style.outline = 'none';
//     });
//     document.getElementById('done').addEventListener('click', function() {
//         const editMe = document.getElementById('editMe');
//         editMe.contentEditable = false;
//         editMe.style.backgroundColor = 'aliceblue';
//         document.querySelector('#secondpop-up').style.transform = 'scale(0)';
//     });
// };
// secondPopup();