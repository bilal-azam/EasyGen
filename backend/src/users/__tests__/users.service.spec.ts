import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../users.service';
import { getModelToken } from '@nestjs/mongoose';

describe('UsersService', () => {
  let service: UsersService;
  let mockUserModel: any;

  beforeEach(async () => {
    mockUserModel = {
      findOne: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: getModelToken('User'), useValue: mockUserModel },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should fetch a user by ID', async () => {
    const mockUser = { id: '1', email: 'test@test.com', name: 'John Doe' };
    mockUserModel.findOne.mockResolvedValue(mockUser);

    const result = await service.getUserById('1');
    expect(result).toEqual(mockUser);
  });
});
