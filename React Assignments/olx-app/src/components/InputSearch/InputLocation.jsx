import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function InputLocation(){
    return(
        <div>
            <div className="input-location">
                <IoSearchSharp />
                <input type="d" />
                <span><IoIosArrowDown /></span>
            </div>
        </div>
    )
}

export default InputLocation;