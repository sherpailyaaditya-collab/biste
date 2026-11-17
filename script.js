/* FOUR DIGIT PIN */

const SECRET_PIN = "0430";

let entered = "";

const dots = document.querySelectorAll(
    ".pin-dots span"
);

const message = document.getElementById(
    "pinMessage"
);

const keypad = document.querySelector(".keypad");


function updateDots() {

    dots.forEach((dot, index) => {

        dot.classList.toggle(
            "filled",
            index < entered.length
        );

    });

}


keypad.addEventListener("click", function(event) {

    const key = event.target.dataset.key;

    if (!key) return;


    // DELETE BUTTON

    if (key === "clear") {

        entered = entered.slice(0, -1);

        message.textContent =
            "A four-digit secret, just between us.";

        updateDots();

        return;
    }


    // UNLOCK BUTTON

    if (key === "enter") {

        if (entered === SECRET_PIN) {

            document.getElementById("gate")
                .classList.add("hidden");

            document.getElementById("site")
                .classList.remove("hidden");

            window.scrollTo(0, 0);

        } else {

            message.textContent =
                "Not quite! Try again, my favourite person. ♡";

            entered = "";

            updateDots();

        }

        return;
    }


    // NUMBER BUTTONS

    if (entered.length < 4) {

        entered += key;

        updateDots();

        if (entered.length === 4) {

            message.textContent =
                "Tap the heart to unlock ♡";

        }

    }

});


/* LOVE LETTERS */

const letters = {

    miss: `
    If you're missing me, remember that distance
    or a busy day cannot make you any less
    important to me.

    Think of one of our happy memories and know
    that someone is always wishing you well.

    Sending you the biggest virtual hug. ♡
    `,

    sad: `
    It's okay to have difficult days.

    You don't have to be cheerful all the time
    or have everything figured out.

    Be gentle with yourself, take things one
    step at a time, and remember that you
    are valued exactly as you are. 🌷
    `,

    doubt: `
    I hope you never forget how capable you are.

    Keep learning, keep trying and keep moving
    towards your dreams.

    One difficult day or one mistake does not
    define you.

    I believe in your strength, and I am
    cheering for you. ✨
    `,

    love: `
    I love your little ways, your smile,
    your kindness and the person you are becoming.

    Thank you for the memories, the laughter
    and for being you.

    You matter so much to me. ❤️
    `

};


const letterButtons = document.querySelectorAll(
    ".letter"
);

const reveal = document.getElementById("reveal");


letterButtons.forEach(button => {

    button.addEventListener("click", function() {

        const letterName = this.dataset.letter;

        reveal.textContent = letters[letterName];

        reveal.style.display = "block";

        reveal.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });

    });

});