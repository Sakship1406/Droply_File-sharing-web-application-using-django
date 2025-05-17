// app/static/app/js/main.js

const API_URL = "http://127.0.0.1:2000/api/files/";

function uploadFiles() {
    const input = document.getElementById("fileInput");
    const files = input.files;
    const formData = new FormData();

    for (let file of files) {
        formData.append("file", file);
    }

    fetch(API_URL, {
        method: "POST",
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        console.log("Files uploaded:", data);
        alert("Files uploaded successfully");
        input.value = "";  // Clear the file input
        loadFiles();  // Refresh the file list
    })
    .catch(error => console.error("Error uploading files:", error));
}

function downloadAll() {
    fetch(API_URL + "compress_files/", {
        method: "POST",
    })
    .then(response => {
        if (response.ok) {
            return response.blob();
        } else {
            alert("No files available for download.");
            throw new Error("No files to compress");
        }
    })
    .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "files.zip");
        document.body.appendChild(link);
        link.click();
        link.remove();
    })
    .catch(error => console.error("Error downloading files:", error));
}
