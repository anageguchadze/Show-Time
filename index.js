document.querySelector('button').addEventListener('click', () => {
    let timeElement = document.querySelector('.current-time');
    if (!timeElement) {
        timeElement = document.createElement('p');
        timeElement.classList.add('current-time');
        document.querySelector('div').appendChild(timeElement);
    }
    const currentTime = new Date().toLocaleTimeString();
    timeElement.textContent = `${currentTime}`;
});
