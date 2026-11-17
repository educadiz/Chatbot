// socketConfig.js

const storedUsername = localStorage.getItem("username");
if (!storedUsername) {
    window.location.href = "/front/login.html"; 
}

const username = storedUsername || "Usuário Anônimo";
document.getElementById("meuNomeUsuario").textContent = storedUsername || "";

// Mude a URL do socket na linha abaixo:
const socket = io("http://localhost:3000");;
let usuariosOnline = 0;

// Evento de conexão com o servidor
socket.on("connect", () => {
    console.log("Usuário conectado");
    usuariosOnline++;
    atualizarContagemOnline();
    socket.emit('setUsername', username);
});

// Evento de desconexão com o servidor
socket.on("disconnect", () => {
    console.log("Usuário desconectado");
    usuariosOnline--;
    atualizarContagemOnline();
});

// Atualiza a contagem de usuários online
socket.on("usuariosOnline", (count) => {
    usuariosOnline = count;
    atualizarContagemOnline();
});

// Toca o áudio quando solicitado
socket.on('playAudio', (audioPath) => {
    const audio = document.getElementById('notificationSound');
    audio.src = audioPath; 
    console.log("caminho do audio:",audioPath);
    audio.play()
        .catch((error) => {
            console.error('Erro ao tentar reproduzir o áudio:', error);
        });
});
