# Marky 📝

**Marky** é uma extensão para o Google Chrome que permite salvar qualquer página da web como um arquivo Markdown (`.md`) com apenas um clique.


---

## 🔧 Funcionalidades

- Converte o HTML da página atual em Markdown limpo
- Faz o download automático do `.md`
- Interface simples e leve
- Código 100% local e open-source

---

## 🚀 Como instalar

1. Clone ou baixe este repositório
2. Acesse `chrome://extensions` no seu navegador
3. Ative o **Modo do desenvolvedor** (canto superior direito)
4. Clique em **"Carregar sem compactação"**
5. Selecione a pasta do projeto `Marky/`
6. Clique no ícone da extensão e depois em **"Baixar"**

---

## 🗂 Estrutura

```
marky/
├── manifest.json         # Configuração da extensão
├── popup.html            # Interface do popup
├── popup.js              # Ação ao clicar em "Baixar"
├── content.js            # Script injetado na aba para conversão
├── turndown.js           # Biblioteca para converter HTML em Markdown
├── icon.png              # Ícone da extensão
```

---

## 📦 Requisitos

- Navegador Google Chrome (ou compatível com extensões Chromium)

---

## 📄 Licença

[MIT](LICENSE)

---

## 🌐 Repositório

🔗 https://github.com/caue-r/Marky
