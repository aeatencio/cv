const html2pdf = require('html2pdf');

function toPDF() {
    var cv = document.querySelector('.cv');
    var opt = {
        margin: [0.27, 0.16],
        filename: 'Andrés Atencio (Profesor de Programación) CV.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { width: '21cm', height: '29.7cm' },
        jsPDF: { unit: 'cm', format: 'a4', orientation: 'portrait' },
    };
    html2pdf().set(opt).from(cv).save();
};