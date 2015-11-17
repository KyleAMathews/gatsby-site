import GitRepo from 'git-repository';
import task from './task';

const remote = {
  name: 'origin',
  url: 'https://github.com/dannyphillips/gatsby-site.git',
  branch: 'gh-pages',
};

export default task(async function deploy() {
  // Initialize a new Git repository inside the `/public` folder
  // if it doesn't exist yet
  const repo = await GitRepo.open('public', { init: true });
  await repo.setRemote(remote.name, remote.url);

  // Fetch the remote repository if it exists
  if ((await repo.hasRef(remote.url, remote.branch))) {
    await repo.fetch(remote.name);
    await repo.reset(`${remote.name}/${remote.branch}`, { hard: true });
    await repo.clean({ force: true });
  }

  // Push the contents of the public folder to the remote server via Git
  await repo.add('--all .');
  await repo.commit('Update ' + new Date().toISOString());
  await repo.push(remote.name, 'master:' + remote.branch);
});
