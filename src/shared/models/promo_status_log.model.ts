import { Model, Column, DataType, Index, Table } from "sequelize-typescript";

@Table({
    tableName : 'promo_status_logs',
    timestamps : false
})
export class PromoStatusLogModel extends Model{
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

    @Column({ defaultValue: 0, })
    promo_id: number;

    @Column({ defaultValue: 0})
    before_status: number;

    @Column({ defaultValue: 0 })
    current_status: number;

    @Column({ allowNull: true, defaultValue: null })
    description: string;
    
    @Column({ allowNull: true, defaultValue: null })
    created_by: number;

    @Column({
        allowNull: true,
        type: DataType.DATE,
        defaultValue: DataType.NOW
    })
    created_at: Date;

    @Column({
        allowNull: true,
        type: DataType.DATE,
        defaultValue: DataType.NOW
    })
    updated_at: Date;
}