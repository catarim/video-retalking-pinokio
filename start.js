module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        path: "app",
        venv: "env",
        message: "python webUI.py",
        on: [{ "event": "/http://[0-9.]+:([0-9]+)/", "done": true }]
      }
    },
    { method: "local.set", params: { url: "{{input.event[0]}}" } }
  ]
}
