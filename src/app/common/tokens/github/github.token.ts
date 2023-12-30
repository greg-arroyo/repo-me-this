import { InjectionToken } from '@angular/core';

const apiBaseUrl = 'https://api.github.com';

export type GitHubProvider = {
  getUser: (username: string) => Promise<string>;
  getRepos: (username: string) => Promise<string>;
  getGists: (username: string) => Promise<string>;
};
export const GITHUB_PROVIDER = new InjectionToken<GitHubProvider>(
  'githubProvider',
  {
    providedIn: 'root',
    factory: () => {
      return {
        getUser: async (username) => await getUserByUsername(username),
        getRepos: async (username) => await getReposForUsername(username),
        getGists: async (username) => await getGistsForUsername(username),
      } as GitHubProvider;
    },
  }
);

const getUserByUsername = async (username: string) => {
  const response = await fetch(`${apiBaseUrl}/users/${username}`, {
    method: 'GET',
  });
  return await response.json();
};

const getReposForUsername = async (username: string) => {
  const response = await fetch(`${apiBaseUrl}/users/${username}/repos`, {
    method: 'GET',
  });
  return await response.json();
};

const getGistsForUsername = async (username: string) => {
  const response = await fetch(`${apiBaseUrl}/users/${username}/gists`, {
    method: 'GET',
  });
  return await response.json();
};
