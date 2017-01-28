
      // "type": "node",
      // "request": "launch",
      // "name": "Launch Program",
      // "program": "${workspaceRoot}/test/app.js",
      // "cwd": "${workspaceRoot}"
      
module.exports = {
  version: "0.2.0",
  configurations: [{
    name: "Run File",
    type: "node",
    request: "launch",
    program: "${file}",
    stopOnEntry: false,
    args: [],
    cwd: "${workspaceRoot}",
    preLaunchTask: null,
    runtimeExecutable: null,
    runtimeArgs: [],
    env: {
      NODE_ENV: "development"
    },
    console: "internalConsole",
    sourceMaps: false,
    outDir: null
  }, {
    name: "Test File",
    type: "node",
    request: "launch",
    program: "${workspaceRoot}/node_modules/.bin/_mocha",
    stopOnEntry: false,
    args: [
      "${file}",
      "--debug"
    ],
    cwd: "${workspaceRoot}",
    preLaunchTask: null,
    runtimeExecutable: null,
    runtimeArgs: [
      "--nolazy"
    ],
    env: {
      NODE_ENV: "development"
    },
    sourceMaps: false
  }]
};


/*
{
  // Use IntelliSense to learn about possible Node.js debug attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceRoot}/test/app.js",
      "cwd": "${workspaceRoot}"
    },
    {
      "type": "node",
      "request": "attach",
      "name": "Attach to Process",
      "port": 5858
    }
  ]
}

*/