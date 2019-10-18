import React, { Fragment, Component } from 'react';
import api from '../../services/api';
import Header from '../../components/Header';

import { Link } from 'react-router-dom';

import './styles.css';

export default class Client extends Component {
	state = {
		client: {},
		data: {},
	}

	async componentDidMount(){
		const { id } = this.props.match.params;
		
		const response = await api.get(`/products/${id}`);

		this.setState({client: response.data});
	}
	render () {
		const { client, data } = this.state;
		return (
			<Fragment>
				<Header dataFromParent={data}/>
				<div className="body-main">
					<div className="product-info">
						<h1>{client.title}</h1>
						<p>{client.description}</p>

						<p>
							URL: <a href={client.url}>{client.url}</a>
						</p>
						<p>
							<Link className="back-button" to='/'>Voltar</Link>
						</p>
					</div>
				</div>
			</Fragment>
		);
	}
}