import {Injectable, NotFoundException} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {DeleteResult, Repository} from "typeorm";
import {User} from "./entities/user.entity";

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private data: Repository<User>) {}
  create(dto: CreateUserDto): Promise<User> {
    return this.data.save(dto);
  }

  findAll(): Promise<User[]> {
    return this.data.find();
  }

  async findOne(id: number): Promise<User | void> {
    try {
      return await this.data.findOneBy({id});
    } catch (err) {
      throw new NotFoundException(err);
    }
  }

  async update(id: number, dto: UpdateUserDto): Promise<User | void> {
    try{
      let done = await this.data.update(id, dto);
    if(done.affected != 1){
      throw new NotFoundException(id);
    }
    return await this.findOne(id);
    }catch(error){
      throw new error;
    }
  }

  async remove(id: number): Promise<void> {
    let done: DeleteResult = await this.data.delete(id);
    if(done.affected != 1){
      throw new NotFoundException(id);
    }
  }
}
