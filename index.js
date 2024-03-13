const btnEl = document.getElementById("btn");
const emojinameEl = document.getElementById("emoji-name");


const emoji = [];

async function getemoji() {
    let response = await fetch("https://emoji-api.com/emojis?access_key=737f8c8c98fa3a1ed42c3af13731f7ec82be8e02");
    
    data = await response.json();
    console.log(data);

    for(let i=0; i < 1500; i++) {
        emoji.push({
            emojiname: data[i].character,
            emojicode: data[i].unicodename,
            });
    }
}

getemoji();


btnEl.addEventListener("click", () => {
    const randomNum = Math.floor(Math.random()*emoji.length);
    btnEl.innerText = emoji[randomNum].emojiname;
    emojinameEl.innerText = emoji[randomNum].emojicode;
});