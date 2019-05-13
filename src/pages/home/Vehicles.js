import React, { Component } from 'react'
import { connect } from 'react-redux'

import ActionCreators from '../../redux/actionCreators'

class Vehicle extends Component {

    state = {
        vehicle: ''
    }

    componentDidMount() {
        this.props.loadVehicles()
    }

    handleChange = event => {
        this.setState({
            vehicle: Array.from(event.target.selectedOptions, (item) => item.value).toString()
        })
    }
    handleSendVehicle = (e) => {
        e.preventDefault()
        let vehicle = this.state.vehicle

        let vehicleCode = vehicle.toString()

        this.props.saveVehicleCode({
            vehicleCode: vehicleCode
        })
        this.props.receiveVehicleCode({
            vehicleCode: vehicleCode
        })
        this.props.changeStep({
            step: 3
        })

    }

    render() {
        return (

            <React.Fragment>
                <h3 className='titulo'>Selecione o veículo</h3>
                <form className='form-group d-flex flex-column align-items-center' >
                    <select value={this.state.vehicle} className='custom-select mt-4' onChange={this.handleChange} >
                    <option defaultValue>Selecione o veículo</option>
                        {this.props.vehicles.vehiclesData.map(
                            vehicle =>
                                <option key={vehicle.codigo} value={vehicle.codigo}>{vehicle.nome}</option>
                        )}
                    </select>
                    <button onClick={(e) => this.handleSendVehicle(e)} className='btn btn-primary mt-4'>Próximo</button>
                </form>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        vehicles: state.vehicles,
        vehicleCode: state.vehicleCode
    }
}
const mapDispatchToProps = dispatch => {
    return {
        loadVehicles: () => dispatch(ActionCreators.getVehiclesRequest()),
        changeStep: (step) => dispatch(ActionCreators.changeStep(step)),
        saveVehicleCode: (vehicleCode) => dispatch(ActionCreators.saveVehicleCode(vehicleCode)),
        receiveVehicleCode: (vehicleCode) => dispatch(ActionCreators.receiveVehicleCode(vehicleCode))
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Vehicle);


