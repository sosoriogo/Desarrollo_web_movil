const encabezadoficha = document.querySelector('.ficha-estudiante');

function iniciarFentch(){

    let url = "estudiantes.json";
    const estu = fetch(url).then(res => res.json()).then(data =>{

        console.log(data);
        return data;
    })
}

function inciar(){

    let html = "";
    var cont1 = document.querySelector("#app");
    const estu = fetch("estudiantes.json").then(res => res.json()).then(data => {
        console.log(data.estudiantes[1].github);
        console.log(data.estudiantes.length);
        for (let i = 0; i < data.estudiantes.length; i++) {
            console.log(data);
        let part1= `
        <div class="container"> 
        <div class="Header">
            <div class="Foto">
                <img id="foto-avatar" src="${data.estudiantes[i].perfil}" alt="foto perfil">
            </div>
        
            <div class="Nombre">
                <p>${data.estudiantes[i].nombre}</p>
            </div>
        
            <div class="Links">
            <div class="texto-links"><span><img src="icon-github.png" alt=""></span><a href="${data.estudiantes[i].github}">GitHub</a></div>
            <div class="texto-links"><span><img src="icon-tree.png" alt=""></span><a href="${data.estudiantes[i].neocities}">Neocities</a></div>
            <div class="texto-links"><span><img src="icon-email.png" alt=""></span><a href="url">${data.estudiantes[i].email}</a></div>
            <div class="texto-links"><span><img src="icon-phone.png" alt=""></span><a href="url">${data.estudiantes[i].telefono}</a></div>
            </div>
        </div>
        <div class="AreaTabla">
            <div class="Tabla">
                <table>
                    <tr id="titulo-tabla">
                        <th class="linea" id="titulo-tabla" >Actividad</th>
                        <th>%Diseño</th>
                        <th>%Codigo</th>
                    </tr> `;
    
    let tabla = "";
    for (let j = 0; j < data.estudiantes[i].actividades.length; j++) {
        tabla += `<tr>
        <th class="linea">${data.estudiantes[i].actividades[j].actividad}</th>
        <th>${data.estudiantes[i].actividades[j].estadouiux}</th>
        <th>${data.estudiantes[i].actividades[j].estadotecnico}</th>
    </tr>`;
     }
    
      tabla += `</table>      
      </div>
    </div>`
    
    var part3 =  `<div class="AreaIconos">
        <div class="Iconos">
            <div class="item">
                <p>${data.estudiantes[i].valoraciones.valhtml}</p>
                <a href="link">HTML</a>
            </div>
            <div class="item">
                <p>${data.estudiantes[i].valoraciones.valcss}</p>
                <a href="link">CSS</a>
            </div>
            <div class="item">
                <p>${data.estudiantes[i].valoraciones.valjs}</p>
                <a href="link">JS</a>
            </div>
            <div class="item">
                <p>${data.estudiantes[i].valoraciones.valui}</p>
                <a href="link">UI</a>
            </div>
            <div class="item">
                <p>${data.estudiantes[i].valoraciones.valux}</p>
                <a href="link">UIX</a>
            </div>
            <div class="item">
                <p>${data.estudiantes[i].calificacion}</p>
                <a href="link">TOTAL</a>
            </div>
    
        </div>
        </div>
        </div>
    </div>
           
                    `;
                    var part2 = part1.concat(tabla);
                    var final = part2.concat(part3);
                    html += final;

    }
cont1 = document.getElementById("app").innerHTML = html;
})
}
inciar();


   