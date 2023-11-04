const btnQrCode = document.querySelector('#qr-form button');
const inputQrCode = document.querySelector('#qr-form input');
const imageQrCode = document.querySelector('#qr-code img');
const container = document.querySelector('.container');

// Funcoes
function gerarQrCode(){
    const valorInput = inputQrCode.value.trim();

    if(!valorInput) return;

    btnQrCode.innerHTML = 'Gerando Qr Code...';

    imageQrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${valorInput}`;

    imageQrCode.addEventListener('load', () => {
        container.classList.add('active');
        btnQrCode.innerHTML = 'Gerar outro QR Code ';
        inputQrCode.value = '';
    });


}

// Eventos
btnQrCode.addEventListener('click', () => {
    gerarQrCode();
})
inputQrCode.addEventListener('keyup', (e) => {
    if(e.code === 'Enter'){
        gerarQrCode();
    }
})