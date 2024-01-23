import { IoSearchSharp } from "react-icons/io5";
import "./style.scss"




function InputSearch(){
    return(
        <div>
            <div className="inp-main">
              <input type="text" placeholder="Find Cars, Mobile Phones and more..." className="input-sec"/>
              <button><IoSearchSharp /></button>
            </div>
        </div>
    )
}
export default InputSearch;