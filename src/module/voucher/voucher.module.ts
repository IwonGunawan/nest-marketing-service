import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";

import { VoucherController } from "./infra/htpp/controller/voucher.controller";
import { PromoModel } from "../../shared/models/promo.model";
import { PromoProductsModel } from "../../shared/models/promo_products.model";
import { VoucherRepository } from "./infra/sequelize/repositories/voucher.repository";
import { VoucherService } from "./service/voucher.service";
import { CustomerModel } from "src/shared/models/customer.model";
import { SegmentModel } from "src/shared/models/segment.model";
import { CustomerSegmentModel } from "src/shared/models/customer_segment.model";
import { PromoStatusLogModel } from "src/shared/models/promo_status_log.model";

@Module({
    imports : [
        SequelizeModule.forFeature([
            CustomerModel,
            CustomerSegmentModel,
            PromoModel, 
            PromoProductsModel,
            PromoStatusLogModel,
            SegmentModel
        ])
    ],
    controllers : [VoucherController],
    providers : [VoucherService, VoucherRepository]
})
export class VoucherModule{}