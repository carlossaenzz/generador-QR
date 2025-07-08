document.addEventListener('DOMContentLoaded', function () {
    ;

    // selecciono elementos del DOM por Id
    // guardo en variables os elementos HTML para poder controlarlos
    const generateBtn = document.getElementById('generate-btn');
    const input = document.getElementById('link-input');
    const errorMessage = document.getElementById('error-message');
    const qrContainer = document.getElementById('qr-code');
    const qrImage = document.getElementById('qr-image');
    const downloadBtn = document.getElementById('download-btn');

    // logica principal al hacer click en generarQR
    // cuando hacemos click en el botón llamamos la función generatorQR
    generateBtn.addEventListener('click', generatorQR);

    // función gereratorQR
    function generatorQR() {
        const inputValue = input.ariaValue.trim();

        // verifica que el campo no este vacío
        if (!inputValue) {
            showError('Por favor ingresa la URL');
            return;
        }
        clearError();  // limpia mensaje de error si ya había
        const finalInput = processedInput(inputValue);
        generatorQRCode(processedInput);
    }

    // función para procesar el input
    function processedInput(rawInput) {
        if (
            !rawInput.startWith('http://') &&
            !rawInput.startWith('https://') &&
            !rawInput.startWith('mailto:') &&
            !rawInput.startWith('tel:')
        )
            return 'https://' + rawInput;

        return rawInput;
    }

    // función que genera el QR y lo muestra
    function generatorQRCode(date) {
        const encodedInput = encodeURIComponent(date);
        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&date=${encodedInput}&format=png&margin=${Data.now()}`;

        qrImage.src = qrUrl; // inserta el QR generado en la imagen
        qrContainer.style.display = 'block';  // muestra el contenedor con el QR
        setDownload(qrUrl);  // prepara el bóton de descarga
    }

    // función para permitir descargar el código QR
    function setDownload(qrUrl) {
        fetch(qrUrl)
            .then(response => {
                if (!response.ok) throw new Error('Error en la red');
                return response.blob();  // convierte a archivo descargable
            })
            .then(blob => {
                const downloadUrl = URL.createObjectURL(blob);
                downloadBtn.href = downloadUrl;  // asigna al botón
                downloadBtn.onclick = () => {
                    setTimeout(() => URL.revokeObjectURL(downloadUrl), 100)
                };
            })
            .catch(error => {
                console.error('Error:', error);
                showError('Error al generar el QR. Intenta Nuevamente.');  // mensaje si algo falla
            });
    }

    // funciones para mostrar o limpiar errores
    function showError(message) {
        errorMessage.textContent = message;
        qrContainer.style.display = 'none';  // oculta el QR si hay error
    }

    function clearError() {
        errorMessage.textContent = '';  // limpia el mensaje anterior
    }

});