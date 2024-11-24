function alert(event){
    event.preventDefault();

    const name = document.getElementById('username')
    const id = document.getElementById('userid')
    const pw = document.getElementById('userpw')
    const recheckpw = document.getElementById('recheckpw')
    const email = document.getElementById('useremail')

    if(name.value){
        if(id.value){
            if(pw.value){
                if(recheckpw.value == pw.value){
                    if(email.value){
                        Swal.fire({
                            title: '회원가입 불가',
                            html: '<p>현재 회원가입이 <b>불가능</b>합니다.<br>추후 다시 시도해 주세요</p>',
                            showCloseButton: true,
                        })
                    }
                } else{
                    Swal.fire('Error', 'PassWord가 일치하지 않습니다!', 'error')
                }
            }
            else
            {
                Swal.fire('Error', 'PassWord을 입력해 주세요!', 'error')
            }
        } 
        else
        {
            Swal.fire('Error', 'ID을 입력해 주세요!', 'error')
        }
    } else {
        Swal.fire('Error', '이름을 입력해 주세요!', 'error')
    }
    
}