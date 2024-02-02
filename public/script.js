const botaoEnviar = document.getElementById('enviar');
const caixaMensagem  = document.getElementById('texto');

const socket = io();

botaoEnviar.addEventListener('click', ()=>{
    if(caixaMensagem.value !== ""){
        socket.emit('nova mensagem',caixaMensagem.value);
        caixaMensagem.value = "";
    }
})
