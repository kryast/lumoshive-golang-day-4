function loadData(){
    fetch("https://lumoshive-academy-media-api.vercel.app/api/games?page=2&search", {
        method: "GET",
    })
    .then(response => {
        if (!response.ok) {       
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data)

        // gagal menggunakan appenChild() karena variable list nya menggunakan let bukan const

        // let list = document.getElementsByTagName("ul");
        // let info = document.createElement("li");
        // list.appendChild(info);
        
        // info.innerHTML = `Title : ${data[0].title} Thumb : ${data[0].thumb} Description : ${data[0].desc}`;


        // Prompt chatgpt cara membuat element di fetch
        
         // Mendapatkan elemen tempat menampilkan data
         // const container = document.getElementById('container');

         // // Loop melalui data yang diterima
         // data.forEach(item => {
            //   // Membuat elemen baru (misalnya, <div>)
            //   const div = document.createElement('div');
            //   div.textContent = item.title; // Ganti 'name' dengan properti yang sesuai
            
            //   // Menambahkan elemen ke dalam container
            //   container.appendChild(div);
            // });

        // End prompt chatgpt
            
            for (let i = 0; i < data.length; i++) {
                const container = document.getElementById('list');
                const div = document.createElement("div");
                div.innerHTML = `<img src="${data[i].thumb}" > <br> Title: ${data[i].title} <br> Description : ${data[i].desc} ` ;
                container.appendChild(div);

                // mengubah manual menggunakan innerHTML dan mengambil data[indeks] secara manual
            // document.getElementById("thumb").innerHTML = 'Thumb: ' + data[0].thumb
            // document.getElementById("title").innerHTML = 'Title: ' + data[0].title;
            // document.getElementById("description").innerHTML = 'Description: ' + data[0].desc;
             }
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}
