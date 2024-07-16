import { IconType } from "react-icons"
import { AiFillFileText } from "react-icons/ai"
import { FaChartBar, FaChartLine, FaChartPie, FaGamepad, FaStopwatch } from "react-icons/fa"
import { IoIosPeople } from "react-icons/io"
import {RiCoupon3Fill, RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri"
import { Link, useLocation,Location } from "react-router-dom"

function AdminSidebar() {

    const location = useLocation()

  return (
    <aside>
        <h2>Logo.</h2>
        {/* dashboardmain */}
        <DivOne location={location}/>
        {/* charts */}
        <DivTwo location={location}/>
        {/* apps */}
        <DivThree location={location}/>
    </aside>
  )
}

const DivOne = ({location}:{location:Location}) =>(
    <div>
            <h5>Dashboard</h5>
            <ul>
               {/* dashboard */}
               <Li url="/admin/dashboard" location={location} text="Dashboard" Icon={RiDashboardFill}/> 
               {/* product */}
               <Li url="/admin/products" location={location} text="Products" Icon={RiShoppingBag3Fill}/>
               {/* customer */}
               <Li url="/admin/customer" location={location} text="Customer" Icon={IoIosPeople}/>
               {/* transaction */}
               <Li url="/admin/transaction" location={location} text="Transaction" Icon={AiFillFileText}/>
            </ul>
        </div>
)

const DivTwo = ({location}:{location:Location}) => (
    <div>
            <h5>Charts</h5>
            <ul>
               {/* bar */}
               <Li url="/admin/chart/bar" location={location} text="Bar" Icon={FaChartBar}/> 
               {/* pie */}
               <Li url="/admin/chart/pie" location={location} text="Pie" Icon={FaChartPie}/>
               {/* line */}
               <Li url="/admin/chart/line" location={location} text="Line" Icon={FaChartLine}/>
            </ul>
        </div>
)

const DivThree = ({location}:{location:Location}) =>(
    <div>
            <h5>Apps</h5>
            <ul>
               {/* stopwatch */}
               <Li url="/admin/app/stopwatch" location={location} text="Stopwatch" Icon={FaStopwatch}/> 
               {/* coupon */}
               <Li url="/admin/app/coupon" location={location} text="Coupon" Icon={RiCoupon3Fill}/>
               {/* toss */}
               <Li url="/admin/app/toss" location={location} text="Toss" Icon={FaGamepad}/>
            </ul>
        </div>
)

interface Liprops{
    url:string;
    location: Location;
    text: string;
    Icon: IconType
}

const Li = ({url,location,text,Icon}:Liprops) =>(
    <li style={
        {
            backgroundColor:location.pathname.includes(url)?
            "rgba(0,115,255,0.1)":"white",
        }
    }>
        <Link to={url} style={
            {
                color:location.pathname.includes(url)?
                "rgb(0,115,255)":"black",
            }
        }>
            <Icon/>
            {text}
        </Link>
    </li>
)

export default AdminSidebar