import React, { Component } from 'react'
import { connect } from 'react-redux'

import ActionCreators from '../../redux/actionCreators'

import Brandss from './Brandss'

import Vehicles from './Vehicles'

import Years from './Years'

import Price from './Price'
import Categories from './Categories';

class MultiSteps extends Component {


    componentDidMount() {
        this.props.loadBrands()
    }




    render() {
        let valor = this.props.brands.step === 0 ? '0' : 
        this.props.brands.step === 1 ? '25' : 
        this.props.brands.step === 2 ? '50' :
        this.props.brands.step === 3 ? '75' :
        this.props.brands.step === 4 ? '100' : ''

        return (

            <React.Fragment>
                <h5 class='tituloProgresso mt-5'>Progresso</h5>
              
                
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: `${valor}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{valor}%</div>
                </div>
                
                {this.props.brands.step === 0 ?
                    <Categories />
                    : ''
                }

                {this.props.brands.step === 1 ?
                    <Brandss />
                    : ''
                }

                {this.props.brands.step === 2 ?
                    <React.Fragment>
                        <Vehicles />
                    </React.Fragment> : ''}

                {this.props.brands.step === 3 ?
                    <React.Fragment>
                        <Years />
                    </React.Fragment> : ''}
                {this.props.brands.step === 4 ?
                    <React.Fragment>
                        <Price />
                    </React.Fragment> : ''}

            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        brands: state.brands,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        loadBrands: () => dispatch(ActionCreators.getBrandsRequest()),

    }
}




export default connect(mapStateToProps, mapDispatchToProps)(MultiSteps);
