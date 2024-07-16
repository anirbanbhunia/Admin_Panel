export type orderItemsType = {
    name: string,
    photo: string,
    price: number,
    quantity: number,
    _id: string,
}

export type orderType = {
    name: string,
    address: string,
    city: string,
    state: string,
    country: string,
    pincode: number,
    subTotal: number,
    tax: number,
    discount: number,
    shippingCharges: number,
    total: number,
    orderItems: orderItemsType[],
    status: "Processing" | "Shipped" | "Delivered",
    _id: string
}