import { ReactElement, useCallback, useState } from "react"
import AdminSidebar from "../components/AdminSidebar"
import { Column } from "react-table"
import TableHoc from "../components/TableHoc"
import { Link } from "react-router-dom"

interface transactionInterFace{
  user: string,
  amount: number,
  discount: number,
  quantity: number,
  status: ReactElement,
  action: ReactElement
}

const column: Column<transactionInterFace>[] = [
  {
    Header: "User",
    accessor: "user"
  },
  {
    Header: "Amount",
    accessor: "amount"
  },
  {
    Header: "Discount",
    accessor: "discount"
  },
  {
    Header: "Quantity",
    accessor: "quantity"
  },
  {
    Header: "Status",
    accessor: "status"
  },
  {
    Header: "Action",
    accessor: "action"
  },
]

const arr: transactionInterFace[] = [
  {
    user: "Charas",
    amount: 4500,
    discount: 400,
    quantity: 3,
    status: <span className="red">Processing</span>,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
  },
  {
    user: "Xavirors",
    amount: 6999,
    discount: 400,
    quantity: 6,
    status: <span className="green">Shipped</span>,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
  },
  {
    user: "Anirban",
    amount: 5000,
    discount: 800,
    quantity: 8,
    status: <span className="purple">Delivered</span>,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
  },
]

function Transaction() {

  const [data] = useState<transactionInterFace[]>(arr)
  const table = useCallback(TableHoc(column,data,"dashboard_product_box","Transactions",true),[])

  return (
    <div className="adminContainer">
      {/* sidebar */}
      <AdminSidebar/>
      {/* main */}
      <main>{table()}</main>
    </div>
  )
}

export default Transaction