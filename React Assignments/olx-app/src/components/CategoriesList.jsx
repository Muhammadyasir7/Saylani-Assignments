import { IoIosArrowDown } from "react-icons/io";
import "../css/style.scss"
function CategoriesList(){
    return(
        <div>
            <div className="cat-list">
                    <div>All categories <IoIosArrowDown /></div>
                <ul>
                    <li>Mobile Phones</li>
                    <li>Cars</li>
                    <li>Motorcycles</li>
                    <li>Houses</li>
                    <li>Video-Audios</li>
                    <li>Tablets</li>
                    <li>Land & Plots</li>
                </ul>
            </div>
        </div>
    )
}

export default CategoriesList;