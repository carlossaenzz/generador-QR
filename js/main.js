// 📌 ejecuta el código JS solo cuando todos los elementos HTML ya están cargados
document.addEventListener('DOMContentLoaded', () => {
    // selecciono elementos del DOM por Id
    // guardo en variables los elementos HTML para poder controlarlos
    const qrcodeContainer = document.getElementById('qrcode-container');
    const input = document.getElementById('link-input');
    const generateBtn = document.getElementById('qr-form');


    // logica principal al hacer click en generarQR
    generateBtn.addEventListener('submit', e => {
        e.preventDefault(); // ✅ evita que el formulario se envíe

        const url = input.value.trim();

        // verifica que el campo no este vacío
        if (!url) {
            alert('Por favor ingresa la URL');
            input.focus();
            return;
        }

        // limpiar el QR anterior si existe
        qrcodeContainer.innerHTML = '';
        // Mostrar el contenedor cuando se genera el QR
        qrcodeContainer.style.display = 'block';

        // genera el código QR con los datos ingresados y lo muestra en el
        qr = new QRCode(qrcodeContainer, {
            text: input.value,
            width: 200,                     // ancho del QR
            height: 200,                   // alto del QR 
            colorDark: '#000000',        // colores del código y fondo
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H  // nivel de corrección (H = alta tolerancia a errores)

        });

    });

});



