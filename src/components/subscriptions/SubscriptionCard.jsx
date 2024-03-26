import React from 'react'

const SubscriptionCard = ({title, price, description, privileges}) => {
  return (
    <div className="plan">
		<div className="inner">
			<span className="pricing">
				<span>
					${price} <small>/ m</small>
				</span>
			</span>
			<p className="title">{title}</p>
			<p className="info">{description}</p>
			<ul className="features">
				<li>
					<span className="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span>{privileges[0]}</span>
				</li>
				<li>
					<span className="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span>{privileges[1]}</span>
				</li>
				<li>
					<span className="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span>{privileges[2]}</span>
				</li>
			</ul>
			<div className="action">
			<button className="button">
				Choose plan
			</button>
			</div>
		</div>
	</div>
  )
}

export default SubscriptionCard