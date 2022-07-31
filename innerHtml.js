
let blog = document.createElement('div');
blog.classList.add('blog');
blog.innerHTML = `
            <h2>This is new tab</h2>
            <p id="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cumque dolores in nisi nulla, harum aliquam dolorem tenetur ex officia?</p>
`;
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


// onclick event

/* function clicked(){
    document.body.style.backgroundColor = 'blue';
}

let clickButton = document.getElementById('btnId');

clickButton.onclick = clicked;
function clicked(){
    document.body.style.backgroundColor = 'yellow';
} */

/* const btn = document.getElementById('btnId');

btn.addEventListener('click', btnEvent) ;

function btnEvent(){
    document.body.style.backgroundColor = 'yellow';
} */

/* // Change div background 
const btnId = document.getElementById('divBg');

btnId.addEventListener('click', function(){
    const blogs = document.getElementById('blogs');
    blogs.style.backgroundColor = "yellow";
});

// Change Text color
const textColor = document.getElementById('textColor');
textColor.addEventListener('click', function(){
    const text = document.getElementById('heading');
    text.style.color = "#FD5711";
}) */

// Change div background
document.getElementById('divBg').addEventListener('click', function(){
    document.getElementById('blogs').style.backgroundColor = 'yellow';
})

// Change text Color
document.getElementById('textColor').addEventListener('click',function(){
    document.getElementById('heading').style.color = 'red';
})

// Change paragraph text by taking input from a input field
document.getElementById('inputBtn').addEventListener('click', function(){
    let inputValue = document.getElementById('inputText');
    
    let paraText = document.getElementsByClassName('paragraph');
    for(const para of paraText){
        para.innerText = inputValue.value;
    }
    
    inputValue.value = '';
})


