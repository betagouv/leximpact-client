import { Component } from 'react'
import {render} from 'react-dom'
import fetch from 'isomorphic-fetch'

class CountryList extends Component{
	constructor(props){
		super(props)
		this.state = {
			countryNames: {},
			loading: false
		}
	}
	
	componentDidMount(){
		this.setState({loading: true})
		fetch('https://restcountries.eu/rest/v1/all')
			.then(response => response.json())
			.then(json => json.map(country => country.name))
			.then(countryNames => this.setState({countryNames, loading: false}))/**/
		console.log("Et maintenant, je vais chercher mon API locale! ")
		fetch('http://127.0.0.1:5000/calculate/revenus',{ 
				method:"POST",
				headers: {
				  'Content-Type': 'application/json'
						},
				body: JSON.stringify({}),
				}
			)
			.then(response => response.json())
			.then(json => console.log( "le revenu du cas type 0 est "+json[0]))
			.catch(() => console.log("Can’t access  response. Blocked by browser?"))//json.map(country => country.name))
			//.then(countryNames => this.setState({countryNames, loading: false}))
		console.log("C'est fait ! ")
	}
	
	render(){
		console.log("Coucou monde")
		const {countryNames, loading} = this.state
		return (loading) ? 
		<div> Loading Country Names...</div> : 
		(!countryNames.length) ? <div> No country names </div>:
		<ul> {countryNames.map(
			(x,i) => <li key = {i}> {x} </li>
		)}
		</ul>/**/
		console.log("je suis là")
	}
}	

export default CountryList;


/*
render(
	<CountryList />,
	document.getElementById('react-container')
)*/

