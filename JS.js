// luo kevyt lumisadeefekti — simppeli ja sujuva
document.addEventListener('DOMContentLoaded', () => {
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
<<<<<<< HEAD

  // minimal: show message only when a button is clicked
  const messages = [
    `Christmas celebrates the birth of Jesus Christ, traditionally observed on December 25.`,
    `The English word “Christmas” comes from “Christ’s Mass.”`,
    `Many Christmas traditions were shaped during the Victorian era, especially in Britain.`,
    `The first Christmas card was made in 1843 in England.`,
    `Santa’s modern image—red suit, white beard—was popularized in the 20th century, especially by illustrators like Haddon Sundblom.`,
    `Santa’s reindeer names come from Clement C. Moore’s 1823 poem “A Visit from St. Nicholas.”`,
    `In some countries, gifts are given on December 24, others on December 25, and some on January 6.`,
    `Santa Claus goes by many names: Father Christmas, Père Noël, Weihnachtsmann, Joulupukki, and more.`,
    `The idea of Santa living at the North Pole was popularized in American children’s literature.`,
    `The Christmas tree originated in Germany in the 1500s.`,
    `Mistletoe was sacred to ancient Druids and symbolized peace.`,
    `Red and green became Christmas colors due to holly’s berries and leaves.`,
    `The star on top of a tree represents the Star of Bethlehem.`,
    `Candy canes were invented in the 1600s in Germany as treats for children in church.`,
    `Hot drinks like mulled wine and hot chocolate are common in winter celebrations.`,
    `In Japan, eating KFC on Christmas is a popular modern tradition.`,
    `In Australia and New Zealand, Christmas occurs during the summer, often celebrated outdoors.`,
    `Iceland has 13 Yule Lads, not just one Santa Claus.`,
    `In the Philippines, Christmas season begins as early as September.`,
    `Exchanging gifts became widespread due to both religious symbolism and modern commercialism.`,
    `Christmas markets originated in Germany and Austria.`,
    `Hanging stockings comes from a legend of Saint Nicholas secretly giving gold coins.`,
    `“White Christmas” by Bing Crosby is one of the best-selling songs of all time.`,
    `Christmas is celebrated in some form in over 160 countries worldwide.`
  ];

  const buttons = document.querySelectorAll('.calendar button');
  // lisää luukkuihin etu- ja takasisällöt ja avaa/tai sulje luukku klikkauksella
  buttons.forEach((btn, i) => {
    const num = btn.textContent.trim();
    btn.innerHTML = `<span class="front">${num}</span><span class="back">${messages[i] || ''}</span>`;
    btn.addEventListener('click', () => btn.classList.toggle('open'));
  });
});
=======
});
>>>>>>> 2273ec25f93b7a238dcb531fe27b841a81cf249d
