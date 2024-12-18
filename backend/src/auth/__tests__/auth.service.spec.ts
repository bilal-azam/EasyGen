import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from '../auth.service';
import { JwtService } from '@nestjs/jwt';
import { getModelToken } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';

describe('AuthService', () => {
  let service: AuthService;
  let mockUserModel: any;

  beforeEach(async () => {
    mockUserModel = {
      findOne: jest.fn(),
      create: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: JwtService, useValue: { sign: jest.fn(() => 'test-token') } },
        { provide: getModelToken('User'), useValue: mockUserModel },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should hash a password', async () => {
    const password = 'P@ssword123';
    const hashedPassword = await bcrypt.hash(password, 10);

    expect(hashedPassword).not.toEqual(password);
  });

  it('should validate a user with correct credentials', async () => {
    const mockUser = { email: 'test@test.com', password: await bcrypt.hash('P@ssword123', 10) };
    mockUserModel.findOne.mockResolvedValue(mockUser);

    const result = await service.validateUser('test@test.com', 'P@ssword123');
    expect(result).toEqual({ email: 'test@test.com' });
  });

  it('should return null for invalid credentials', async () => {
    mockUserModel.findOne.mockResolvedValue(null);

    const result = await service.validateUser('wrong@test.com', 'WrongPass123');
    expect(result).toBeNull();
  });
});
