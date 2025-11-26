// Kertoo nykyisen päivän

const today = new Date();
const currentMonth = today.getMonth() + 1;
const currentDay = today.getDate();

// Lista hauskoja factoja joulusta
const funFacts = {
    "1": `Christmas celebrates the birth of Jesus Christ, traditionally observed on December 25.`,
    "2": `The English word “Christmas” comes from “Christ’s Mass.”`,
    "3": `Many Christmas traditions were shaped during the Victorian era, especially in Britain.`,
    "4": `The first Christmas card was made in 1843 in England.`,
    "5": `Santa’s modern image—red suit, white beard—was popularized in the 20th century, by illustrators like Haddon Sundblom.`,
    "6": `Santa’s reindeer names come from Clement C. Moore’s 1823 poem “A Visit from St. Nicholas.”`,
    "7": `In some countries, gifts are given on December 24, others on December 25, and some on January 6.`,
    "8": `Santa Claus goes by many names: Father Christmas, Père Noël, Weihnachtsmann, Joulupukki, and more.`,
    "9": `The idea of Santa living at the North Pole was popularized in American children’s literature.`,
    "10": `The Christmas tree originated in Germany in the 1500s.`,
    "11": `Mistletoe was sacred to ancient Druids and symbolized peace.`,
    "12": `Red and green became Christmas colors due to holly’s berries and leaves.`,
    "13": `The star on top of a tree represents the Star of Bethlehem.`,
    "14": `Candy canes were invented in the 1600s in Germany as treats for children in church.`,
    "15": `Hot drinks like mulled wine and hot chocolate are common in winter celebrations.`,
    "16": `In Japan, eating KFC on Christmas is a popular modern tradition.`,
    "17": `In Australia and New Zealand, Christmas occurs during the summer, often celebrated outdoors.`,
    "18": `Iceland has 13 Yule Lads, not just one Santa Claus.`,
    "19": `In the Philippines, Christmas season begins as early as September.`,
    "20": `Exchanging gifts became widespread due to both religious symbolism and modern commercialism.`,
    "21": `Christmas markets originated in Germany and Austria.`,
    "22": `Hanging stockings comes from a legend of Saint Nicholas secretly giving gold coins.`,
    "23": `“White Christmas” by Bing Crosby is one of the best-selling songs of all time.`,
    "24": `Christmas is celebrated in some form in over 160 countries worldwide.`,
}

function adventWindowDate(id) {
    console.log(`${id}`);
    if (currentMonth === 12) {
        if (currentDay === Number(id)) {
            document.getElementById(id).innerHTML = funFacts[id]
        }
        if (currentDay >= Number(id)) {
            document.getElementById(id).innerHTML = funFacts[id]
        }
    }
}

//Laitta nykyisen päivän ympärille punaisen reunan
document.addEventListener('DOMContentLoaded', init)

function init() {
    markCurrentDate()
    snowflake()
}

function markCurrentDate() {
    const tellCurrentDay = "" + currentDay
    const currentDateElem = document.getElementById(tellCurrentDay)
    if (currentDateElem === null) {
        return
    }
    currentDateElem.style.border = "3px solid red";
}

// luo kevyt lumisadeefekti — simppeli ja sujuva
function snowflake() {
    const count = window.innerWidth < 600 ? 18 : 36;
    const container = document.createElement('div');
    container.className = 'snow';
    document.body.appendChild(container);

    for (let i = 0; i < count; i++) {
        const f = document.createElement('span');
        f.className = 'snowflake';
        f.textContent = '❄';
        const size = (Math.random() * 12 + 10).toFixed(1);
        const left = Math.random() * 100;
        const dur = (Math.random() * 12 + 8).toFixed(1);
        const delay = (Math.random() * -10).toFixed(1);
        f.style.fontSize = size + 'px';
        f.style.left = left + '%';
        f.style.animationDuration = dur + 's';
        f.style.animationDelay = delay + 's';
        f.style.opacity = (0.5 + Math.random() * 0.6).toFixed(2);
        container.appendChild(f);
    }
}