import { BsSearch } from "react-icons/bs"
import AdminSidebar from "../components/AdminSidebar"
import { FaRegBell } from "react-icons/fa"
import userImage from "../assets/userpic.png";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import data from "../assets/data.json";
import { Barchart, DoughnutChart } from "../components/Charts";
import { BiMaleFemale } from "react-icons/bi";
import DashboardTable from "../components/DashboardTable";

function Dashboard() {
  return (
    <div className="adminContainer">
      {/* sidebar */}
      <AdminSidebar/>
      {/* main */}
      <main className="dashboard">
        {/* search section */}
        <div className="bar">
          <BsSearch/>
          <input type="text" placeholder="Search for data, users, docs" />
          <FaRegBell/>
          <img src={userImage} alt="" />
        </div>

        {/* widget section */}
        <section className="widgetcontainer">
          <WidgetItem heading="Revenue" value={340000} percent={40} 
          amount={true} color="rgb(0,115,255)"/>

          <WidgetItem heading="Users" value={400} percent={-14} 
          color="rgb(0,198,202)"/>

          <WidgetItem heading="Transactions" value={23000} percent={80} 
          color="rgb(255 196 0)"/>

          <WidgetItem heading="Products" value={1000} percent={30} 
          color="rgb(76 0 255)"/>
        </section>

        {/* graph section */}
        <section className="graphcontainer">
          {/* chart */}
          <div className="revChart">
            <h2>Revenue & Transaction</h2>
            {/* graph */}
            <Barchart
              data_1={[200,444,343,556,778,455,990]}
              data_2={[300,144,433,655,237,755,190]}
              title_1="Revenue" 
              title_2="Transaction"
              bgcolor_1="rgb(0,115,255)"
              bgcolor_2="rgba(53,162,235,0.8)"
            />
          </div>
          {/* inventory */}
          <div className="dashboardcatagories">
            <h2> Inventory</h2>
            <div>
              {
                data.categories.map((i) => (
                  <CategoryItem key={i.heading} color={`hsl(${i.value * 4},${i.value}%, 50%)`} value={i.value} heading={i.heading}/>
                ))
              }
            </div>
          </div>
        </section>

        {/* transaction container */}
        <section className="transactionContainer">
          <div className="genderChart">
            <h2>Gender Ratio</h2>
            {/* chart */}
            <DoughnutChart
              labels={["Female","Male"]} 
              data={[12,19]}
              backgroundColor={["hsl(340,82%,56%)", "rgba(53,162,235,0.8)"]} 
              cutout={90}
            />
            <p>
              <BiMaleFemale/>
            </p>
          </div>
          {/* table */}
              <DashboardTable data={data.transaction}/>
        </section>
      </main>
    </div>
  )
}

interface WidgetItemProps{
  heading:string;
  value:number;
  percent:number;
  color:string;
  amount?:boolean
}
const WidgetItem = ({heading,value,percent,color,amount = false}:WidgetItemProps) => (
  <article className="widget">
    <div className="widgetInfo">
      <p>{heading}</p>
      <h4>{amount? `$${value}`:value}</h4>
      {
        percent>0?(
          <span className="green"> 
            <HiTrendingUp/> +{percent}%{" "}
          </span>
        ):(
          <span className="red"> 
            <HiTrendingDown/> {percent}%{" "}
          </span>
        )
      }
    </div>

    <div className="widgetCircle" style={{
      background:`conic-gradient(${color} ${(Math.abs(percent)/100*360)}deg,rgba(255,255,255) 0)`
    }}>
      <span style={{color}}>{percent}%</span>
    </div>
  </article>
)

interface CategoryItemProps{
  color: string;
  value: number;
  heading: string
}

const CategoryItem = ({color,heading,value}: CategoryItemProps) =>(
  <div className="categoryItem">
    <h5>{heading}</h5>
    <div>
      <div style={{
        backgroundColor:color,
        width:`${value}%`
      }}>
      </div>
    </div>
    <span>{value}%</span>
  </div>
)

export default Dashboard