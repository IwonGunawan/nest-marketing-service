import { Body, Controller, Request, Get, Post, Put, Delete } from "@nestjs/common";
import { VoucherCreateDto } from "src/module/voucher/dtos/voucher-create.dto";
import { VoucherService } from "src/module/voucher/service/voucher.service";

@Controller('vouchers')
export class VoucherController{

    constructor(private readonly voucherService: VoucherService){}

    @Get()
    async listVoucher(@Request() req){   
        const params = {
            page       : typeof req.query.page != 'undefined' && req.query.page != '' ? req.query.page : 1,
            limit      : typeof req.query.limit != 'undefined' && req.query.limit != '' ? req.query.limit : 10,
            sortBy     : typeof req.query.sort_by != 'undefined' && req.query.sort_by != '' ? req.query.sort_by : 'updated_at',
            sortType   : typeof req.query.sort_type != 'undefined' && req.query.sort_type != '' ? req.query.sort_type : 'desc',
            condition  : typeof req.query.condition != 'undefined' && req.query.condition != '' ? req.query.condition : "all",
            status     : typeof req.query.status != 'undefined' && req.query.status != '' ? req.query.status : -2,
            userType   : typeof req.query.user_type != 'undefined' && req.query.user_type != '' ? req.query.user_type : -3,
            search     : typeof req.query.search != 'undefined' && req.query.search != '' ? req.query.search : null
        }
        
        return {
            data        : await this.voucherService.listVoucher(params),
            count_rows  : 0,
            count_pages : params.page
        }
    }

    @Post()
    async createVoucher(@Body() body: VoucherCreateDto){
        return{
            status      : 'success',
            message     : 'Data berhasil disimpan',
            result      : await this.voucherService.create(body)
        }
    }

}