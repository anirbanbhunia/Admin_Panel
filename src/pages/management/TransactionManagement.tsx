import { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar"
import { orderItemsType, orderType } from "../../type";
import { Link } from "react-router-dom";

const img = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const orderItems: orderItemsType[] =[{
  name:"Puma Shoes",
  photo:img,
  price:2000,
  quantity:4,
  _id:"uguiwwiuytef72t"
}]

function TransactionManagement() {

const [order, setOrder] = useState<orderType>({
  name:"Anirban Bhunia",
  address:"abxn07 black street",
  city: "New Wakhem",
  state: "Navada",
  pincode:797928,
  country:"India",
  tax:200,
  discount:1200,
  shippingCharges: 0,
  subTotal:4000,
  total: 4000+200+0-1200,
  status:"Processing",
  orderItems: orderItems,
  _id:"fgrugrgbgark"
})

const {name,address,city,state,pincode,country,tax,discount,shippingCharges,subTotal,total,status} = order

const updateHandler = () => {
  setOrder((prev) =>({
    ...prev, status: prev.status === "Processing"?"Shipped":"Delivered"
  }))
}

    return (
        <div className="adminContainer">
          {/* sidebar */}
          <AdminSidebar/>
          {/* main */}
          <main className="product_management">
            <section>
                <h2>Order Items</h2>
                {
                  order.orderItems.map(i =>(
                    <ProductCard photo={i.photo} name={i.name} price={i.price} quantity={i.quantity}
                    _id={i._id} />
                  ))
                }
            </section>
            <article className="shipping_info_card">
                <h1>Order Info</h1>
                <h5>User Info</h5>
                <p>Name: {name}</p>
                <p>Address: {address}, {city}, {state}, {country} {pincode}</p>

                <h5>Amount Info</h5>
                <p>Subtotal: ${subTotal}</p>
                <p>ShippingCharges: ${shippingCharges}</p>
                <p>Tax: ${tax}</p>
                <p>Discount: ${discount}</p>
                <p>Total: ${total}</p>

                <h5>Status Info</h5>
                <p>Status: 
                  <span className={status === 'Delivered'?"purple":
                    status === 'Shipped'?"green":"red"
                  }> {status}</span>
                </p>
                <button onClick={updateHandler}>Process Status</button>
            </article>
          </main>
        </div>
      )
}

const ProductCard = ({photo,name,price,quantity,_id}:orderItemsType) => (
  <div className="transaction_product_card">
    <img src={photo} alt={name}/>
    <Link to={`/product/${_id}`}>{name}</Link>
    <span>${price} X {quantity} = ${price*quantity}</span>
  </div>
)

export default TransactionManagement