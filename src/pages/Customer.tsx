import { ReactElement, useCallback, useState } from "react"
import AdminSidebar from "../components/AdminSidebar"
import { Column } from "react-table"
import TableHoc from "../components/TableHoc"
import { FaTrash } from "react-icons/fa"

interface customerInterface{
  avatar: ReactElement,
  name: string,
  gender: string,
  email: string,
  role: string,
  action: ReactElement 
}

const column: Column<customerInterface>[] = [
  {
    Header:"Avatar",
    accessor:"avatar"
  },
  {
    Header:"Name",
    accessor:"name"
  },
  {
    Header:"Gender",
    accessor:"gender"
  },
  {
    Header:"Email",
    accessor:"email"
  },
  {
    Header:"Role",
    accessor:"role"
  },
  {
    Header:"Action",
    accessor:"action"
  },
]

const img = "https://randomuser.me/api/portraits/women/43.jpg";
const img2 = "https://randomuser.me/api/portraits/women/50.jpg";

const arr:customerInterface[] = [
  {
    avatar: <img src={img} alt="avatar" style={{borderRadius:"50%"}}/>,
    name: "Emily Paimer",
    gender: "female",
    email: "emily.paimer@example.com",
    role: "User",
    action: <button>{<FaTrash/>}</button>
  },
  {
    avatar: <img src={img2} alt="avatar" style={{borderRadius:"50%"}}/>,
    name: "May Scoot",
    gender: "female",
    email: "aunt.may@example.com",
    role: "User",
    action: <button>{<FaTrash/>}</button>
  },
]

function Customer() {
  const [data] = useState<customerInterface[]>(arr)
  const table = useCallback(TableHoc(column,data,"dashboard_product_box","Customers",true),[])
  return (
    <div className="adminContainer">
      {/* sidebar */}
      <AdminSidebar/>
      {/* main */}
      <main>{table()}</main>
    </div>
  )
}

export default Customer