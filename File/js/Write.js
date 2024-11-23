function AddBox(tagtype) {
    const tagbox = document.getElementById('AddBox');
    const newtag = document.createElement(tagtype);
    if(tagtype === 'a'){
        newtag.href = prompt('Enter a URL:', newtag.href);
        newtag.textContent = prompt('Enter a text:');

        newtag.contentEditable = false;
        tagbox.appendChild(newtag);
    }
    else
    {
        newtag.contentEditable = true;
        newtag.textContent = `New ${tagtype}`;
        tagbox.appendChild(newtag);
    }
    
}
