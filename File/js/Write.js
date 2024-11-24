const notion = document.getElementById('AddBox');

function AddBox(tag){
    const br = document.createElement('br')
    if(tag === 'Title'){
        const NewBox = document.createElement('strong')
        NewBox.style.fontSize = '25px'
        NewBox.contenteditable = true
        NewBox.textContent = 'Title1';

        notion.appendChild(NewBox);
        notion.appendChild(br)
    } else {
        const NewBox = document.createElement(tag)
        if(tag === 'a'){
            NewBox.href = prompt('Link :');
            NewBox.textContent = NewBox.href;
            NewBox.contenteditable = false
        } else{
            NewBox.textContent = 'New Text';
            NewBox.contenteditable = true
        }

        notion.appendChild(NewBox)
        notion.appendChild(br)
    }
}

function Save(){
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: '저장이 되지 않습니다.',
        heightAuto: false,
    });
}

function Post(){
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: '업로드 되지 않습니다.',
        heightAuto: false, 
    });
}