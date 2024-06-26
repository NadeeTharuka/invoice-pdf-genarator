# Invoice PDF Generator App

This project is a simple React application for generating invoice PDFs. It uses `jspdf` and `html2canvas` libraries to create a PDF from HTML content.

## Features

- Generate invoice PDFs from HTML content
- Basic invoice layout with customer information, items, and total amount
- Easy to extend and customize

## Technologies Used

- React
- jsPDF
- html2canvas

## Usage

1. The application will display a sample invoice.
2. Click the "Generate PDF" button to download the invoice as a PDF file.

## Project Structure

- `src/components/Invoice.js`: The Invoice component that displays the invoice layout.
- `src/App.js`: The main App component where the PDF generation logic resides.
- `src/App.css`: Basic styling for the application.

## Customization

You can customize the invoice by modifying the `Invoice` component in `src/components/Invoice.js`. Add or remove fields as needed to match your invoice requirements.

