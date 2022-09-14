import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";

import { VoucherController } from "./infra/htpp/controller/voucher.controller";
import { PromoModel } from "../../shared/models/promo.model";
import { PromoProductsModel } from "../../shared/models/promo_products.model";
import { VoucherRepository } from "./infra/sequelize/repositories/voucher.repository";
import { VoucherService } from "./service/voucher.service";

@Module({
    imports : [
        SequelizeModule.forFeature([
            PromoModel, 
            PromoProductsModel
        ])
    ],
    controllers : [VoucherController],
    providers : [VoucherService, VoucherRepository]
})
export class VoucherModule{}