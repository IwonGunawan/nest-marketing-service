import { Test } from "@nestjs/testing";
import { VoucherController } from "./voucher.controller";
import { VoucherService } from "./../../../service/voucher.service";

describe('VoucherController', () => {
    let voucherController: VoucherController
    let voucherService: VoucherService

    beforeEach(async ()=>{
        const module = await Test.createTestingModule({
            controllers     : [VoucherController],
            providers       : [VoucherService]
        }).compile()

        voucherService = module.get<VoucherService>(VoucherService)
        voucherController = module.get<VoucherController>(VoucherController)
    })

    describe('listVoucher', ()=>{
        it('should return array of voucher', async () =>{
            const result = ['test']
            jest.spyOn(voucherService, 'listVoucher').mockImplementation(async () => result)

            expect(await voucherController.listVoucher('page=1&limit=10&sort_by=id&sort_type=asc&warehouse_id=1&status=-2&condition=all&user_type=-3')).toBe(result)
        })
    })

})


