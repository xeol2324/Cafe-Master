function lanjutKePemesanan() {
    // Mengambil data dari form
    const namaPemesan = document.getElementById("namaPemesan").value;
    const nomerMeja = document.getElementById("nomerMeja").value;

    // Menyimpan data pemesan ke local storage (bisa diganti dengan cara penyimpanan data yang lebih aman di backend)
    const dataPemesan = {
        namaPemesan,
        nomerMeja,
    };
    localStorage.setItem("dataPemesan", JSON.stringify(dataPemesan));

    // Mengarahkan pengguna ke halaman pemesanan
    window.location.href = "pemesanan.html";
}
