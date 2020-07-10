import { EntityRepository, Repository } from 'typeorm';
import User from '../models/User';

@EntityRepository(User)
export default class UserRepository extends Repository<User> {
  public async findByName(name: string): Promise<any> {
    return this.find({
      where: {
        name,
      },
    });
  }
}
