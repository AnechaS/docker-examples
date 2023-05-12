module.exports = {
  apps: [
    {
      name: "backend",
      cwd: "/app/backend",
      script: "npm",
      args: "start",
    },
    {
      name: "frontend",
      cwd: "/app/frontend",
      script: "npm",
      args: "start",
    },
  ],
};
