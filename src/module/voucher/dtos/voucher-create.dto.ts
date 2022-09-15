

export class VoucherCreateDto{
    name: string;
    conditon: string;
    source: string;
    group_type: string;
    code: string;
    minimum_order: number;
    start_date: string;
    end_date: string;
    description1: string;
    description2: string;
    description3: string;
    user_type: number;
    nominal: number;
    title_notif: string;
    description_notif: string;
    quota_quantity: number;
    quota_user: number;
    segment_id: number;
    segment_name: string;
    area: string;
    image: string;
    items: Items[];
}

export class Items{
    product_id: number;
    product_attribute_id: number;
    minimum_quantity: number;
}