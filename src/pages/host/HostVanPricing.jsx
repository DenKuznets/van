import { useOutletContext } from "react-router-dom" //передача данных от родителя детям через outlet

const HostVanPricing = () => {
  console.log(useOutletContext());
  return (
    <div>Price: { useOutletContext().price }$</div>
  )
}

export default HostVanPricing