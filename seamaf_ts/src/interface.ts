export interface Products{
    id:number,
    name:string,
    price:number,
    description:string,
    category_id:string,
    quantity:number,
    images:[
        {
            path:string
        }
    ]
}