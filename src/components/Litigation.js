// import React from 'react'
// import { Redirect } from 'react-router-dom'
// import LitigationsContainer from '../containers/LitigationsContainer'
// import Litigations from './Litigations'


// const Litigation = (props) => {

//     let litigation = props.litigation[props.match.params.id - 1]

//     return (
//         <div> 
//            <h2>{litigation.caption}</h2>
//            <LitigationsContainer litigation={litigation}/>
//         </div>  
//     )
// }

// export default Litigation


// // import React from 'react'
// // import { Redirect } from 'react-router-dom'
// // import LitigationsContainer from '../containers/LitigationsContainer'

// // const Lawyer = (props) => {

// //     let lawyer = props.lawyers[props.match.params.id - 1]
// //     //let lawyer = props.lawyers.filter(lawyer => lawyer.id == props.match.params.id)[0]

// //     return (
// //         <div> 
// //             <h2>
// //                 {/* {lawyer ? null : <Redirect to='/lawyers'/>} */}
// //                 {lawyer ? lawyer.first_name : null} {lawyer ? lawyer.last_name : null} <br></br>
// //                 Budget: {lawyer ? lawyer.retainer : null}
// //             </h2>
// //             <LitigationsContainer lawyer={lawyer}/>
// //         </div>  
// //     )
// // }

// // export default Lawyer