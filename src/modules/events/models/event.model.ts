import {
  Column,
  DataType,
  Default,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { IEvent } from 'src/interfaces/Event.interface';
import { uid } from 'uid';

@Table({
  tableName: 'events',
  timestamps: false, // если не нужны createdAt/updatedAt
})
export class EventModel extends Model<IEvent> {
  @PrimaryKey
  @Default(() => uid())
  @Column({ type: DataType.STRING, unique: true })
  declare uid: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare eventName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare eventDescription: string | null;

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  eventCategory: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  declare eventDate: Date | null;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare bannerURL: string;

  @Default(false)
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  declare allowed: boolean;
}
