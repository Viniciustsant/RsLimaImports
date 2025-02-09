// Importar as funções necessárias do Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC681Yts1X-NwVHWgO3yPKd3VOFOxXyqkg",
  authDomain: "rs-lima-imports.firebaseapp.com",
  projectId: "rs-lima-imports",
  storageBucket: "rs-lima-imports.firebasestorage.app",
  messagingSenderId: "1034437130874",
  appId: "1:1034437130874:web:b14686d34adb41bad659c3",
  measurementId: "G-8HXMFZWWHR"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Inicializar o serviço de autenticação do Firebase
const auth = getAuth(app);

// Elementos do HTML
const loginForm = document.getElementById("login-form");
const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");
const authMessage = document.getElementById("auth-message");

// Função de Login
loginBtn.addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        await signInWithEmailAndPassword(auth, email, password);
        authMessage.textContent = "Login realizado com sucesso!";
    } catch (error) {
        authMessage.textContent = "Erro ao fazer login: " + error.message;
    }
});

// Função de Registro
registerBtn.addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        await createUserWithEmailAndPassword(auth, email, password);
        authMessage.textContent = "Conta criada com sucesso!";
    } catch (error) {
        authMessage.textContent = "Erro ao criar conta: " + error.message;
    }
});
