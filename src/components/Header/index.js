import React, { Component } from "react";
import { bootstrapCols, bootstrapCols2 } from '../../utils.js';
import "./styles.css";

export default class Header extends Component {
	render (){
	const { dataFromParent } = this.props
	let content = 
		<header id="main-header">
			<div className="container max1024 text-left">
				<div className="row">
					<div className={bootstrapCols(6)}>
						<span className="titleCard">{dataFromParent.title || 'Título Genérico'}</span>
					</div>
					<div className={bootstrapCols(6) + " float-right text-right"}>
						{dataFromParent.add || 'Nada aqui.'}
					</div>
				</div>
				<div className="row">
					<div className={bootstrapCols(12)}>
						{dataFromParent.pesq || 'Nada aqui.'}
					</div>
				</div>
			</div>
		</header>;
		return (
			content
		);
	}
}
