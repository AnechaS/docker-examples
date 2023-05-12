module.exports = {
  apps: [
    {
      name: "backend",
      cwd: "/home/node/app/backend",
      script: "npm",
      args: "start",
    },
    {
      name: "frontend",
      cwd: "/home/node/app/frontend",
      script: "npm",
      args: "start",
    },
  ],
};
