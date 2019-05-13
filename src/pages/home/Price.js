import React, { Component } from 'react'
import { connect } from 'react-redux'

import ActionCreators from '../../redux/actionCreators'

class Price extends Component {

    state = {
        price: ''
    }

    componentDidMount() {
        this.props.loadPrice()
    }
    handleClick(e) {
        e.preventDefault();

        this.props.changeStep({
            step: 0
        })

    }

    render() {
        return (

            <React.Fragment>
                <div className='d-flex flex-column align-items-center '>
                    <h3 className='titulo'>Preco do veículo</h3>
                    <h1 className='price text-center mt-2 border p-2'>{this.props.price.priceData.Valor}</h1>

                    <button onClick={(e) => this.handleClick(e)} className='btn btn-primary mt-4'>Nova Consulta</button>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        price: state.price,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        loadPrice: () => dispatch(ActionCreators.getPriceRequest()),
        receiveYearCode: (priceCode) => dispatch(ActionCreators.receiveYearCode(priceCode)),
        changeStep: (step) => dispatch(ActionCreators.changeStep(step)),
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Price);


