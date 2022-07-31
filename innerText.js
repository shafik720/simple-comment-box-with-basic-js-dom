
// js দিয়ে নতুন div এড করার কোড 
let blog = document.createElement('div');

let hTwo = document.createElement('h2');
let para = document.createElement('p');
hTwo.innerText = "This is New header";
para.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cumque dolores in nisi nulla, harum aliquam dolorem tenetur ex officia?";

blog.appendChild(hTwo);
blog.appendChild(para);
blog.classList.add('blog');

let sectionid = document.getElementById('sectionId');
sectionid.appendChild(blog);

// সব html এর div কে css দিয়ে স্টাইল করার কোড 
let blogClass = document.getElementsByClassName('blog');
for(let elements of blogClass){
    elements.style.backgroundColor = '#0DC143';
    elements.style.padding = '10px';
    elements.style.margin = '15px';
    elements.style.textAlign = 'center';
    elements.style.border = "3px solid blue";
    elements.style.borderRadius = '10px';
}


