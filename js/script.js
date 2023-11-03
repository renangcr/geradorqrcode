const Container = document.querySelector('.container');
const qrCodeBtn = document.querySelector('#qr-form button');
const qrCodeInput = document.querySelector('#qr-form input');
const qrCodeImage = document.querySelector('#qr-code img');

// FUNCOES
async function generateQrCode(){
    const qrCodeInputValue  = qrCodeInput.value.trim();

    if(!qrCodeInputValue) return;
    qrCodeBtn.innerHTML = 'Gerando QR Code...';

    qrCodeImage.src = await `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    qrCodeImage.addEventListener('load', () => {
        Container.classList.add('active');
        qrCodeBtn.innerHTML = 'Gerar QR Code';
        qrCodeInput.value = '';
    })


}

// EVENTOS
qrCodeBtn.addEventListener('click', () => {
    generateQrCode();
});

qrCodeInput.addEventListener('keydown', (e) => {
    if(e.code === 'Enter'){
        generateQrCode();
    }
})