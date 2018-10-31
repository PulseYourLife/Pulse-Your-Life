import React from 'react';
import './Menu.css';
export class Menu extends React.Component {		
	render() {
        return (
			<div className ="container center">
			<nav className ="menu">            
			<div className="menu__right">
                <ul className="menu__list">
                    <li className="menu__list-item"><a className="menu__link " href="/Statistics">Home</a></li>
					<li className="menu__list-item"><a className="menu__link " href="/Profile">Profile</a></li>
                    <li className="menu__list-item"><a className="menu__link " href="/About">About</a></li>
                    <li className="menu__list-item"><a className="menu__link_ou " href="/Login">Log Out</a></li>
                    
                </ul>						
			</div>
			</nav>
			</div>
		);	
	}
}

export default Menu;
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
