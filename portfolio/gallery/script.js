const dynamic=document.querySelector('.dynamic');
const search=document.querySelector('.search-container')
dynamic.addEventListener('click',()=>{
    dynamic.classList.toggle('hov');
    search.classList.toggle('hov');

})