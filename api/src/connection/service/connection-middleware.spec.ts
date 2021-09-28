import { Test, TestingModule } from '@nestjs/testing';
import { ConnectionMiddleware } from './connection-middleware';

describe('ConnectionMiddlewareService', () => {
  let service: ConnectionMiddleware;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConnectionMiddleware],
    }).compile();

    service = module.get<ConnectionMiddleware>(ConnectionMiddleware);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
