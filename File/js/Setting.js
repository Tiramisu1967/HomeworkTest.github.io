function Update(button) {
    const input = document.createElement('input');

    input.type = 'file';
    input.accept = 'image/*'; 

    input.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                button.style.backgroundImage = `url('${event.target.result}')`;
                button.style.backgroundSize = 'cover';
                button.style.backgroundPosition = 'center';
            };
            reader.readAsDataURL(file);
        }
    });

    input.click();
    
}

function alert(event){
    event.preventDefault();

    const pw = document.getElementById('userpw')
    const recheckpw = document.getElementById('recheckpw')

    if(pw.value == recheckpw.value){
        Swal.fire({
            title: '수정 불가',
            html: '<p>현재 수정이 <b>불가능</b>합니다.<br>추후 다시 시도해 주세요</p>',
            showCloseButton: true,
        })
    } else{
        Swal.fire('Error', 'PassWord가 일치하지 않습니다!', 'error');
    }
    
}