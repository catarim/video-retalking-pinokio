module.exports = {
  title: "Video-Retalking UHQ",
  description: "Lip-sync de alta qualidade com restauração facial automática (GFPGAN).",
  icon: "icon.png",
  menu: async (kernel) => {
    let installing = await kernel.exists(__dirname, "app", "env")
    if (installing) {
      return [
        { icon: "fa-solid fa-play", text: "Launch", href: "start.js" },
        { icon: "fa-solid fa-plug", text: "Update", href: "install.js" }
      ]
    } else {
      return [{ icon: "fa-solid fa-download", text: "Install", href: "install.js" }]
    }
  }
}
