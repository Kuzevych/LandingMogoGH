function count(cont) {
    let container = document.querySelectorAll(cont);
    container.forEach(el => {
        let count = 0;
        let element = el;
        let max = +element.getAttribute('data-count');
        for (let i = 0; i < 1; i++) {
            let interval = setInterval(() => {
                let number = count++;
                element.innerHTML = number;
                if (number >= max) {
                    clearInterval(interval)
                }
            }, 1);
        }
    });
    console.log('OK');
}

