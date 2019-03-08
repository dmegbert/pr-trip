window.onload = function() {
    getCountDown();

    getQuote();

    getPhoto(8);

    var counter = 0;

    setInterval(function () {
        if (counter === 8) {
            counter = 0;
        }
       getPhoto(counter);
       counter++;
    }, 2000);


    //Get countdown every second
    setInterval(function() {
        getCountDown();
    }, 1000);

    //Get random quote
    setInterval(function () {
        getQuote();
    }, 5000);
};

function getCountDown() {
    var puertoRicoTime = new Date("Mar 23, 2019 14:05:00").getTime();
    var now = new Date().getTime();
    var diff = puertoRicoTime - now;
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / (1000));
    document.getElementById('timer').innerHTML = days + ' Days ' + hours + ' Hours '
        + minutes + ' Minutes ' + seconds + ' Seconds ';
}

function getQuote() {
    var quotes = [
        'Countdown to Puerto Rico Arrival:',
        'Welcome to Puerto Rico!'
        ];
    var indexNumber = 0;
    var puertoRicoTime = new Date("Mar 23, 2019 14:05:00").getTime();
    var now = new Date().getTime();
    if (now >= puertoRicoTime) {
            indexNumber = 1;
    }
    document.getElementById('quote').innerHTML = quotes[indexNumber];
    document.getElementById('quote').style.color = getRandomColor();
}

function getPhoto(counter) {

    var photos = [
        'img/images-1.jpg',
        'img/images-2.jpg',
        'img/images-3.jpg',
        'img/images-4.jpg',
        'img/images-5.jpg',
        'img/images-6.jpg',
        'img/images-7.jpg',
        'img/images-8.jpg',
        'img/images-9.jpg'
        ];
    document.getElementById('beaches').src = photos[counter];
}

function getRandomColor() {
    var colors = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple",
        "pink"
    ];
    var indexNumber = Math.floor(Math.random() * 7);
    return colors[indexNumber];
}
