module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: "python run.py",
        path: "app",
        on: [{ "event": "/http://[0-9.]+:([0-9]+)/", "done": true }]
      }
    },
    { method: "local.set", params: { url: "{{input.event[0]}}" } }
  ]
}
