import { Model, Table, Column, Index, DataType } from "sequelize-typescript";


@Table({
    tableName   : 'segments', 
    timestamps  : false
})
export class SegmentModel extends Model{

    @Column({
        primaryKey: true,
        autoIncrement: true,
        type: DataType.INTEGER,
    })
    @Index({
        name: 'PRIMARY',
        using: 'BTREE',
        order: 'ASC',
        unique: true,
    })
    id: number;

    @Column({ defaultValue: 1})
    user_type: number;

    @Column({ allowNull: true, defaultValue: null})
    name: string;

    @Column
    description: string;

    @Column({ defaultValue: 0 })
    status: number;

    @Column({ allowNull : true, defaultValue: null })
    created_by: number;

    @Column({ 
        allowNull : true,
        type: DataType.DATE, 
        defaultValue: DataType.NOW
    })
    created_at: Date;

    @Column({ 
        allowNull : true,
        type: DataType.DATE,
        defaultValue: DataType.NOW
    })
    updated_at: Date;
}