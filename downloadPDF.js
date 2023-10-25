function downloadPDF(elementID, filename) {

    // Pokud název souboru není poskytnut, použijte výchozí název souboru
    filename = filename || 'report-cybercomply.pdf';

    // Capture the content of the dashboard with the given elementID
    html2canvas(document.querySelector("#" + elementID)).then(canvas => {
        var imgData = canvas.toDataURL('image/png');

        // Get the dimensions of the captured content
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;

        // Calculate the aspect ratio of the captured content
        const aspectRatio = imgWidth / imgHeight;

        // Calculate the dimensions for the PDF. 
        // Here, we're setting the width to a standard A4 width in points, and adjusting the height based on the aspect ratio.
        const pdfWidth = 210;  // A4 width in mm
        const pdfHeight = pdfWidth / aspectRatio;

        // Define the jsPDF variable and create a new instance of jsPDF with the calculated dimensions
        window.jsPDF = window.jspdf.jsPDF;
        const pdf = new window.jsPDF({
            orientation: aspectRatio > 1 ? 'l' : 'p', // Use landscape ('l') if width > height, else use portrait ('p')
            unit: 'mm',
            format: [pdfWidth, pdfHeight]
        });

        // Add the captured image to the PDF
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

        // Download the PDF
        pdf.save(filename);
    });
}
