import { Test } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";
import { JwtService } from "src/jwt/jwt.service";
import { getRepository } from "typeorm";
import { User } from "./entities/user.entity";
import { Verification } from "./entities/verification.entity";
import { UsersService } from "./users.service";

const mockRepository = {
  findOne: jest.fn(),
  save: jest.fn(),
  create: jest.fn(),
}

const mockJwtService = {
  sign: jest.fn(),
  verify: jest.fn(),
}

describe('UsersService', () => {
  let service: UsersService;

  // Testing Module
  beforeAll(async() => {
    const module = await Test.createTestingModule({
      providers: [UsersService, 
        {
          provide: getRepositoryToken(User),
          useValue: mockRepository,
        }, 
        {
          provide: getRepositoryToken(Verification),
          useValue: mockRepository,
        }, 
        {
          provide: JwtService,
          useValue: mockJwtService
        }]
    }).compile();
    service = module.get<UsersService>(UsersService);
  });

  it('be defined', () => {
    expect(service).toBeDefined();
  })

  // test 할 todo
  it.todo('createAccount');
  it.todo('login');
  it.todo('findById');
  it.todo('editProfile');
  it.todo('verifyEmail');
});