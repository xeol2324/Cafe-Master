const menuData = {
    'roti-pisang': { name: 'Roti Pisang', price: 8000 },
    'roti-keju': { name: 'Roti Keju', price: 7000 },
    'roti-coklat': { name: 'Roti Coklat', price: 6000 },
    'roti-susu': { name: 'Roti Susu', price: 7000 },
    'roti-nanas': { name: 'Roti Nanas', price: 9000 },
    'americano': { name: 'Americano', price: 15000 },
    'latte': { name: 'Latte', price: 15000 },
    'cappucino': { name: 'Cappucino', price: 15000 },
    'kopi-gula-aren': { name: 'Kopi Gula Aren', price: 20000 },
    'jus-buah': { name: 'Jus Buah', price: 10000 },
};


// POINT 02
class Parent {
    constructor(brand) {
    }
}

class Child extends Parent {
    constructor(brand, mod) {
    super(brand);
    this.model = mod;
    }

    updateKeranjang() {
        const keranjangList = document.getElementById('keranjangList');
        keranjangList.innerHTML = '';
        let totalPesanan = 0;
    
        keranjangPesanan.forEach((item, index) => {
            const listItem = document.createElement('li');
            const harga = menuData[item.menu].price * item.quantity;
            totalPesanan += harga;
    
            listItem.innerHTML = `<p>${item.quantity} ${menuData[item.menu].name} - Rp ${harga.toLocaleString()} 
                                <button type="button" onclick="kurangiDariKeranjang(${index})">Kurangi</button>
                                <button type="button" onclick="hapusDariKeranjang(${index})">Hapus</button></p>`;
            keranjangList.appendChild(listItem);
        });
    
        const totalPesananElement = document.getElementById('totalPesanan');
        totalPesananElement.textContent = totalPesanan.toLocaleString();
    }
}

const child = new Child();

const keranjangPesanan = [];

function tambahKeKeranjang(menu) {
    const existingItem = keranjangPesanan.find(item => item.menu === menu);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        keranjangPesanan.push({ menu, quantity: 1 });
    }

    child.updateKeranjang();
}

function kurangiDariKeranjang(index) {
    const item = keranjangPesanan[index];

    if (item.quantity > 1) {
        item.quantity -= 1;
    } else {
        keranjangPesanan.splice(index, 1);
    }

    child.updateKeranjang();
}

function hapusDariKeranjang(index) {
    keranjangPesanan.splice(index, 1);
    child.updateKeranjang();
}



// POINT 04
const cetakStruk = () => {
    // POINT 03
    try {
        const strukElement = document.getElementById('struk');
    strukElement.innerHTML = '';

    if (keranjangPesanan.length === 0) {
        strukElement.innerHTML = '<p>Keranjang pesanan kosong.</p>';
        return;
    }

    strukElement.innerHTML = '<h2>Struk Pembelian</h2>';

    const dataPemesan = JSON.parse(localStorage.getItem("dataPemesan"));

    // if (dataPemesan) {
    //     strukElement.innerHTML += `<img src="path/to/cafe_master_logo.jpg" alt="Cafe Master Logo" width="100">`;
    //     strukElement.innerHTML += `<p>Tanggal: ${new Date().toLocaleDateString()}</p>`;
    //     strukElement.innerHTML += `<p>Nama Pemesan: ${dataPemesan.namaPemesan}</p>`;
    //     strukElement.innerHTML += `<p>Nomer Meja: ${dataPemesan.nomerMeja}</p>`;
    //     strukElement.innerHTML += `<p>Catatan Khusus: ${dataPemesan.catatanKhusus || '-'}</p>`;
    // }

    keranjangPesanan.forEach(item => {
        const harga = menuData[item.menu].price * item.quantity;

        const pesananDetail = document.createElement('p');
        pesananDetail.textContent = `${item.quantity} ${menuData[item.menu].name} - Rp ${harga.toLocaleString()}`;
        strukElement.appendChild(pesananDetail);
    });

    const totalPesanan = keranjangPesanan.reduce((total, item) => {
        return total + menuData[item.menu].price * item.quantity;
    }, 0);

    strukElement.innerHTML += `<p>Total Pembelian: Rp ${totalPesanan.toLocaleString()}</p>`;

    window.frames["printf"].document.body.innerHTML = strukElement.innerHTML;
    window.frames["printf"].window.print();

    keranjangPesanan.length = 0;

    collection.insertMany([
        {"username" : "abc", "productname" : 10, "tablenumber" : 2, "type": "Makanan", "note": "", "totalprice": "" },
    ]);

    child.updateKeranjang();
    } catch (error) {
        console.log(error);
    }
    
}

// Call the function to display special notes
// tampilkanCatatanKhusus();
