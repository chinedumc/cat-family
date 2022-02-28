import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/CardList.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App2 extends Component {
	constructor() {
		super();
		// this.state = {
		//   string: "Hello Nedum"
		// }

		this.state = {
			monsters: [],
			searchField: " ",
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => this.setState({ monsters: users }));
	}

	handleChange = (e) => {
		this.setState({ searchField: e.target.value });
	}

	render() {
		const { monsters, searchField } = this.state;

		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);

		return (
			<div className="App">
				<h1>Cat Family</h1>
				<SearchBox placeholder='Search Here' handleChange={this.handleChange}/>
				<CardList monsters={filteredMonsters}>
				</CardList>
			</div>
		);
	}
}
export default App2;
