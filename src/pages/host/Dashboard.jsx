import { Outlet } from "react-router-dom"


const Dashboard = () => {
  return (
      <div>
          <div>dashboard</div>
          <Outlet />
      </div>
  )
}

export default Dashboard