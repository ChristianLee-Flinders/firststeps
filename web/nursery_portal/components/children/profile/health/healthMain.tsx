
import HealthInformation from "./healthInformation"
import Permissions from "./permissions"
import Safeguarding from "./safeguarding"
import SENDSupport from "./SENDSupport"

function HealthMain() {
    return (
        <>
            <Permissions />
            <HealthInformation />
            <SENDSupport />
            <Safeguarding />
        </>
    )
}

export default HealthMain