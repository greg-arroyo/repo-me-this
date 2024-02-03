import { inject, Injectable } from '@angular/core';
import { GITHUB_PROVIDER } from '../tokens/github/github.token';
import { User } from '../types/user';

@Injectable({ providedIn: 'root' })
export class GitHubService {
  private readonly githubProvider = inject(GITHUB_PROVIDER);

  async getUser(username: string): Promise<User> {
    return await this.githubProvider.getUser(username).then((response) => {
      const data = JSON.parse(response);
      return {
        ...data,
        username: data['login'],
        url: data['html_url'],
        avatarUrl: data['avatar_url'],
        publicReposCount: data['public_repos'],
        publicGistsCount: data['public_gists'],
        followersUrl: data['followers_url'],
        followerCount: data['followers'],
        followingUrl: data['following_url'],
        followingCount: data['following'],
        dateCreated: data['created_at'],
        dateLastModified: data['updated_at'],
      };
    });
  }
}
