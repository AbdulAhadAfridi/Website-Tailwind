import {FC} from "react"
const Wrapper:FC<{ children: React.ReactNode;}> = ({children}) => {
    return(
        <div className=" items-center">
            {children}
        </div>
    )

}
export default Wrapper