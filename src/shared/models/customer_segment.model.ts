import { Model, Column, Index, DataType, Table } from "sequelize-typescript";

@Table({
    tableName   : 'customer_segments', 
    timestamps  : false
})
export class CustomerSegmentModel extends Model{
    @Column({
        primaryKey: true,
        autoIncrement: true,
        type: DataType.BIGINT,
    })
    @Index({
        name: 'PRIMARY',
        using: 'BTREE',
        order: 'ASC',
        unique: true,
    })
    id: number;

    @Column({ defaultValue: 0})
    customer_id: number;

    @Column({ defaultValue: 0})
    segment_id: number;

    @Column({ defaultValue: 1})
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