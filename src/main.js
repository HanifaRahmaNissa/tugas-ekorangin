let btnTambah = document.getElementById('btn-tambah');
let output = document.getElementById('output');

btnTambah.onclick = (e) => {
    let input = document.getElementById('assignment');
    let title = input.value.trim();

    if (title == "") {
        alert("Inputan masih kosong");
        return;
    }

    // Membuat elemen div baru untuk setiap tugas
    let task = document.createElement("div");
    task.id = `${Date.now()}`;

    // Menambahkan Tailwind class ke elemen task
    task.className = `bg-gray-100 p-4 rounded-md shadow-md flex justify-between items-center mb-2`;

    // Konten HTML untuk task yang berisi title dan tombol selesai & hapus
    task.innerHTML = `
         <p class="text-lg font-semibold text-gray-800">${title}</p>
         <div class="flex gap-2">
             <input type="button" id="btn-selesai" value="SELESAI" data-task="${task.id}"
                    class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 cursor-pointer">
             <input type="button" id="btn-hapus" value="HAPUS" data-task="${task.id}"
                    class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 cursor-pointer">
         </div>
   `;

    // Menambahkan task ke dalam output
    output.appendChild(task);

    // Mengosongkan input setelah tugas ditambahkan
    input.value = "";
    e.preventDefault();
};