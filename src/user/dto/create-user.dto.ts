import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './update-user.dto.js';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
