const core = require('@actions/core');
const { Octokit } = require('@octokit/rest');
const github = require('@actions/github');

// **********************************************************
const token = core.getInput('token') || '';
const octokit = new Octokit({ auth: `token ${token}` });
const context = github.context;

// **********************************************************
async function run() {
  try {
    const { owner, repo } = context.repo;
    if (context.eventName === 'pull_request') {
      const PRTitle = context.payload.pull_request.title;
      console.log(context.payload.pull_request.head)
    } else {
      core.info("This is now support 'pull_request'. I haven't thought about other trigger verification conditions for the time being, you can propose them!")
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

// **********************************************************
run();
