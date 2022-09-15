import { Injectable } from "@nestjs/common";
import { CustomerModel } from "src/shared/models/customer.model";
import { SegmentModel } from "src/shared/models/segment.model";
import { VoucherCreateDto } from "../dtos/voucher-create.dto";
import { VoucherRepository } from "../infra/sequelize/repositories/voucher.repository";

@Injectable()
export class VoucherService{

    constructor(private readonly voucherRepository: VoucherRepository){}

    async listVoucher(params){
        /**
         * get list voucher
         * get product by promo_id
         */
        const listVoucher = await this.voucherRepository.getListVoucher(params)

        for(let [index, row] of listVoucher.entries()){
            let promoId = row.id
            let promoProducts = []
            let count = await this.voucherRepository.countPromoProduct(promoId)
            
            if (count > 0) {
                promoProducts = await this.voucherRepository.getProductByPromoId(promoId)
            }

            listVoucher[index].dataValues['promo_products'] = promoProducts
        }
        
        return listVoucher
    }


    async create(req: VoucherCreateDto){
        /**
         * field name : customer_id  -> alias segment_id
         */

        const segmentId = req.segment_id
        const voucherImage = 'https://s3-ap-southeast-1.amazonaws.com/superagen/img/promo/RVFF1531061605515494.jpg'

        /**
         * insert table segments
         * insert table customer_segments
         * insert table promo
         * insert table promo_product
         * insert table promo_status_log
         */
        if (req.user_type == 2) {
            const customer = await this.voucherRepository.getCustomerById(segmentId)
            const segmentNameConcat = customer.name.concat(" | SA-", customer.id.toString(), " | ", customer.phone)
            
            const checkSegment = await this.voucherRepository.checkSegment(segmentNameConcat)
            if (checkSegment instanceof SegmentModel) {
                const createSegment = await this.voucherRepository.createSegment({
                    name        : segmentNameConcat, 
                    user_type   : 2,
                    status      : 1, 
                    created_by  : 0
                })
                console.log(`create segment id ${createSegment.dataValues.id}`);
                
                const createCustomerSegment = await this.voucherRepository.createCustomerSegment({
                    customer_id : segmentId,
                    created_by  : 0
                })
                console.log(`create customer_segment id ${createCustomerSegment.dataValues.id}`);
            } 
        }

        const createPromo = await this.voucherRepository.createPromo({
            type              : 'voucher',
            source            : req.source,
            name              : req.name,
            code              : req.code,
            start_date        : req.start_date,
            end_date          : req.end_date,
            nominal           : req.nominal,
            user_type         : req.user_type,
            segment_id        : req.segment_id != null ? req.segment_id : 0,
            quota_quantity    : req.quota_quantity,
            area              : req.area,
            quota_user        : req.quota_user,
            group_type        : 'grosir',
            condition         : req.conditon,
            minimum_order     : req.minimum_order,
            description1      : req.description1,
            description2      : req.description2,
            description3      : req.description3,
            title_notif       : req.title_notif,
            description_notif : req.description_notif,
            image             : voucherImage,
            status            : 0,
            created_by        : 0,
        })
        console.log(`create promo ${createPromo.dataValues.id}`);

        if (typeof req.items != 'undefined' && req.items.length > 0) {
            for(let [index, row] of req.items.entries()){
                const createPromoProduct = await this.voucherRepository.createPromoProduct({
                    product_id              : row.product_id,
                    product_attribute_id    : row.product_attribute_id,
                    minimum_quantity        : row.minimum_quantity
                })
                console.log(`index ${index}`);
                console.log(`create promo_product ${createPromoProduct.dataValues.id}`);
            }
        }

        const createPromoStatusLog = await this.voucherRepository.createPromoStatusLog({
            promo_id        : createPromo.dataValues.id,
            before_status   : createPromo.dataValues.status,
            current_status  : 0,
            created_by      : 0
        })
        console.log(`create promo status log ${createPromoStatusLog.dataValues.id}`);
        
        
        return createPromo.dataValues
    }
}