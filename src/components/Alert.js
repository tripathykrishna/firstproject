import React from 'react'

function Alert(props) {
    
   if (props.Alert) {
       console.log(props.Alert.type==="success"?"div-success":"div-fail")
       console.log("div-"+props.Alert.type)
   }
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <div style={{height:'69px'}}>

       {/* { props.Alert &&<div className={`alert alert-${props.Alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.Alert.type)}</strong>:{props.Alert.msg}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>} */}
     </div>
            
        
    )
}

export default Alert
// step1-  creat div-success & div-fail in css
// step2-pass classname through props then give condtions if it sucess thn show div succssotherwise show fail