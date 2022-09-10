function visitou() {
    let vil = document.querySelector("#vil");
    if (window.localStorage) {
        if (localStorage.visitas) {
            localStorage.visitas = Number(localStorage.visitas) + 1;
        } else {
            localStorage.visitas = 1;
        }
    }
    vil.innerHTML = `<p>Visitas: ${localStorage.visitas}</p>`
}
    visitou();
function pegaIp() {

    let url = `http://ip-api.com/json/`
    let informando = document.querySelector("#informa");
    let informa = "";

   fetch(url).then((res) => {
        return res.json()
    }).then((data) => {
        informa += `
        <h3>Dados Do Meu IP </h3>
        <p> Meu IP: ${data.query}</p> <hr>
        <p>IP Reverse: ${data.reverse}</p><hr>
        <p>PAIS: ${data.country}</p><hr>
        <p>ESTADO: ${data.regionName}</p><hr>
        <p>CIDADE: ${data.city}</p><hr>
        <p>PROVEDOR: ${data.org}</p><hr>
        <p>VPN-STATUS: ${data.proxy ? '<span style="color:green;">ATIVA</span>' : '<span style="color:red;">INATIVA</span>'}</p><hr> 
        <p>MEU DISPOSITIVO: ${navigator.userAgent}</p> 
        `
        informando.innerHTML = informa;
    });
}

pegaIp();


function buscaIp() {
    let ip = document.querySelector("#ip");
    let pesquisa = document.querySelector("#pesquisa");
    let informando = document.querySelector("#informa");
    let informa = "";
    pesquisa.addEventListener("click", () => {
        if (ip.value.trim() !== "") {
            let url = `http://ip-api.com/json/${ip.value}`;
            fetch(url).then((res) => {
                return res.json();
            }).then((data) => {
                if (data.city == undefined) {
                    alert("digite um ip valido")
                    ip.value = "";
                } else {
                    informa += `
                    <h3>Dados Do IP Pesquisado </h3>
                    <p>IP: ${data.query}</p> <hr>
                    <p>PAIS: ${data.country}</p><hr>
                    <p>ESTADO: ${data.regionName}</p><hr>
                    <p>CIDADE: ${data.city}</p><hr>
                    <p>PROVEDOR: ${data.org}</p> 
                    `
                    informando.innerHTML = informa;
                    ip.value = "";
                }
            })
        } else {
            alert("Preencha o campo com um ip valido!")
        }
    })
}

buscaIp()
