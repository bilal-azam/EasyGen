import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from '../auth.controller';
import { AuthService } from '../auth.service';

describe('AuthController', () => {
  let controller: AuthController;
  let service: AuthService;

  beforeEach(async () => {
    const mockService = {
      signUp: jest.fn(),
      signIn: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [{ provide: AuthService, useValue: mockService }],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    service = module.get<AuthService>(AuthService);
  });

  it('should call signUp with correct data', async () => {
    const dto = { email: 'test@test.com', password: 'P@ssword123', name: 'John Doe' };
    await controller.signUp(dto);
    expect(service.signUp).toHaveBeenCalledWith(dto);
  });

  it('should call signIn with correct data', async () => {
    const dto = { email: 'test@test.com', password: 'P@ssword123' };
    await controller.signIn(dto);
    expect(service.signIn).toHaveBeenCalledWith(dto);
  });
});
