import React, { Component } from 'react';
import Car from './Cars';


class Mycars extends  Component{

    state = { cars : [ {name : 'Ford ', color : 'green' , year : 2018},
    {name : 'Dacia ', color : 'red' , year : 2020},
    {name : 'Oodi ', color : 'green' , year : 2010}


],

tit:'Welcome to my Car Gallery'



    }


    /*noCopy =()=>{
        alert('Don\'t copy this');
    }

    mouse =(e) =>{

        console.log(e.target)

        if (e.target.classList.contains('styled')){
            e.target.classList.remove('styled');

        }
        else {

            e.target.classList.add('styled');
        }


    }*/
    
    render(){
        return (
            <div>
            
            <h1 /*onMouseOver={this.mouse}*/>{this.state.tit}</h1>
            <p  className="hi" style={{padding:'10px',margin:'5px auto'} } /*onCopy={() => this.noCopy()}*/>Code Promo : GH5864 </p>

                {/*<Car color={this.state.cars[0].color}  year ={this.state.cars[0].year}> {this.state.cars[0].name}</Car>
                <Car color={this.state.cars[1].color}  year ={this.state.cars[1].year}> {this.state.cars[1].name}</Car>
        <Car color={this.state.cars[2].color}  year ={this.state.cars[2].year}> {this.state.cars[2].name}</Car>*/}
                
                {
                    this.state.cars.map((car , index) =>{
                        return (
                            <Car key={index} year={car.year}  color ={car.color}>{car.name}</Car>

                        )
                    }
                    )

                }
                
                </div>
        )
    }
}

export default Mycars