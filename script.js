
function previewImagem(event) {
    const reader = new FileReader();
    reader.onload = function(){
        const output = document.createElement('img');
        output.src = reader.result;
        document.getElementById('previewContainer').innerHTML = '';
        document.getElementById('previewContainer').appendChild(output);
    };
    reader.readAsDataURL(event.target.files[0]);
}
