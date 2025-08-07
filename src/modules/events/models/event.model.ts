import { allow } from 'joi';
import {
  Column,
  DataType,
  Default,
  Model,
  PrimaryKey,
} from 'sequelize-typescript';
import { IEvent } from 'src/interfaces/Event.interface';
import { uid } from 'uid';

export class EventModel extends Model<IEvent> {
  @Column({ type: DataType.UUID, unique: true })
  @PrimaryKey
  @Default(uid())
  declare uid: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare eventName: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare eventDescription: string | null

  @Column({
    type: DataType.NUMBER,
    allowNull: false
  })
  eventCategory: number

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  declare eventDate: Date | null;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare bannerURL: string 

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  @Default(false)
  declare allowed: boolean

}

