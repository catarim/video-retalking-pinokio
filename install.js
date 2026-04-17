module.exports = {
  run: [
    // Etapa 1: Clonar o repositório
    {
      method: "shell.run",
      params: {
        message: "git clone https://github.com/OpenTalker/video-retalking app"
      }
    },
    // Etapa 2: Instanciar o Ambiente Virtual
    {
      method: "shell.run",
      params: {
        path: "app",
        message: "python -m venv env"
      }
    },
    // Etapa 3: Instalar as ferramentas de construção ANTES das dependências
    {
      method: "shell.run",
      params: {
        path: "app",
        venv: "env",
        message: [
          "python -m pip install --upgrade pip setuptools wheel",
          "pip install cmake",
          "pip install dlib==19.24.0"
        ]
      }
    },
    // Etapa 4: Instalar o resto do projeto e o PyTorch para NVIDIA
    {
      method: "shell.run",
      params: {
        path: "app",
        venv: "env",
        message: [
          "pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118",
          "pip install -r requirements.txt"
        ]
      }
    },
    // Etapa 5: Hotfix para o bug nativo do projeto (correção do torchvision)
    {
      method: "shell.run",
      params: {
        path: "app",
        venv: "env",
        message: "python -c \"import os; import basicsr; p = os.path.join(os.path.dirname(basicsr.__file__), 'data', 'degradations.py'); code=open(p).read().replace('from torchvision.transforms.functional_tensor import rgb_to_grayscale', 'from torchvision.transforms.functional import rgb_to_grayscale'); open(p,'w').write(code)\""
      }
    },
    // Etapa 6: Criar pasta e baixar os pesados modelos pré-treinados
    {
      method: "shell.run",
      params: {
        path: "app",
        message: "mkdir checkpoints"
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app/checkpoints",
        message: [
          "curl -L -O https://github.com/vinthony/video-retalking/releases/download/v0.0.1/30_net_gen.pth",
          "curl -L -O https://github.com/vinthony/video-retalking/releases/download/v0.0.1/BFM.zip",
          "curl -L -O https://github.com/vinthony/video-retalking/releases/download/v0.0.1/DNet.pt",
          "curl -L -O https://github.com/vinthony/video-retalking/releases/download/v0.0.1/ENet.pth",
          "curl -L -O https://github.com/vinthony/video-retalking/releases/download/v0.0.1/expression.mat",
          "curl -L -O https://github.com/vinthony/video-retalking/releases/download/v0.0.1/face3d_pretrain_epoch_20.pth",
          "curl -L -O https://github.com/vinthony/video-retalking/releases/download/v0.0.1/GFPGANv1.3.pth",
          "curl -L -O https://github.com/vinthony/video-retalking/releases/download/v0.0.1/GPEN-BFR-512.pth",
          "curl -L -O https://github.com/vinthony/video-retalking/releases/download/v0.0.1/LNet.pth",
          "curl -L -O https://github.com/vinthony/video-retalking/releases/download/v0.0.1/ParseNet-latest.pth",
          "curl -L -O https://github.com/vinthony/video-retalking/releases/download/v0.0.1/RetinaFace-R50.pth",
          "curl -L -O https://github.com/vinthony/video-retalking/releases/download/v0.0.1/shape_predictor_68_face_landmarks.dat",
          "python -c \"import zipfile; zipfile.ZipFile('BFM.zip', 'r').extractall('.')\""
        ]
      }
    }
  ]
}
