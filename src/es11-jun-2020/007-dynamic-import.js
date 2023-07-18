const button = document.querySelector('#btn');

button.addEventListener('click', async function () {
    const module = await import('./007-module.js');
    console.log(module);
    module.hello();
})