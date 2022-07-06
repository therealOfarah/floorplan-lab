import Bedroom from "./Bedroom"
import Kitchen from "./Kitchen"
import FullBathroom from "./Bathroom"
import LivingRoom from "./LivingRoom"
import HalfBathroom from "./HalfBathroom"
const FloorPlan = (props) => {
    return (
      <>
        <div>
          <Kitchen />
        </div>
        <div>
          <Bedroom bedNum={1}/>
        </div>
        <div>
          <LivingRoom />
        </div>
        <div>
          <Bedroom bedNum={2}/>
        </div>
        <div>
          <FullBathroom />
        </div>
        <div>
          <Bedroom bedNum={3}/>
        </div>
        <div>
          <HalfBathroom />
        </div>
      </>
    )
  }

export default FloorPlan