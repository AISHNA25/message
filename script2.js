const pickupLines = [
    "If you were a vegetable, you'd be a cute-cumber. 🥒",
    "Are you a magician? Because whenever I look at you, everyone else disappears. ✨",
    "Do you have a name, or can I call you mine? ❤️",
    "Are you French? Because Eiffel for you. 🗼",
    "Is your name Google? Because you have everything I’ve been searching for. 🔍",
    "Do you have a map? I keep getting lost in your eyes. 🗺️",
    "If kisses were snowflakes, I’d send you a blizzard. ❄️",
    "You must be made of copper and tellurium because you're Cu-Te. 🧪",
    "Are you a time traveler? Because I see you in my future. ⏳",
    "You light up my life like nobody else. 💡"
];

const pickupLineElement = document.getElementById("pickup-line");
const newLineButton = document.getElementById("new-line");

newLineButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * pickupLines.length);
    pickupLineElement.innerHTML = `<p>"${pickupLines[randomIndex]}"</p>`;
});


