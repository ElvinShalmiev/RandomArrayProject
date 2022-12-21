

let msg3 = document.getElementById("message3")

const randomNum = document.getElementById("btnRan")

function bubbleSort(arr) {
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
}

let numbers = []

function play() {
    let user_guess = document.getElementById("guess").value;
    if (user_guess < 1 || user_guess > 100) {
        alert("Please enter a number between 1 and 100");
    }
    else {
        numbers.push(user_guess);
        bubbleSort(numbers)
        msg3.textContent = numbers;


        user_guess = "";
    }

}


randomNum.addEventListener("click", () => {
    let num = Math.floor(Math.random() * 100);

    numbers.push(num)
    bubbleSort(numbers)
    msg3.textContent = numbers

})





