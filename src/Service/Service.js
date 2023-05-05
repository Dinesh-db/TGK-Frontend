import "./Service.css";

import image1 from "../assests/Services/1.jpg"
import image2 from "../assests/Services/2.jpg"
import image3 from "../assests/Services/3.jpg"
// import Projects from "../Components/projects"


function Service1(){
    return(
        <>
        <div className="service-container">
            <div className="ser-con1">
                <div className="ser-img">
                    <img src={image1} ser="true" alt="servie-img1"></img>
                </div>
                <div className="ser-text">
                    <div className="service-heading">
                        <h1>MULTIDISCIPLINARY CONSTRUCTION MANAGEMENT CONSULTING SERVICES</h1>
                    </div>
                    <div className="service-body">
                        <h5>Our approach to construction management is specifically geared toward owners, design professionals, contractors, and subcontractors:</h5>
                        <ul>
                            <li>Project Management for Owners</li>
                            <li>Pre-construction feasibility</li>
                            <li>On-site representation</li>
                            <li>Quality control inspections</li>
                            <li>CPM schedule preparation and maintenance</li>
                            <li>Schedule claim preparation/defense</li>
                            <li>Budgeting/estimating</li>
                            <li>Project phasing development</li>
                            <li>Monthly disbursement reviews</li>
                            <li>Punch list preparation and management</li>
                            <li>Risk Management</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="ser-con2">
                <div className="ser-text">
                    <div className="service-heading">
                        <h1>SEAMLESS DESIGN BUILD SERVICES</h1>
                    </div>
                    <div className="service-body">
                        <p>We deliver design/build solutions integrated with our project delivery systems for a seamless transition from your initial idea to its grand opening.</p>
                        <p>Throughout the design/build process, Page Building Construction Co. 
                            works closely with the design team and our prequalified subcontractors during the design process to ensure that the most cost-effective construction methods are incorporated at the conceptual design level.
                            This forethought provides maximum value without the need for numerous re-designs.</p>
                        <p>During design development, we provide budget updates including subcontractor input to provide real time and current market prices.</p>
                    </div>
                </div>
                <div className="ser-img2">
                    <img src={image2} ser="true" alt="servie-img1"></img>
                </div>
            
            </div>
            <div className="ser-con1">
                <div className="ser-img">
                    <img src={image3} ser="true" alt="servie-img1"></img>
                </div>
                <div className="ser-text">
                    <div className="service-heading">
                        <h1>COMPREHENSIVE GENERAL CONTRACTING SERVICES</h1>
                    </div>
                    <div className="service-body">
                        <h5>Page Building Construction Co. offers a full range of GC/CM/CM at Risk services to a wide range of markets including industrial, commercial, retail, luxury condominiums, and workplace environments. Typical GC/CM/CM at Risk services provided by Page Building Construction include:</h5>
                        <ul>
                            <li>Team approach to project delivery</li>
                            <li>Detailed scheduling & monitoring of project progress</li>
                            <li>Phasing and Scheduling</li>
                            <li>Systems coordination and commissioning including training</li>
                            <li>Solutions based problem solving</li>
                            <li>Strict safety and quality control programs</li>
                            <li>Pre-plan major activities to minimize disruptions in occupied settings</li>
                            <li>Utilize local resources to provide the best value</li>
                            <li>Aggressive approach to punch list execution and completion</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}


export default Service1;