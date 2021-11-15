const encabezadoficha = document.querySelector('.ficha-estudiante');

const data ={
    estudiantes: [{
            nombre: "Fulanito de tal",
            github: "https://github.com/mirepositorio",
            neocites: "miportafolio.neocities.org",
            email: "estudiante@dominio.com",
            telefono: "3125678900",
            perfil: "perfil.jpg",
            actividades: [{
                    actividad: "actividad 1",
                    estadouiux: "5%",
                    estadotecnico: "2%"
                },
                {
                    actividad: "actividad 1",
                    estadouiux: "5%",
                    estadotecnico: "2%"
                },
                {
                    actividad: "actividad 1",
                    estadouiux: "5%",
                    estadotecnico: "2%"
                }
            ],
            valoraciones: {
                valhtml: "3%",
                valcss: "4%",
                valjs: "6%",
                valui: "4%",
                valux: "9%"
            },
            calificacion: "54%"
        },
        {
            nombre: "Fulanito de tal",
            github: "https://github.com/mirepositorio",
            neocites: "miportafolio.neocities.org",
            email: "estudiante@dominio.com",
            telefono: "3125678900",
            perfil: "Gigachad.jpg",
            actividades: [{
                    actividad: "actividad 1",
                    estadouiux: "5%",
                    estadotecnico: "2%"
                },
                {
                    actividad: "actividad 1",
                    estadouiux: "5%",
                    estadotecnico: "2%"
                },
                {
                    actividad: "actividad 1",
                    estadouiux: "5%",
                    estadotecnico: "2%"
                }
            ],
            valoraciones: {
                valhtml: "3%",
                valcss: "4%",
                valjs: "6%",
                valui: "4%",
                valux: "9%"
            },
            calificacion: "54%"
        },
        {
            nombre: "Fulanito de tal",
            github: "https://github.com/mirepositorio",
            neocites: "miportafolio.neocities.org",
            email: "estudiante@dominio.com",
            telefono: "3125678900",
            perfil: "perfil1.png",
            actividades: [{
                    actividad: "actividad 1",
                    estadouiux: "5%",
                    estadotecnico: "2%"
                },
                {
                    actividad: "actividad 1",
                    estadouiux: "5%",
                    estadotecnico: "2%"
                },
                {
                    actividad: "actividad 1",
                    estadouiux: "5%",
                    estadotecnico: "2%"
                }
            ],
            valoraciones: {
                valhtml: "3%",
                valcss: "4%",
                valjs: "6%",
                valui: "4%",
                valux: "9%"
            },
            calificacion: "54%"
        }
    ]
};

function plantilla(data) {
    var part1= `
    <div class="container"> 
    <div class="Header">
        <div class="Foto">
            <img id="foto-avatar" src="${data.perfil}" alt="foto perfil">
        </div>
    
        <div class="Nombre">
            <p>${data.nombre}</p>
        </div>
    
        <div class="Links">
        <div class="texto-links"><span><img src="icon-github.png" alt=""></span><a href="${data.github}">GitHub</a></div>
        <div class="texto-links"><span><img src="icon-tree.png" alt=""></span><a href="${data.neocities}">Neocities</a></div>
        <div class="texto-links"><span><img src="icon-email.png" alt=""></span><a href="url">${data.email}</a></div>
        <div class="texto-links"><span><img src="icon-phone.png" alt=""></span><a href="url">${data.telefono}</a></div>
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
for (let i = 0; i < data.actividades.length; i++) {
    tabla += `<tr>
    <th class="linea">${data.actividades[i].actividad}</th>
    <th>${data.actividades[i].estadouiux}</th>
    <th>${data.actividades[i].estadotecnico}</th>
</tr>`;
  }

  tabla += `</table>      
  </div>
</div>`

var part3 =  `<div class="AreaIconos">
    <div class="Iconos">
        <div class="item">
            <p>${data.valoraciones.valhtml}</p>
            <a href="link">HTML</a>
        </div>
        <div class="item">
            <p>${data.valoraciones.valcss}</p>
            <a href="link">CSS</a>
        </div>
        <div class="item">
            <p>${data.valoraciones.valjs}</p>
            <a href="link">JS</a>
        </div>
        <div class="item">
            <p>${data.valoraciones.valui}</p>
            <a href="link">UI</a>
        </div>
        <div class="item">
            <p>${data.valoraciones.valux}</p>
            <a href="link">UIX</a>
        </div>
        <div class="item">
            <p>${data.calificacion}</p>
            <a href="link">TOTAL</a>
        </div>

    </div>
    </div>
    </div>
</div>
       
                `;
                var part2 = part1.concat(tabla);
                var final = part2.concat(part3);
                return final;
}

    function mapActividades(data){
        table = document.getElementsByClassName("Tabla");
        for(var i = 0; i < data.estudiantes.Actividades.length; i++){
            var row = table.insertRow(0);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerHTML = "NEW CELL1";
            cell2.innerHTML = "NEW CELL2";
        }
    }

    const p1 = (document.getElementById("app").innerHTML = `<h1>${data.estudiantes.map(plantilla).join("")}</h1>`);
    
    const p2=   (document.getElementById("tabla").innerHTML = `<h1>${data.estudiantes.map(mapActividades).join("")}</h1>`);