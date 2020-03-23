import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';
import { connect } from 'react-redux';

import AvailableApartments from '../../components/AvailableApartments';
import ApartmentList from '../../components/ApartmentList'
import {
    getApartmentsRequest, getApartments
  } from './state/actions/apartments';
import { bindActionCreators } from 'redux';

export class Main extends Component {
    componentDidMount(){
        this.props.getApartmentsRequest();
    }
    render(){
        const {totalApartments, apartments} = this.props;
        const x = this.props.apartments[0]
        console.log("___props_____", x.id)

        return (
            <Container>
                <AvailableApartments totalResults={totalApartments}/>
                <ApartmentList apartments={apartments} />
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    totalApartments: state.apartments.totalApartments,
    apartments: state.apartments.apartments,
    loading: state.loading,
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
    getApartmentsRequest
    // add other watcher sagas to this object to map them to props
    }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Main);