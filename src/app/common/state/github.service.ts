import { inject, Injectable } from '@angular/core';
import { GITHUB_PROVIDER } from '../tokens/github/github.token';

@Injectable({ providedIn: 'root' })
export class GitHubService {
  private readonly githubProvider = inject(GITHUB_PROVIDER);

  async getUser(username: string) {
    // TODO: add user, repos, gists types to ./types.ts
    // TODO: add logic for mapping provider response to return common platform types
    return await this.githubProvider.getUser(username);
  }

  async getRepos(username: string) {
    // TODO: Implement.
  }

  async getGists(username: string) {
    // TODO: Implement.
  }
}
