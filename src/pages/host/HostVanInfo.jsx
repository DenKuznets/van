import { useOutletContext } from "react-router-dom"

const HostVanInfo = () => {
  const { description } = useOutletContext();
  return (
    <div>
      <p>
        {description}
    </p>
    </div>
  )
}

export default HostVanInfo