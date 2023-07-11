import { useEffect, useState } from "react"
import NavMain from "./navbars/NavMain"
import NavMobile from "./navbars/NavMobile"

const Navigation = () => {
    const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth)
    useEffect(() => {
        window.addEventListener("resize",()=> setInnerWidth(window.innerWidth))
    })
    return (
        <>
            {innerWidth >= 900 ? <NavMain /> : <NavMobile />}
            {/* <NavMobile /> */}
            {/* <NavMain /> */}

        </>
    )
}

export default Navigation