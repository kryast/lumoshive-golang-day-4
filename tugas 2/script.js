function loadData(){
    fetch("https://reqres.in/api/users?page=2", {
        method: "GET",
    })
    .then(response => {
        if (!response.ok) {       
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const container = document.getElementById('list-pegawai');
        
        container.innerHTML = '';

        for (let i = 0; i < data.data.length; i++) {
            const pegawai = data.data[i];
            const div = document.createElement("div");
            div.innerHTML = `Nama Pegawai: ${pegawai.first_name}`;
            div.classList.add("klik");

            div.addEventListener("click", function() {
                div.innerHTML = `
                    <img src="${pegawai.avatar}"> <br>
                    Email: ${pegawai.email} <br>
                    Nama Depan: ${pegawai.first_name} <br>
                    Nama Belakang: ${pegawai.last_name} <br>
                    ID: ${pegawai.id}`;
            });

            container.appendChild(div);
        }

    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

