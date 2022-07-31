
document.getElementById('postButton').addEventListener('click',function(){
    let userName = document.getElementById('nameInput').value;

    // this is name got from user
    let h5 = document.createElement('h5');
    h5.innerText = userName;

    

    // this is main div for comments div
    let mainCommentdiv = document.createElement('div');
    mainCommentdiv.classList.add('comments-box','border','border-2','p-3','rounded','my-3');
    
    // adding comments
    let commentDiv = document.createElement('div');
    commentDiv.classList.add('comments')
    
    // adding names
    let nameDiv = document.createElement('div');
    nameDiv.classList.add('name','d-flex','justify-content-end');
    nameDiv.appendChild(h5);
    
    let mainBox = document.getElementById('mainBox');
    mainBox.appendChild(mainCommentdiv);

    
    mainCommentdiv.appendChild(nameDiv);

})