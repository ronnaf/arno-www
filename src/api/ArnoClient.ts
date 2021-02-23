import { Result } from '../util/Result';
import { API } from './API';

/**
 * creates an `API` backed by the product's API
 * update 'arno' to product name
 * @param options
 */
export const arnoAPIClient = (options: {
  /** The API's base URL. */
  baseURL: string;

  /** A function for retrieving the authentication token. */
  getToken: () => Promise<string | undefined>;

  /** A function for logging. */
  log: (message: string) => void;
}): API => {
  options.log('Log messages like this');

  return {
    getUser: () => Promise.resolve(Result.success({ firstName: 'arno', id: 1 })),
  };
};
