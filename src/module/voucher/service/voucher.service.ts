import { Injectable } from "@nestjs/common";
import { VoucherRepository } from "../infra/sequelize/repositories/voucher.repository";

@Injectable()
export class VoucherService{

    constructor(private readonly voucherRepository: VoucherRepository){}

    async listVoucher(params){
        const listVoucher = await this.voucherRepository.getListVoucher(params)

        for(let [index, row] of listVoucher.entries()){
            let promoId = row.id
            let promoProducts = []
            let count = await this.voucherRepository.countPromoProduct(promoId)
            
            if (count > 0) {
                promoProducts = await this.voucherRepository.getProductByPromoId(promoId)
            }

            // add promo_products
            listVoucher[index].dataValues['promo_products'] = promoProducts
        }
        
        return listVoucher
    }
}