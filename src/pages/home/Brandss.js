import React, { Component } from 'react'
import { connect } from 'react-redux'

import ActionCreators from '../../redux/actionCreators'


class Brandss extends Component {

    state = {
        brand: ''
    }

    componentDidMount() {
        this.props.loadBrands()
    }

    handleChange = event => {
        this.setState({
            brand: Array.from(event.target.selectedOptions, (item) => item.value).toString()
        })

    }
    handleSendBrand = (e) => {
        e.preventDefault()
        let brand = this.state.brand

        let brandCode = brand.toString()

        this.props.saveBrandCode({
            brandCode: brandCode
        })
        this.props.receiveBrandCode({
            brandCode: brandCode
        })
        this.props.changeStep({
            step: 2
        })

    }


    render() {
        return (

            <React.Fragment>
                <React.Fragment>
                    <h3 className='titulo'>Selecione a marca</h3>
                    <form className='form-group d-flex flex-column align-items-center' >
                        <select value={this.state.brand} className='custom-select mt-4' onChange={this.handleChange}>
                        <option defaultValue>Selecione a marca</option>
                            {this.props.brands.data.map(
                                brand =>
                                    <option key={brand.codigo} value={brand.codigo}>{brand.nome}</option>
                            )}
                        </select>
                        <button onClick={(e) => this.handleSendBrand(e)} className='btn btn-primary mt-4'>Próximo</button>
                    </form>
                </React.Fragment>
            </React.Fragment>
        )
    }


}

const mapStateToProps = state => {
    return {
        brands: state.brands,
        brandCode: state.brandCode
    }
}
const mapDispatchToProps = dispatch => {
    return {
        loadBrands: () => dispatch(ActionCreators.getBrandsRequest()),
        changeStep: (step) => dispatch(ActionCreators.changeStep(step)),
        saveBrandCode: (brandCode) => dispatch(ActionCreators.saveBrandCodeSuccess(brandCode)),
        receiveBrandCode: (brandCode) => dispatch(ActionCreators.receiveBrandCode(brandCode))
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Brandss);