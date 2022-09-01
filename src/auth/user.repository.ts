import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CustomRepository } from 'src/db/typeorm-ex.decorator';
import { MongoRepository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { AuthCredentialsDto } from './dto/authCredentialsDto.dto';
import { CreateUserDto } from './dto/createUserDto.dto';

@CustomRepository(User)
export class UserRepository extends MongoRepository<User> {
  async createUser(createUserDto: CreateUserDto): Promise<void> {
    const { username, password, email, last_name, name } = createUserDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = this.create({
      username,
      password: hashedPassword,
      name,
      last_name,
      email,
    });

    try {
      await this.save(user);
    } catch (error) {
      // console.log(error)
      if (error.code === 11000) {
        // duplicate username
        throw new ConflictException('Username already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
