function AddBox(tagtype) {
    const tagbox = document.getElementById('AddBox');
    if(tagtype === 'flie'){
        const newtag = document.createElement('input');
        newtag.type = 'file';
        tagbox.appendChild(newtag);
    }
    else{
        const newtag = document.createElement(tagtype);
        if(tagtype === 'a'){
            newtag.href = prompt('Enter a URL:', newtag.href);
            newtag.textContent = prompt('Enter a text:');
            
            newtag.contentEditable = false;
            tagbox.appendChild(newtag);
        }
        else if(tagtype === 'img'){
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.addEventListener('change', (e) => {
                const file = e.target.files[0]; 
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        const img = document.createElement('img');
                        img.src = event.target.result; 
                        img.style.maxWidth = '100%'; 
                        img.alt = 'Uploaded Image';
    
                        tagbox.appendChild(img);
                    };
                    reader.readAsDataURL(file); 
                }
            });
            input.click(); 
        }
        else
        {
            newtag.contentEditable = true;
            newtag.textContent = `New ${tagtype}`;
            tagbox.appendChild(newtag);
        }    
    }
}
