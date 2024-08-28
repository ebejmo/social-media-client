import { logout } from '../js/api/auth/logout.js';
import * as storage from '../js/storage/index';

jest.mock('../js/storage/index', () => ({
  remove: jest.fn(),
}));

describe('Authentication: Logout', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('clears the token and profile from storage on logout', async () => {
    await logout();
    expect(storage.remove).toHaveBeenCalledWith('token');
    expect(storage.remove).toHaveBeenCalledWith('profile');
    expect(storage.remove).toHaveBeenCalledTimes(2);
  });
});
