import { login } from '../js/api/auth/login';
import * as storage from '../js/storage/index';

jest.mock('../js/storage/index', () => ({
  save: jest.fn(),
  load: jest.fn(),
}));

global.fetch = jest.fn();

describe('Authentication: Login', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    require('../js/storage/index').load.mockReturnValue('mockedToken');
  });

  it('should store the token when provided with valid credentials', async () => {
    const mockToken = 'mockedToken';
    const mockProfile = {
      accessToken: mockToken,
      user: { id: 1, name: 'John Doe' },
    };

    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockProfile),
    });

    await login('test@stud.noroff.no', 'password123');

    expect(storage.save).toHaveBeenCalledWith('token', mockToken);
    expect(storage.save).toHaveBeenCalledWith('profile', {
      user: { id: 1, name: 'John Doe' },
    });

    expect(fetch).toHaveBeenCalledWith(
      'https://nf-api.onrender.com/api/v1/social/auth/login',
      {
        method: 'post',
        body: JSON.stringify({
          email: 'test@stud.noroff.no',
          password: 'password123',
        }),
        headers: {
          Authorization: `Bearer mockedToken`,
          'Content-Type': 'application/json',
        },
      },
    );
  });

  it('should throw an error when provided with invalid credentials', async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      statusText: 'Unauthorized',
    });

    await expect(login('wrong@example.com', 'wrongpassword')).rejects.toThrow(
      'Unauthorized',
    );

    expect(storage.save).not.toHaveBeenCalled();
  });
});
