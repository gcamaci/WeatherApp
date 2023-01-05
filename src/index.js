import style from './style.css'

const key = 'vN5BHjaVCeg1k0FRWZwB5I5pSv6lwEki';

const searchBtn = document.getElementById('search-btn')
const img = document.querySelector('img');
const searchInpt = document.getElementById('search-bar')

makeRequest("Hello")
function makeRequest(str){
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${key}&s=${str}`, {mode: 'cors'})
    .then((response) => {
        return response.json();
    })
    .then((response)=>{
        img.src = response.data.images.original.url;
    });
};

searchBtn.addEventListener('click', () => {
    makeRequest(searchInpt.value);

});