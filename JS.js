document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.calendar');
    if (!container) return;
    const buttons = Array.from(container.querySelectorAll('button'));
    if (!buttons.length) return;

    // Palauttaa true jos halutaan sijoittaa satunnaisesti (suuri näyttö)
    function shouldScatter() {
        const style = getComputedStyle(container);
        return style.display !== 'grid' && style.position !== 'static';
    }

    function placeButtons() {
        if (!shouldScatter()) {
            // mobiiliasetus: poista inline-sijoitukset
            buttons.forEach(b => {
                b.style.left = '';
                b.style.top = '';
                b.style.position = '';
                b.style.transform = '';
            });
            return;
        }

        const rect = container.getBoundingClientRect();
        const placed = [];

        buttons.forEach(btn => {
            btn.style.position = 'absolute';
            // varmista että offset mitat ovat ajantasaiset
            const bw = btn.offsetWidth || parseInt(getComputedStyle(btn).width) || 80;
            const bh = btn.offsetHeight || parseInt(getComputedStyle(btn).height) || 80;

            let attempts = 0;
            let ok = false;
            let x = 0, y = 0;
            const padding = 20; // isompi reuna, jotta napit eivät jää kiinni reunoihin

            while (attempts < 300 && !ok) {
                x = Math.floor(Math.random() * Math.max(0, rect.width - bw - padding * 2)) + padding;
                y = Math.floor(Math.random() * Math.max(0, rect.height - bh - padding * 2)) + padding;

                ok = placed.every(p => {
                    const dx = p.x - x;
                    const dy = p.y - y;
                    // Etäisyysvaatimus: suurempi marginaali (estää liimautumisen)
                    const minDistance = Math.max(p.w, p.h, bw, bh) * 1.0 + 18;
                    return Math.hypot(dx, dy) > minDistance;
                });
                attempts++;
            }

            placed.push({ x, y, w: bw, h: bh });
            btn.style.left = x + 'px';
            btn.style.top = y + 'px';
            // pienet satunnaiset kiertoasteet näyttävyyden vuoksi
            btn.style.transform = `rotate(${(Math.random() * 6 - 3).toFixed(2)}deg)`;
        });
    }

    // Aseta napit ensimmäisellä latauksella ja myös ikkunan koon muuttuessa
    function refresh() {
        placeButtons();
    }

    refresh();
    let to;
    window.addEventListener('resize', () => {
        clearTimeout(to);
        to = setTimeout(refresh, 140);
    });
});