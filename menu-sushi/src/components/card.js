import React, {Component} from 'react';



class Card extends Component{
	render(){
		return (
			<div id className="col-md-6 col-lg-4" style={{textAlign: 'center'}}>
				<div className="card" style={{margin: '10%', textAlign: 'center'}}>
				  	<img src={this.props.card.immagine} className="card-img-top" alt="..."/>
				  	<div className="card-body">
						<h5 className="card-title">{this.props.card.nome} Roll</h5>
						<p className="card-text">€{this.props.card.prezzo}</p>
						<button onClick={() =>  this.props.onDecrement(this.props.card)} className="btn btn-danger" style={{margin: '10px'}}>Rimuovi</button>
						<button onClick={() =>  this.props.onIncrement(this.props.card)} className="btn btn-primary" style={{margin: '10px'}}>Aggiungi </button>
						<div className="card-footer text-muted">Quantità: {this.props.card.quantità}</div>
					</div>
				</div>
			</div>
		);
	}
}


export default Card;