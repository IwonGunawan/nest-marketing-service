import { Injectable } from "@nestjs/common";
import { InjectConnection, InjectModel } from "@nestjs/sequelize";
import { QueryTypes, Sequelize } from "sequelize";
import { PromoModel } from "../../../../../shared/models/promo.model";
import { PromoProductsModel } from "../../../../../shared/models/promo_products.model";

@Injectable()
export class VoucherRepository{

    constructor(
        @InjectConnection() private sequelize: Sequelize,
        @InjectModel(PromoModel) private promoModel: typeof PromoModel,
        @InjectModel(PromoProductsModel) private promoProductsModel: typeof PromoProductsModel
    ){}
    
    
    async getListVoucher(params): Promise<any[]>{
        let limit   = params.limit
        let offset  = (params.page - 1) * limit

        const query = await this.promoModel.findAll({
            where:{
                group_type  : 'grosir',
                type        : 'voucher',
            }, 
            offset  : offset,
            limit   : Number(limit), 
            order   : [
                [params.sortBy, params.sortType]
            ] 
        })

        return query;
    }

    async countPromoProduct(promoId: number){
        const count = await this.promoProductsModel.count({
            where : {
                promo_id : promoId
            }
        })

        return count;
    }

    async getProductByPromoId(promoId:number): Promise<any[]>{
        const query = `SELECT pp.id, pp.promo_id, pp.product_id, pp.product_attribute_id, pp.minimum_quantity, p.name, pa.unit
        FROM promo_products AS pp
        LEFT JOIN products AS p ON pp.product_id = p.id
        LEFT JOIN product_attributes as pa ON pp.product_attribute_id = pa.id
        WHERE promo_id = :promoId`

        const result = await this.sequelize.query(query, {
            replacements : { promoId: promoId}, 
            type : QueryTypes.SELECT
        })

        return result
    }

    
      

}


/**
 * where condition ok
 * limit and offset ok
 * order by ok
 * when condition query 
 */

/*
async getListVoucher(): Promise<PromoModel[]>{
    return this.promoModel.findAll()
} 

async getListVoucher(): Promise<any[]>{
    const [result] = await this.sequelize.query(
        'SELECT id, source, type FROM promo ORDER BY id ASC LIMIT 3'
    )

    return result;
}
*/