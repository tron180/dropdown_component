import React, { Component } from 'react';
import './DropDown.css';

export default class DropDown extends Component {


    render() {
        return (
            <div>
               <select 
                style={{backgroundColor:`${this.props.backColor}`, color:`${this.props.fontColor}`}}
               >
                   {this.props.data.map(item => 
                    <option className="option" value={item[this.props.searchOnKey]}>{item[this.props.searchOnKey]}</option>
                   )}
               </select> 
            </div>
        )
    }
}
