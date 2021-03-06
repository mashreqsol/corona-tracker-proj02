import React from 'react';
import styles from './App.module.css';
import {fetchData} from './api';

import {Cards, CountryPicker,Chart } from './components';
import CoronaImage from './images/COVID-19.png';

class App extends React.Component{

    state = {
        data:{},
        country: '',
    }
    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data:fetchedData} );
        
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({data:fetchedData, country: country} );
     //   console.log(fetchedData);
    }
    render(){
        const {data,country} = this.state;
        return(
            <div className = {styles.container}> 
            <img className = {styles.image} alt = 'Corona' src = {CoronaImage}/>
               <Cards data = {data}/>
               <CountryPicker handleCountryChange = {this.handleCountryChange }/>
               <Chart data = {data} country = {country}/>
            </div>
        )
    }
}

export default App;