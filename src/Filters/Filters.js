import './Filters.css';

import React from 'react';

class Filters extends React.Component{
   
    handleResetClick=(e) => {
       document.getElementById('filterForm').reset();
       this.props.handleResetClick();
    }

    //Camera filter options
    renderCameraFilterOptions=()=>{
        return  <div className="filter-criteria">
                    <span>Camera</span>
                    <label><input type="checkbox" value="5" name="camera" onClick = {this.props.handleClick }/>5 Mpx</label>
                    <label><input type="checkbox" value="8" name="camera" onClick = {this.props.handleClick }/>8 Mpx</label>
                    <label><input type="checkbox" value="12" name="camera" onClick = {this.props.handleClick }/>12 Mpx</label>
                    <label><input type="checkbox" value="15" name="camera" onClick = {this.props.handleClick }/>15 Mpx</label>
                </div>
    }

    //Manufacturer filter options
    renderManufacturerFilterOptions=()=>{
        return   <div className="filter-criteria">
                        <span>Manufacturer</span>
                        <label><input type="checkbox" name="manufacturer" value="apple" onClick = {this.props.handleClick }/>Apple</label>
                        <label><input type="checkbox" name="manufacturer" value="samsung" onClick = {this.props.handleClick }/>Samsung</label>
                        <label><input type="checkbox" name="manufacturer" value="htc" onClick = {this.props.handleClick}/>HTC</label>
                        <label><input type="checkbox" name="manufacturer" value="nokia" onClick = {this.props.handleClick }/>Nokia</label>
                        <label><input type="checkbox" name="manufacturer" value="zte" onClick = {this.props.handleClick }/>ZTE</label>
                        <label><input type="checkbox" name="manufacturer" value="sony" onClick = {this.props.handleClick }/>Sony</label>
                    </div>
    }

    //Os filter options
    renderOsFilterOptions=()=>{
        return  <div className="filter-criteria">
                    <span>OS</span>
                    <label><input type="checkbox" value="android" name="os" onClick = {this.props.handleClick }/>Android</label>
                    <label><input type="checkbox" value="ios" name="os" onClick = {this.props.handleClick }/>iOS</label>
                    <label><input type="checkbox" value="windows" name="os" onClick = {this.props.handleClick }/>Windows</label>
                </div>
        
       
    }

    //Storage filter options
    renderStorageFilterOptions=()=>{
        return   <div className="filter-criteria">
                    <span>Storage</span>
                    <label><input type="checkbox" value="16" name="storage" onClick = {this.props.handleClick }/>16 GB</label>
                    <label><input type="checkbox" value="32" name="storage" onClick = {this.props.handleClick }/>32 GB</label>
                </div>
    }

    

    render(){
        return 	<div className="filters">
        <form id="filterForm" onSubmit={ (e)=> {e.preventDefault()}}>
            {this.renderManufacturerFilterOptions()}
            {this.renderStorageFilterOptions()}
            {this.renderOsFilterOptions()}
            {this.renderCameraFilterOptions()}           

            <button onClick={this.handleResetClick }>Clear filters</button>

        </form>

    </div>
    }
}

export default Filters;