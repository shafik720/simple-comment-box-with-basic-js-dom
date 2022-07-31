
document.getElementById('postButton').addEventListener('click',function(){
    let userName = document.getElementById('nameInput').value;
    let comment = document.getElementById('comment').value;

    if(document.getElementById('nameInput').value=='' || document.getElementById('comment').value==''){
        //reset name and comment box after user input
        document.getElementById('nameInput').value = '';
        document.getElementById('comment').value = '';
    }else{
        // getting value(name) from user
    let h5 = document.createElement('h5');
    h5.innerText = userName;

    // getting value(comment) from user
    let getComment = document.createElement('p');
    getComment.innerText = comment;

    // this is main div for comments div
    let mainCommentdiv = document.createElement('div');
    mainCommentdiv.classList.add('comments-box','border','border-2','p-3','rounded','my-3');
    
    // adding comments
    let commentDiv = document.createElement('div');
    commentDiv.classList.add('comments');
    commentDiv.appendChild(getComment);
    
    // adding names
    let nameDiv = document.createElement('div');
    nameDiv.classList.add('name','d-flex','justify-content-end');
    nameDiv.appendChild(h5);
    
    // adding name & comments together
    let mainBox = document.getElementById('mainBox');
    mainBox.appendChild(mainCommentdiv);

    mainCommentdiv.appendChild(commentDiv);
    mainCommentdiv.appendChild(nameDiv);

    //reset name and comment box after user input
    document.getElementById('nameInput').value = '';
    document.getElementById('comment').value = '';
    }

    
})