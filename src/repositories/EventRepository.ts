import { EntityRepository, Repository } from 'typeorm';
import Event from '../models/Event';

@EntityRepository(Event)
export default class EventRepository extends Repository<Event> {
  public async findByTitle(title: string): Promise<any> {
    return this.find({
      where: {
        title,
      },
    });
  }

}
