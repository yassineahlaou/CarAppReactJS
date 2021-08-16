import React  from 'react';
 const Car = ({children,color,year}) => {  /*fonction fléchée */

    
    const colorInfo = color ? (<p> Couleur : {color} </p>) : (<p>None</p>)
    var b = new Date();
   
    if (children){
        return (
            <div style={{background:'pink', width:'400px',padding:'10px',margin:'5px auto'}}>
                    <p> Marque : {children} </p>
                    <p> Age : {b.getFullYear() - year}</p>
                    {colorInfo}
    
            </div>
    
        )
    }

        else {
            return null;
        }
    

    
   
        
    
}


 export default Car

