import React, { Component } from 'react'
import CSD from '../../img/caret-down-square.svg';
import './Tour.scss';
export default class Tour extends Component {
    state = {showInfo:false};
    handleInfo = () => {
        this.setState({
            showInfo:!this.state.showInfo
        });
    }
    render() {
        const{id, city, imag, name, info} = this.props.tour;
        const {removeTour} = this.props;
        return (
            <article className='tour'>
                <div className='img-container'>
                  <img src={imag} alt=""/>
                  <span className='close-btn'
                   onClick={() => {
                       removeTour(id);
                       }}
                  >
                      &times;
                  </span>
                  
                </div>
                <div className='tour-info'>
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>Info
                        <span onClick={this.handleInfo}>
                        <img src={CSD} alt="csd"/>
                        </span>
                    </h5>
                    {this.state.showInfo &&  <p>{info}</p>}
                   
                </div>
            </article>
        )
    }
}
