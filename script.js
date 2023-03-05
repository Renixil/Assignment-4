var timerId; // stores reference to the timeout

function startTimer() {

    var timeLeft = 10;
    const timerEl = document.getElementById("DisplayCountdown"); // ID tag h2

    const countDown = function () {

        timeLeft--; //Decrement the timeLeft by 1
        timerEl.innerHTML = `T-${timeLeft}`;

        if (timeLeft === 5) {
            timerEl.innerHTML = `Warning Less than ½ way to launch, T-${timeLeft} `; // This change the text of h2 into 'Warning Less than ½ way to launch, time left = ' when the timer hit 5
            timerId = setTimeout(countDown, 1000) // this will repeat the decrementing function of the countdown
        } else if (timeLeft === 0) {
            var rocket = document.getElementById("rocket")
            timerEl.innerHTML = "Blast Off!"; // This change the text of h2 into 'BlastOff' when the timer hit
          
        } else {
            timerId = setTimeout(countDown, 1000); //setTimeout is a function that takes 2 arguments, 1 argument is a function, and 2nd is time or miliseconds. 1000ms = 1second. It will call the function every second. This will run the function indefinetly. This also store to timerId for a reference to stop timer.

        }

    };

    countDown(); // This starts the countdown after button clicked.
}

function stopTimer() {
    clearTimeout(timerId); //clearTimeout, takes one argument of the reference settimeout in this case is the timerId, and stop it from counting.
}


function validateUser() {
    var userNameElement = document.querySelector('.userName')
    if (userNameElement) {
        userNameElement.remove()
    }

    //value is a property of input element that returns the value of the input element
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var badge = Number(document.getElementById("badge").value); // Number() is a function that convert string to number
    var parent = document.getElementById('userInput')
    var newChild = document.createElement('h2')

    //length is a property of string that returns the length of the string, and it is a number.

    if (firstName.length <= 20 && lastName.length <= 20 && badge < 1000) {
        newChild.textContent = `Welcome ${firstName} ${lastName}, your badge number is ${badge}`
        newChild.className = 'userName'
        parent.appendChild(newChild)
        var countdown = document.querySelector('.countdown-container')
        countdown.style.display = 'block'
        document.getElementById('submit').disabled = true
        userNameElement = newChild;

    } else {
        newChild.textContent = `Please enter valid information, name must be less than 20 characters and badge number must be less than 1000`
        newChild.classList.add('userName')
        parent.appendChild(newChild)
    }
}
