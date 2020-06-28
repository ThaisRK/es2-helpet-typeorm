import { EntityRepository, Repository } from 'typeorm';
import Pet from '../models/Pet';

@EntityRepository(Pet)
export default class PetRepository extends Repository<Pet> {
  public async findByName(name: string): Promise<any> {
    return this.find({
      where: {
        name,
      },
    });
  }

  public async deleteById(id: number): Promise<any> {
    return this.find({
      where: {
        id,
      },
    });
  }
}
