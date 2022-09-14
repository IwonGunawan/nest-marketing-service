import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";
import { VoucherModule } from './module/voucher/voucher.module';
import * as dotenv from "dotenv";
dotenv.config()

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect   : 'mysql',
      host      : process.env.DBHOST,
      port      : Number(process.env.DBPORT || 3306), 
      username  : process.env.DBUSER,
      password  : process.env.DBPASSWORD,
      database  : process.env.DBNAME,
      models    : [],
      synchronize     : false,
      autoLoadModels  : true
    }),
    VoucherModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
