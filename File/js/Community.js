document.addEventListener('DOMContentLoaded', () => {
    const most = document.getElementById('most-popular');
    const latest = document.getElementById('latest');
    const walk = document.getElementById('walk');
    const record = document.getElementById('record');
    const health = document.getElementById('health');

    AddPost(most);
    AddPost(latest);
    AddPost(walk);
    AddPost(record);
    AddPost(health);
});

function PostRandom(Num, min){
    return Math.floor(Math.random() * Num) + min
}

function AddPost(post){
    var Random = PostRandom(5, 3);
    var fixed = 0;
    for(var i = 0; Random > i; i++){
        const NewBox = document.createElement('button');
        let RandomImg = PostRandom(25, 1);
        do{
            RandomImg = PostRandom(25, 1)
        }while(fixed == RandomImg)
            fixed = RandomImg
        NewBox.style.backgroundImage = `url('../img/Pet/${RandomImg}.jpg')`
        NewBox.style.backgroundSize = 'cover'
        NewBox.onclick = () =>{
            Swal.fire('Error', 'Login해 주세요!', 'error')
        }
        post.appendChild(NewBox);
    }
}