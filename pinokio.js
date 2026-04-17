module.exports = {
  version: "1.0",
  title: "Video-Retalking UHQ",
  description: "Instalador Robusto - Lip-Sync Avançado (OpenTalker)",
  icon: "icon.png",
  menu: async (kernel) => {
    let installed = await kernel.exists(__dirname, "app", "env")
    if (installed) {
      return [
        { icon: "fa-solid fa-play", text: "Launch WebUI", href: "start.js" },
        { icon: "fa-solid fa-terminal", text: "Update", href: "install.js" }
      ]
    } else {
      return [{ icon: "fa-solid fa-download", text: "Install", href: "install.js" }]
    }
  }
}
