import { IRepos } from '../../shared/interfaces/repos'

export interface IReposState {
    repos: IRepos;
}

export const initialReposState =  {
    repos: null
}