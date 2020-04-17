//BOTONES
const BtnProgramador = document.getElementById('Programador');
const BtnDiseñador = document.getElementById('Diseñador');
const BtnAudioVisual = document.getElementById('AudioVisual');
const BtnSocialMedia = document.getElementById('SocialMedia');

const Div = document.getElementById('container_form');
const Ocultar = () => {
    if( Div.classList.contains('hide') )
    {
        Div.classList.remove('hide');
    
    }else
    {
        Div.classList.add('hide');
    }
}

//EVENT LISENER
BtnProgramador.addEventListener('click', () => {
    Ocultar();
    Formulario('PROGRAMADOR');
    Div.classList.add('Programador')
    Div.classList.remove('Diseñador')
    Div.classList.remove('AudioVisual')
    Div.classList.remove('SocialMedia')
})

BtnDiseñador.addEventListener('click', () => {
    Ocultar();
    Formulario('DISEÑADOR');
    Div.classList.add('Diseñador')
    Div.classList.remove('Programador')
    Div.classList.remove('AudioVisual')
    Div.classList.remove('SocialMedia')
})

BtnAudioVisual.addEventListener('click', () => {
    Ocultar();
    Formulario('PRODUCTOR');
    Div.classList.add('AudioVisual')
    Div.classList.remove('Programador')
    Div.classList.remove('Diseñador')
    Div.classList.remove('SocialMedia')
})
BtnSocialMedia.addEventListener('click', () => {
    Ocultar();
    Formulario('COMMUNITY MANAGER');
    Div.classList.add('SocialMedia')
    Div.classList.remove('Programador')
    Div.classList.remove('Diseñador')
    Div.classList.remove('AudioVisual')
})


//TEMPLATE
const Formulario = (type) => {
 
    const HTML = `
        <h3 class="form-register">HOLA ${type}, REGISTRATE!</h3>
        
            <div class="form-group">

            <div class="form-group">
                <label for="Name">Nombre Completo:</label>
                <input type="email" class="form-control" id="Name" placeholder="Nombre">
            </div>

            <div class="form-group">
                <label for="SelectDocument">Tipo de Documento</label>
                <select class="form-control" id="SelectDocument">
                    <option>Tarjeta de Identidad</option>
                    <option>Cedula de Ciudadania</option>
                    <option>Cedula Extranjera</option>
                </select>
            </div>

            <div class="form-group">
                <label for="DI">Documento de Identidad:</label>
                <input type="text" name="Document" id="DI" class="form-control" placeholder="CC / TI / ...">
            </div>

            <div class="form-group">
                <label for="Gender">Genero:</label>
                <select class="form-control" id="Gender">
                    <option>Hombre</option>
                    <option>Mujer</option>
                </select>
            </div>

                <div class="form-group">
                <label for="Nacimiento">Fecha de Nacimiento</label>
                <input type="date" name="Nacimiento" id="Nacimiento" class="form-control">
                </div>

                <div class="form-group">
                <label for="Email">Email</label>
                <input type="email" class="form-control" id="Email" placeholder="example@mail.com">
                </div>

                <div class="form-group">
                <label for="Asunto">Asunto</label>
                <input type="text" class="form-control" id="Asunto" placeholder="Aunto">
                </div>

                <div class="form-group">
                <label for="Mensaje">Mensaje</label>
                <textarea class="form-control" id="Mensaje" rows="3"></textarea>
                <small id="emailHelp" class="form-text text-muted">Envianos recomendaciones, opiniones o los comentarios que quieras!</small>

                <button class="btn btn-dark" data-toggle="modal" data-target="#RegisterModal">Enviar!</button>
            </div>
            </div>
        `;
        Div.innerHTML = HTML;
};