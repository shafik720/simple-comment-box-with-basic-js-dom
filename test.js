
// const dummy = document.getElementById('heading');
// dummy.style.color = "red"; 
/* const dummy = document.getElementsByClassName('blog');
for(const dummys of dummy){
    dummys.style.backgroundColor = 'yellow';
    dummys.style.padding = '15px';
    dummys.style.margin = '20px';
    dummys.style.textAlign = 'center';
    dummys.style.border = "3px solid blue";
    dummys.style.borderRadius = "15px";
} */

/* let dummy = document.querySelector('.blog');
for(let dummys of dummy){
    dummys.style.backgroundColor = 'yellow';
    dummys.style.padding = '15px';
    dummys.style.margin = '20px';
    dummys.style.textAlign = 'center';
} 
*/

let dummy = document.createElement('h2');
dummy.innerText = 'Naughty little fly, Why does he cry';

let blogsId = document.getElementById('blogs');
blogsId.appendChild(dummy);
