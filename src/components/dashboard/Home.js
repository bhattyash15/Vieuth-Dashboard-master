import React, {useState} from 'react'
import vieuth from '../../vieuth.png'
import logo from './logo192.png'
import avatar from './avatar.png'
import './Home.css'
import { useEffect } from 'react'
function Home(props) {
    const [width,setWidth]=useState(window.innerWidth);
    const [height,setHeight]=useState(window.innerHeight);
    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      };
    useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => window.removeEventListener("resize", updateWidthAndHeight);
    }, [width,height])
    return (
        
            <div >

            {width>=1028&&(<div className="container" style={{width:'10vw',boxShadow:' -5px 0px 5px 0px #aaaaaa',height:'100vh',overflow: 'auto',float:'right',position:'relative',top:'-47px'}}>
                    <div className="row">
                    <img className="card-img-top img-fluid" src={avatar} alt="Card image cap" width='70' height='70' />
                    </div>
                    <div className="row">
                        <small style={{fontSize:"0.8vw"}}>Total Projects</small><br/>
                        <strong style={{fontSize:"1.2vw",borderLeftColor:'black',borderLeftWidth:'2px',borderLeftStyle:'solid'}}>189</strong>
                    </div>
                    <div className="row">
                        <small style={{fontSize:"0.8vw"}}>In Progress</small><br/>
                        <strong style={{fontSize:"1.2vw",borderLeftColor:'yellow',borderLeftWidth:'2px',borderLeftStyle:'solid'}}>19</strong>
                    </div>
                    <div className="row">
                        <small style={{fontSize:"0.8vw"}}>Completed</small><br/>
                        <strong style={{fontSize:"1.2vw",borderLeftColor:'orange',borderLeftWidth:'2px',borderLeftStyle:'solid'}}>18</strong>
                    </div>
                    <div className="row">
                        <small style={{fontSize:"0.8vw"}}>Expired</small><br/>
                        <strong style={{fontSize:"1.2vw",borderLeftColor:'red',borderLeftWidth:'2px',borderLeftStyle:'solid'}}>2</strong>
                    </div>
                </div>)}
                <div >
                <div className="container  text-center  " style={{ backgroundColor:'white',color:'black',borderRadius:'12px',borderStyle:'solid',borderWidth:'1px',position:'relative',height:'17vh'}}>
            
            <div className="container menu " style={{backgroundColor:'white',borderRadius:'12px',borderStyle:'solid',borderWidth:'1px',position:'absolute',top:'-35%',height:'10vh',width:'90%',left:'5%'}}>
                 <div className="row " style={{marginTop:'1vh'}} >
                     <div className="col-xs-2">
                     <i className="fas fa-check-double"></i><br/>
                     <small style={{fontSize:'1vw'}}><strong>All</strong></small>
                     </div>
                     <div className="col-xs-2">
                     <i class="fas fa-trophy"></i><br/>
                     <small style={{fontSize:'1vw'}}><strong>Competetions</strong></small>
                     </div>
                     <div className="col-xs-2">
                     <i class="fas fa-question"></i><br/>
                     <small style={{fontSize:'1vw'}}><strong>Quizes</strong></small>
                     </div>
                     <div className="col-xs-2">
                     <i class="fas fa-laptop-code"></i><br/>
                     <small style={{fontSize:'1vw'}}><strong>Hackthons</strong></small>
                     </div>
                     <div className="col-xs-2">
                     <i class="fas fa-award"></i><br/>
                         <small style={{fontSize:'1vw'}}><strong>Scholarships</strong></small>
                     </div>
                     <div className="col-xs-2">
                     <i class="fas fa-briefcase"></i><br/>
                     <small style={{fontSize:'1vw'}}><strong>Internships</strong></small>
                     </div>
                     {/* <div className="col-xs-2">
                     <i class="fa fa-users-class"></i><br/>
                     <small><strong>Achievements</strong></small>
                     </div> */}
                 </div>
            </div>
            <div className="row menuBar" style={{bottom:'-30%'}}>
                 <div className="col-xs-5 menuBar-search" >
                 
                 <input type="text" id="search-bar"/>
 <a href="#"><i className=" search-icon fas fa-search"></i></a>
                 
                 </div>
                 <div className="col-xs-1">
                 <i className="img-fluid fas fa-check-double"></i><br/>
                     <small style={{fontSize:'1vw'}}><strong>All</strong></small>
                 </div>
                 <div className="col-xs-2">
                 <i className=" img-fluid far fa-eye"></i><br/>
                     <small style={{fontSize:'1vw'}}><strong>Latest</strong></small>
                 </div>
                 <div className="col-xs-2">
                 <i className="fas fa-hourglass-half"></i><br/>
                     <small style={{fontSize:'1vw'}}><strong>Ending</strong></small>
                 </div>
                 <div className="col-xs-1">
                 <i className="fas fa-stopwatch"></i><br/>
                     <small style={{fontSize:'1vw'}}><strong>Expired</strong></small>
                 </div>
            </div>
            {/* <div className="row" style={{fontSize:'1.1vw',paddingTop:'0.7rem'}}>
                 <div className="col-xs-2">Filter</div>
                 <div className="col-xs-2">
                 <select class="text-primary fas fa-select" name="class_logo" required>
                 <option value="fas address-book">&#xf2b9; address-book</option>
                 <option value="fas adjust">&#xf042; adjust</option>
                 <option value="fas air-freshener">&#xf5d0; air-freshener</option>
                 </select>
                 </div>
                 <div className="col-xs-2">efr</div>
                 <div className="col-xs-2">efr</div>
                 
            </div> */}
            
         </div>
         <div className="container" style={{marginTop:'2rem'}}>
             <div className="row text-center">
             <div className="col-xs-12 col-sm-6  col-md-4" >
                 <div className="card"  style={{borderRadius:'12px'}} >
                     <div >
                     <img  className="card-img-top img-fluid" src={logo} alt="Card image cap" width='100' height='100' />
                     
                     {/* <hr style={{color:'black',backgroundColor:'black'}}/> */}
                     <hr/>
                     </div>
                     <div className="card-body">
                         <div className="card-title" style={{fontWeight:'500',fontSize:'1rem',display:'flex',flex:'left',marginLeft:'0.2rem'}}>Summer Internship</div>
                         <div className="card-text">
                             <div className="row" style={{fontWeight:'400',display:'flex',flex:'left',marginLeft:'0.2rem'}}>
                                 <small>XYZ Company</small>
                             </div>
                             <div className="row text-center">
                                 <div className="col-sm-6 col-xs-6"style={{fontWeight:'500',fontSize:'0.8rem'}}>Apply Before </div>
                                 <div className="col-sm-6 col-xs-6" style={{fontWeight:'300',fontSize:'0.8rem'}}>25 Dec'19</div>
                             </div>
                             <div className="row text-center" style={{display:'flex',justifyContent:'space-around'}}>
                                 <div className="col-sm-5" style={{fontWeight:'500',borderColor:'black',backgroundColor:'white',borderWidth:'1px',borderStyle:'solid',fontSize:'0.8rem'}}><i className="fas fa-award">{` Rewards`}</i></div>
                                 <div className="col-sm-5" style={{fontWeight:'500',borderColor:'black',backgroundColor:'white',borderWidth:'1px',borderStyle:'solid',fontSize:'0.8rem'}}><i class="fa fa-eye" aria-hidden="true">{` 41`}</i></div>
                             </div>
                             <div className="row text-center" style={{display:'flex',justifyContent:'center'}}>
                                 <button className="col-xs-12 btn" style={{backgroundColor:'rgb(43, 239, 89)',width:'50%',marginBottom:'1rem',borderStyle:'solid',borderRadius:'4px',borderWidth:'0',padding:'0rem 0rem',color:'black'}}>
                                     Apply
                                 </button>

                             </div>
                         </div>
                     </div>
                 </div>
                 </div>
                 <div className="col-xs-12 col-sm-6  col-md-4" >
                 <div className="card"  style={{borderRadius:'12px'}} >
                     <div >
                     <img  className="card-img-top img-fluid" src={logo} alt="Card image cap" width='100' height='100' />
                     
                     {/* <hr style={{color:'black',backgroundColor:'black'}}/> */}
                     <hr/>
                     </div>
                     <div className="card-body">
                         <div className="card-title" style={{fontWeight:'500',fontSize:'1rem',display:'flex',flex:'left',marginLeft:'0.2rem'}}>Summer Internship</div>
                         <div className="card-text">
                             <div className="row" style={{fontWeight:'400',display:'flex',flex:'left',marginLeft:'0.2rem'}}>
                                 <small>XYZ Company</small>
                             </div>
                             <div className="row text-center">
                                 <div className="col-sm-6 col-xs-6"style={{fontWeight:'500',fontSize:'0.8rem'}}>Apply Before </div>
                                 <div className="col-sm-6 col-xs-6" style={{fontWeight:'300',fontSize:'0.8rem'}}>25 Dec'19</div>
                             </div>
                             <div className="row text-center" style={{display:'flex',justifyContent:'space-around'}}>
                                 <div className="col-sm-5" style={{fontWeight:'500',borderColor:'black',backgroundColor:'white',borderWidth:'1px',borderStyle:'solid',fontSize:'0.8rem'}}><i className="fas fa-award">{` Rewards`}</i></div>
                                 <div className="col-sm-5" style={{fontWeight:'500',borderColor:'black',backgroundColor:'white',borderWidth:'1px',borderStyle:'solid',fontSize:'0.8rem'}}><i class="fa fa-eye" aria-hidden="true">{` 41`}</i></div>
                             </div>
                             <div className="row text-center" style={{display:'flex',justifyContent:'center'}}>
                                 <button className="col-xs-12 btn" style={{backgroundColor:'rgb(43, 239, 89)',width:'50%',marginBottom:'1rem',borderStyle:'solid',borderRadius:'4px',borderWidth:'0',padding:'0rem 0rem',color:'black'}}>
                                     Apply
                                 </button>

                             </div>
                         </div>
                     </div>
                 </div>
                 </div>
                 
                 <div className="col-xs-12 col-sm-6  col-md-4" >
                 <div className="card"  style={{borderRadius:'12px'}} >
                     <div >
                     <img  className="card-img-top img-fluid" src={logo} alt="Card image cap" width='100' height='100' />
                     
                     {/* <hr style={{color:'black',backgroundColor:'black'}}/> */}
                     <hr/>
                     </div>
                     <div className="card-body">
                         <div className="card-title" style={{fontWeight:'500',fontSize:'1rem',display:'flex',flex:'left',marginLeft:'0.2rem'}}>Summer Internship</div>
                         <div className="card-text">
                             <div className="row" style={{fontWeight:'400',display:'flex',flex:'left',marginLeft:'0.2rem'}}>
                                 <small>XYZ Company</small>
                             </div>
                             <div className="row text-center">
                                 <div className="col-sm-6 col-xs-6"style={{fontWeight:'500',fontSize:'0.8rem'}}>Apply Before </div>
                                 <div className="col-sm-6 col-xs-6" style={{fontWeight:'300',fontSize:'0.8rem'}}>25 Dec'19</div>
                             </div>
                             <div className="row text-center" style={{display:'flex',justifyContent:'space-around'}}>
                                 <div className="col-sm-5" style={{fontWeight:'500',borderColor:'black',backgroundColor:'white',borderWidth:'1px',borderStyle:'solid',fontSize:'0.8rem'}}><i className="fas fa-award">{` Rewards`}</i></div>
                                 <div className="col-sm-5" style={{fontWeight:'500',borderColor:'black',backgroundColor:'white',borderWidth:'1px',borderStyle:'solid',fontSize:'0.8rem'}}><i class="fa fa-eye" aria-hidden="true">{` 41`}</i></div>
                             </div>
                             <div className="row text-center" style={{display:'flex',justifyContent:'center'}}>
                                 <button className="col-xs-12 btn" style={{backgroundColor:'rgb(43, 239, 89)',width:'50%',marginBottom:'1rem',borderStyle:'solid',borderRadius:'4px',borderWidth:'0',padding:'0rem 0rem',color:'black'}}>
                                     Apply
                                 </button>

                             </div>
                         </div>
                     </div>
                 </div>
                 </div>
             </div>
         
         </div>
                </div>
                
            </div>
            
        
        
    )
}

export default Home

