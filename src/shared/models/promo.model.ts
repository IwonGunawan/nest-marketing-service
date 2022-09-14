import { Column, Model, Table, DataType, Index } from "sequelize-typescript";

@Table({
    tableName : "promo",
    timestamps : false
})
export class PromoModel extends Model{
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

    @Column({
        type: DataType.ENUM('all','superagent','superapp'),
        defaultValue: 'all'
    })
    source: string;

    @Column({
        type: DataType.ENUM('grosir','retail','all'),
        defaultValue: 'grosir'
    })
    group_type: string;

    @Column({defaultValue: 1})
    user_type: number

    @Column
    name: string;

    @Column({ defaultValue: 'promo' })
    type: string;

    @Column({ 
        type: DataType.ENUM('or', 'and', 'all-rokok', 'or-special', 'and-special', 'all-except'),
        defaultValue: 'or' 
    })
    condition: string;

    @Column
    segment_id: number;

    @Column
    code: string;

    @Column({ defaultValue: 0 })
    claim: number;

    @Column({ defaultValue: 'price' })
    nominal_type: string;

    @Column({
        type: DataType.DECIMAL(20),
        defaultValue: '0.00' 
    })
    nominal_percent: string;

    @Column({ 
        type: DataType.DECIMAL(20),
        defaultValue: '0.000'
    })
    nominal_maximal: string;

    @Column({ allowNull : true })
    nominal: number;

    @Column({ allowNull: true })
    minimum_order: number;

    @Column({ defaultValue: 0 })
    quota_user: number;

    @Column({ defaultValue: 0 })
    quota_quantity: number;

    @Column({ allowNull: true })
    area: string;

    @Column
    start_date: Date;

    @Column
    end_date: Date;

    @Column({ defaultValue: 0 })
    valid_date: number;

    @Column({ defaultValue: 1 })
    valid_time: number;

    @Column({ allowNull: true })
    days: string;

    @Column({ allowNull : true })
    time_start: string;

    @Column({ allowNull : true })
    time_end: string;

    @Column
    image: string;

    @Column({ allowNull : true })
    description1: string;

    @Column({ allowNull : true })
    description2: string;

    @Column({ allowNull : true })
    description3: string;

    @Column({ allowNull : true })
    description_notif: string;

    @Column({ allowNull : true })
    title_notif: string;

    @Column({ defaultValue: 0 })
    status: number;

    @Column({ allowNull : true })
    note_log: string;

    @Column({ allowNull : true })
    created_by: number;

    @Column({ allowNull : true })
    updated_by: number;

    @Column({ allowNull : true })
    deleted_at: Date;

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