import { Model, Column, Index, DataType, Table } from "sequelize-typescript";

@Table({
    tableName   : 'customers', 
    timestamps  : false
})
export class CustomerModel extends Model{
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
        type: DataType.ENUM('apps', 'dashboard', 'superagent'),
        defaultValue : 'apps'
    })
    is_from: string;

    @Column({
        type: DataType.ENUM('user','agent','center','super'), 
        defaultValue: 'agent'
    })
    level: string;

    @Column({ defaultValue: 1 })
    type: number;

    @Column({ allowNull : true })
    name: string;

    @Column({ allowNull: true })
    store_name: string;

    @Column({ allowNull: true})
    user_type: number;

    @Column({ allowNull: true })
    pin: string;

    @Column({ allowNull: true })
    phone: string;

    @Column({ allowNull: true })
    refferal_id: string;

    @Column({ defaultValue: 0})
    coordinator_id: number;

    @Column({ allowNull: true })
    superagent_id: number;

    @Column({ allowNull: true })
    assignee_id: number;

    @Column({ allowNull: true })
    assigned_date: Date;

    @Column({ allowNull: true })
    identity_image: string;

    @Column({ allowNull: true })
    self_image: string;

    @Column({ allowNull: true })
    self_identity_image: string;

    @Column({ 
        type: DataType.DATE,
        allowNull: true 
    })
    dob: Date;

    @Column({ allowNull: true })
    gender: string;

    @Column({ allowNull: true })
    device_id: string;

    @Column({ 
        type: DataType.DECIMAL(20),
        defaultValue: 0 
    })
    points: string;

    @Column({
        type: DataType.DECIMAL(10),
        defaultValue: 0
    })
    cash: string;

    @Column
    note: string

    @Column({ defaultValue: 0 })
    is_testing: number;

    @Column({ defaultValue: 1 })
    agent_status: number;

    @Column({ defaultValue: 1 })
    status: number;

    @Column
    remember_token: string;

    @Column
    qrcode: string;

    @Column({ allowNull: true })
    app_version: string;

    @Column({ defaultValue: 0 })
    is_trader: number;

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