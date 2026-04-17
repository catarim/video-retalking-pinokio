module.exports = {
  run: [
    // 1. Clonar, Criar ambiente e Instalar tudo em um único comando shell para evitar que o terminal feche
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/OpenTalker/video-retalking app",
          "cd app",
          "pip install -r requirements.txt",
          "mkdir checkpoints"
        ]
      }
    },
    // 2. Baixar os modelos (Checkpoints) - Esses precisam de tempo, então deixamos separados
    {
      method: "shell.run",
      params: {
        message: "curl -L -o app/checkpoints/main_gfvgan.pth https://huggingface.co/pbeast/video-retalking/resolve/main/main_gfvgan.pth"
      }
    },
    {
      method: "shell.run",
      params: {
        message: "curl -L -o app/checkpoints/L16_96.pth https://huggingface.co/pbeast/video-retalking/resolve/main/L16_96.pth"
      }
    }
  ]
}
