import React, { Fragment, Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom'
import AnimatedNumber from 'react-animated-number';

import Header from '../../components/Header';
import { bootstrapCols, bootstrapCols2, formatCpfCnpj, formatPlaca } from '../../utils.js';
import '../../fonts/fonts.css';

import './styles.scss';

export default class Main extends Component {
	state = {
		clientes: [],
		page: 1,
		hasNext: null,
		numb: 0,
		data: {},
	}
	componentDidMount(){
		let button = <a href="#">Btn</a>;
		let pesq = <input type="text" placeholder="Codigo, CPF, CNPJ, Nome e E-mail" className="pesquisa" onKeyUp={this.pesquisaCliente}/>;
		let data = {title: "Clientes", add: button, pesq: pesq};
		this.setState({data});
		this.loadClients();
	}

	loadClients = async (page = 1) => {
		//const response = await api.get(`/clientelist?page=${page}`);
		const response = {
			data: {
				count: 500,
				next: null,
				results: [
					{
						'id':1, 
						'nome': 'TATIANA PIMENTEL DE MORAIS',
						'cpf_cnpj': '00000000000',
						'veiculos': 'ABC1234'
					},
					{
						'id':2, 
						'nome': 'TATIANA PIMENTEL DE MORAIS',
						'cpf_cnpj': '12231343000146',
						'veiculos': 'XDE1B34'
					},
					{
						'id':3, 
						'nome': 'TATIANA PIMENTEL DE MORAIS',
						'cpf_cnpj': '12312312300',
						'veiculos': '2'
					},
					{
						'id':4, 
						'nome': 'TATIANA PIMENTEL DE MORAIS',
						'cpf_cnpj': '12312312300',
						'veiculos': '1212111'
					},
				],
			},
		}
		this.setState({numb: response.data.count});
		this.setState({hasNext: response.data.next, page});
		this.setState({clientes: response.data.results});
	}

	pesquisaCliente = (event) => {
		//console.log(event.target.value);
	}

	prevPage = () => {
		const { page } = this.state;

		if(page === 1) return;

		const pageNumber = page - 1;

		this.loadClients(pageNumber);
	}
	nextPage = () => {
		const { page, hasNext } = this.state;
		if(!hasNext) return;
		const pageNumber = page + 1;
		this.loadClients(pageNumber);
	}
	render() {
		const { clientes, data, numb, page, hasNext } = this.state;
		let txt;
		if(numb > 1 || numb == '0') txt = 'clientes';
		else txt = 'cliente';
		return(
			<Fragment>
			<Header dataFromParent={data}/>
			<div className="body-main">
				<div className="container client-list">
					<div className="container-fluid">
						<div className="row pt-22 pb-8">
							<div className={bootstrapCols2(6)}>
								<p>
									<AnimatedNumber component="span" value={numb}
							            style={{
											float: 'left',
										    fontFamily: 'MaisonNeue-Bold',
										    fontSize: '16px',
										    color: 'rgba(0, 0, 0, 0.8)',
										    textAlign: 'left'
							            }}
							            formatValue={n => Math.trunc(n)}
							            duration={1000}/>
							        <span style={{
										float: 'left',
									    fontFamily: 'MaisonNeue-Book',
									    fontSize: '16px',
									    color: 'rgba(0, 0, 0, 0.32)',
									    marginLeft: '4px'
							        }}>{txt}</span>
							    </p>
					        </div>
							<div className={bootstrapCols2(6)}>
					        </div>
				        </div>
						{clientes.map(cliente => (
							<a href="#" key={cliente.id}>
								<div className="cardList">
									<div className="container-fluid">
										<div className="row">
											<div className="container-titleCard">
												<input className="subTitleCard" value={cliente.nome} disabled/>
											</div>
										</div>
										<div className="row">
											<div className={bootstrapCols(12)}>
												<span className="st stInadimplente mt-8 mb-12">Inadimplente</span>
												<span className="st stNorm mt-8 mb-12 ml-8">Ativo</span>
											</div>
										</div>
										<div className="row">
											<div className={bootstrapCols(12)}>
												<span className="carDesc2">CPF/CNPJ</span>
												<span className="cardDados view RT">{formatCpfCnpj(cliente.cpf_cnpj)}</span>
											</div>
											<div className={bootstrapCols(12)}>
												<span className="carDesc2">Código</span>
												<span className="cardDados view RT">{cliente.id}</span>
											</div>
											<div className={bootstrapCols(12)}>
												<span className="carDesc2">Veículos</span>
												<span className="cardDados view RT">{formatPlaca(cliente.veiculos)}</span>
											</div>
										</div>
									</div>
								</div>
							</a>
							))}
						{/*
						<div className="actions">
							<button disabled={page===1} onClick={this.prevPage}>Anterior</button>
							<button disabled={hasNext == null} onClick={this.nextPage}>Próximo</button>
						</div>
						*/}
					</div>
				</div>
			</div>
			</Fragment>
		)
	}
}