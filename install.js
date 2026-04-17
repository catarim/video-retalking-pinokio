module.exports = {
  run: [
    { method: "shell.run", params: { message: "git clone https://github.com/OpenTalker/video-retalking app" } },
    { method: "py.venv", params: { path: "app/env" } },
    { method: "shell.run", params: { message: "pip install -r requirements.txt", path: "app" } },
    { method: "shell.run", params: { message: "mkdir checkpoints", path: "app" } },
    { method: "shell.run", params: { message: "curl -L -o checkpoints/main_gfvgan.pth https://huggingface.co/pbeast/video-retalking/resolve/main/main_gfvgan.pth", path: "app" } },
    { method: "shell.run", params: { message: "curl -L -o checkpoints/L16_96.pth https://huggingface.co/pbeast/video-retalking/resolve/main/L16_96.pth", path: "app" } }
  ]
}
