import "../css/module.css";

import op1 from "../images/op1.png"
import op2 from "../images/op2.png"
import op3 from "../images/op3.png"
import op4 from "../images/op4.png"

function Module(){
    return(
        <div className="git_module">
            <h1 style={{fontSize: "40px"}}>Modules and Output</h1>
            <h3 style={{fontSize: "28px"}}>1-Area Calculation and Conversions</h3>
            <p>The area calculation and conversion algorithm play a pivotal role in providing farmers with accurate insights into their agricultural plots. Leveraging the capabilities of GeoPandas, the algorithm meticulously processes shapefile data, computing the total area of individual plots. This data, initially in its native units, is then thoughtfully converted into units preferred by the user, thereby enhancing usability. By employing geometric operations and mathematical precision, this algorithm ensures that farmers receive reliable area information, enabling them to make well-informed decisions regarding resource allocation and utilization.</p>
            <div className="git_img">
                <img src={op1} style={{width: "300px"}}></img>
                <img src={op2}></img>
            </div>
            <h3 style={{fontSize: "28px"}}>2-Polygon Removal</h3>
            <p>The polygon removal algorithm empowers users with the capability to engage in data-driven land management practices. Built on the foundation of Shapely's geometry operations, this algorithm provides users with the ability to selectively remove specific subdivisions from their layout. This process can be guided by predefined criteria that align with the users' land management strategies. The algorithm's interactive nature offers farmers the opportunity to optimize their land by eliminating redundant or problematic subdivisions. This not only streamlines land usage but also facilitates targeted improvements and enhancements.</p>
            <img src={op3} style={{marginLeft: "250px", marginTop: "50px", marginBottom: "50px"}}></img>
            <h3 style={{fontSize: "28px"}}>3-Merging Geometrics</h3>
            <p>The geometric merging algorithm introduces an innovative approach to enhance land layout efficiency. By harnessing the power of Shapely's geometric processing, this algorithm identifies adjacent polygons that meet predefined conditions for merging. These conditions could include factors such as proximity, suitability, and contiguity. The algorithm seamlessly combines these polygons, resulting in optimized and consolidated land plots. This process ensures that land resources are utilized effectively, minimizing fragmentation, and maximizing operational efficiency.</p>
            <img src={op4} style={{marginLeft: "250px", marginTop: "50px"}}></img>
            <hr style={{width: "70%", marginTop: "70px"}}></hr>
        </div>
    )
}

export default Module;