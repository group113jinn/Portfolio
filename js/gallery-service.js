'use strict'
const MY_EMAIL = 'group113jinn@gmail.com';
var gProjects = [];

function createProject(id, name, url) {
    return {
        id: id,
        name: name,
        url: url,
        publishedAt: getPublishedAt()
    }
}

function createProjects() {
    gProjects.push(createProject('minesweeper', 'Minesweeper', 'projects/minesweeper/index.html'));
    gProjects.push(createProject('book-shop', 'Book-shop', 'projects/book-shop/index.html'));
    gProjects.push(createProject('touch-nums', 'Touch-nums', 'projects/touch-nums/index.html'));
    gProjects.push(createProject('names', 'Names', 'projects/names/index.html'));
    gProjects.push(createProject('photogrammm', 'Photogram', 'https://photogrammm.herokuapp.com/#/'));
    console.log(gProjects);
}

function getPublishedAt() {
    var timeStamp = 1596501021840;
    return new Date(timeStamp).toLocaleDateString('he-IL');
}


function sendEmail(subject, mailText) {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${MY_EMAIL}&su=${subject}&body=${mailText}`);
}