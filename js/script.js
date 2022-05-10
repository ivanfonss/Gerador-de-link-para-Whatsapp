

function mandaZap(){
        let x = document.getElementById('texto').value;
        let numero = document.getElementById('telefone').value;
        if (!numero){
            document.getElementById('erro').innerHTML= '<p id="err">Acho que vc esqueceu alguma coisa.<br> Acerta o alvo e tenta denovo...<br><br><a href="index.html"><img src="img/alvo.png" alt="imagem alvo"></a></p>';
           
        }else{
        let res = 'https://api.whatsapp.com/send?phone=55'+ numero.toString() +'&text='+x.toString();
        document.getElementById('resposta').value=res;
        window.open(res);}
}

var img = document.getElementById('img');

function copia(){
	let textArea = document.getElementById('resposta');
    textArea.select();
	document.execCommand('copy');
	document.getElementById('resposta').value="*****Link Copiado*****";
}
function geraLink(){
    let x = document.getElementById('texto').value;
    let numero = document.getElementById('telefone').value;
    if (!numero){
        document.getElementById('erro').innerHTML= '<p id="err">Acho que vc esqueceu alguma coisa.<br> Acerta o alvo e tenta denovo...<br><br><a href="index.html"><img src="img/alvo.png" alt="imagem alvo"></a></p>';
       
    }else{
    let res = 'https://api.whatsapp.com/send?phone=55'+ numero.toString() +'&text='+x.toString();
    document.getElementById('resposta').value=res;}
}
img.addEventListener('click', function () {
    mandaZap();
});
lk.addEventListener('click', function () {
    geraLink();
});

cop.addEventListener('click', function () {
    copia();
});