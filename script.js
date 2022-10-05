let tries = 6;
let dynamicList = [];
let secretWordClue;
let secretWordSorted;
const words = [

    word001={
        name: "GRAPE",
        clue: "FRUIT"
    },

    word002={
        name: "STRAWBERRY",
        clue: "FRUIT"
    },

    word003={
        name: "ORANGE",
        clue: "FRUIT"
    },

    word004={
        name: "BANANA",
        clue: "FRUIT"
    },

    word005={
        name: "WATERMELON",
        clue: "FRUIT"
    },

    word006={
        name: "BEAR",
        clue: "ANIMAL"
    },

    word007={
        name: "DOG",
        clue: "ANIMAL"
    },

    word008={
        name: "CAT",
        clue: "ANIMAL"
    },

    word009={
        name: "ELEPHANT",
        clue: "ANIMAL"
    },

    word010={
        name: "PANDA",
        clue: "ANIMAL"
    },

    word011={
        name: "GIRAFFE",
        clue: "ANIMAL"
    },

    word012={
        name: "HEAD",
        clue: "BODY PARTS"
    },

    word013={
        name: "ARMS",
        clue: "BODY PARTS"
    },

    word014={
        name: "MOUTH",
        clue: "BODY PARTS"
    },

    word015={
        name: "LEGS",
        clue: "BODY PARTS"
    },

    word016={
        name: "EARS",
        clue: "BODY PARTS"
    },

    word017={
        name: "NOSE",
        clue: "BODY PARTS"
    },

    word018={
        name: "FINGERS",
        clue: "BODY PARTS"
    },

    word019={
        name: "TEETHBRUSH",
        clue: "OBJECT"
    },

    word020={
        name: "PENCIL",
        clue: "OBJECT"
    },

    word021={
        name: "CUP",
        clue: "OBJECT"
    },

    word022={
        name: "NOTEBOOK",
        clue: "OBJECT"
    },

    word023={
        name: "BOOTLE",
        clue: "OBJECT"
    },

    word024={
        name: "LIGHTER",
        clue: "OBJECT"
    },

    word025={
        name: "WHEEL",
        clue: "OBJECT"
    },

    word026={
        name: "MAP",
        clue: "OBJECT"
    },

    word027={
        name: "SHIRT",
        clue: "CLOTHES"
    },

    word028={
        name: "SKIRT",
        clue: "CLOTHES"
    },

    word029={
        name: "DRESS",
        clue: "CLOTHES"
    },

    word030={
        name: "PANTS",
        clue: "CLOTHES"
    },

    word031={
        name: "ELEVEN",
        clue: "STRANGER THINGS"
    },

    word032={
        name: "JEANS",
        clue: "CLOTHES"
    },

    word033={
        name: "SOCKS",
        clue: "CLOTHES"
    },

    word034={
        name: "BOOTS",
        clue: "CLOTHES"
    },

    word035={
        name: "BATHROOM",
        clue: "HOUSING"
    },

    word036={
        name: "BEDROOM",
        clue: "HOUSING"
    },

    word037={
        name: "ROOM",
        clue: "HOUSING"
    },

    word038={
        name: "LAUNDRY",
        clue: "HOUSING"
    },

    word039={
        name: "KITCHEN",
        clue: "HOUSING"
    },

    word040={
        name: "DEMOGORGON",
        clue: "STRANGER THINGS"
    },

    word041={
        name: "NORWAY",
        clue: "COUNTRY"
    },

    word042={
        name: "PORTUGAL",
        clue: "COUNTRY"
    },

    word043={
        name: "BRAZIL",
        clue: "COUNTRY"
    },

    word044={
        name: "CHINA",
        clue: "COUNTRY"
    },

    word045={
        name: "MALDIVES",
        clue: "COUNTRY"
    },

    word046={
        name: "ITALY",
        clue: "COUNTRY"
    },

    word047={
        name: "DUBAI",
        clue: "COUNTRY"
    },

    word048={
        name: "SWITZERLAND",
        clue: "COUNTRY"
    },

    word049={
        name: "NETHERLANDS",
        clue: "COUNTRY"
    },

    word050={
        name: "NETHERLANDS",
        clue: "COUNTRY"
    },

    word051={
        name: "FOOTBALL",
        clue: "SPORTS"
    },

    word052={
        name: "VOLLEYBALL",
        clue: "SPORTS"
    },

    word053={
        name: "BASKET",
        clue: "SPORTS"
    },

    word054={
        name: "HANDBALL",
        clue: "SPORTS"
    },

    word055={
        name: "BADMINTON",
        clue: "SPORTS"
    },

    word056={
        name: "CAR",
        clue: "TRANSPORT"
    },

    word057={
        name: "BUSS",
        clue: "TRANSPORT"
    },

    word058={
        name: "TRAIN",
        clue: "TRANSPORT"
    },

    word059={
        name: "SUBWAY",
        clue: "TRANSPORT"
    },

    word060={
        name: "BICYCLE",
        clue: "TRANSPORT"
    },
];

function createSecretWord(){
    const indexWord = parseInt(Math.random() * words.length);

    secretWordSorted = words[indexWord].name;
    secretWordClue = words[indexWord].clue;

};
 createSecretWord();

 console.log(secretWordSorted)

function appearWordInScreen(){
    const clue = document.getElementById("clue");
    clue.innerHTML = secretWordClue;

    const wordScreen = document.getElementById("secret-word");
    wordScreen.innerHTML = "";

    for (i = 0; i < secretWordSorted.length; i++) {
        if (dynamicList[i] == undefined) {
            dynamicList[i] = "&nbsp;"
            wordScreen.innerHTML = wordScreen.innerHTML + "<div class='letters'>"+ dynamicList[i] + "</div>"
        } else {
            wordScreen.innerHTML = wordScreen.innerHTML + "<div class='letters'>"+ dynamicList[i] + "</div>"
        }
    }
}; 
appearWordInScreen();

function verifyChoosedLetter(letter){
    document.getElementById("key-" + letter).disabled = true;
    if(tries > 0) {
        changeLetterStyle("key-" + letter);
        comparelists(letter);
        appearWordInScreen();
    }
};

function changeLetterStyle(key){
    document.getElementById(key).style.background = "transparent";
    document.getElementById(key).style.color = "#000000";
}

function comparelists(letter){
    const pos = secretWordSorted.indexOf(letter);
    if(pos < 0){
         //if the user make a mistake
        tries--
        document.getElementById('Lives').innerText = "Remaining Lives : " + tries

        loadImageHangman();
        // console.log("wrong word bhsdk")
        
        if(tries == 0){
            // Get the modal
                const modal = document.getElementById("myModal");
                    document.getElementById('NewTxt').innerText = "Correct word is : " + secretWordSorted
                    
                // Get the <span> element that closes the modal
                const span = document.getElementsByClassName("close")[0];
                modal.style.display = "block";
                // modal("helooo bhsdk")

                // When the user clicks on <span> (x), close the modal
                span.onclick = function() {
                 modal.style.display = "none";
}

            // When the user clicks anywhere outside of the modal, close it
                window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
            }
}
            // openModal("OHHHH you lost :(", "The secret word was: " + secretWordSorted + "<br> <br> Work on javascript so you get yourself better");
        }
//if the user makes a hit
    } else { 
        for(i = 0; i < secretWordSorted.length; i++) {
            if(secretWordSorted[i] == letter) {
                dynamicList[i] = letter;
            }
        }
    }

    let victory = true;
    for(i = 0; i < secretWordSorted.length; i++){
        if(secretWordSorted[i] != dynamicList[i]){
            victory = false;
        }
    }

    if(victory == true) {
        // Get the modal
        const modal = document.getElementById("myModal");
        document.getElementById('ptag').innerText = "Now focus on javascript and make more projects";
        document.getElementById("ptag").style.fontSize = "30"
        document.getElementById('NewTxt').innerText = "Congratulation you won";
        
    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    // modal("helooo bhsdk")

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
     modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
}
}
        // window.alert("Congradulation bhsdk!");
        // openModal("Congratulations!", "You have discovered the upside down... watch out for the Snowman!");
        tries = 0;
    }
};
function loadImageHangman(){
    switch(tries){
        case 5:
            document.getElementById("images").style.backgroundImage = "url('./img/1.png')";
            break;

        case 4:
            document.getElementById("images").style.backgroundImage = "url('./img/2.png')";
            break;

        case 3:
            document.getElementById("images").style.backgroundImage = "url('./img/3.png')";
            break;

        case 2:
            document.getElementById("images").style.backgroundImage = "url('./img/4.png')";
            break;

        case 1:
            document.getElementById("images").style.backgroundImage = "url('./img/5.png')";
            break;

        case 0:
            document.getElementById("images").style.backgroundImage = "url('./img/bruhh.png')";
            break;

        default:
            document.getElementById("images").style.backgroundImage = "url('./img/hangman.png')";
            break;
    }
};

let btnNewGame = document.querySelector("#btnNewGame");
btnNewGame.addEventListener("click", function(){
    location.reload();
});

function refreshPage(){
    window.location.reload();
}

