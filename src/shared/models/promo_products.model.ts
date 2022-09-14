import { Column, Model, Table, DataType, Index } from "sequelize-typescript";

@Table({
    tableName : "promo_products",
    timestamps : false
})
export class PromoProductsModel extends Model{

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

    @Column
    promo_id: number;

    @Column
    product_id: number;
    
    @Column
    product_attribute_id: number;

    @Column({
        type: DataType.DECIMAL(20),
        defaultValue: '0'
    })
    nominal: string;

    @Column({
        defaultValue: 1
    })
    minimum_quantity: number;

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