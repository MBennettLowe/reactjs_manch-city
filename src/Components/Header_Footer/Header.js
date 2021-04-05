import React, { Component } from 'react'
import { Link } from 'react-router-dom';

// 3rd Party Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { CityLogo } from '../ui/icons';



class Header extends Component {
    render() {
        return (
            <AppBar
                position="fixed"
                style={{
                    background:'#98c5e9',
                    boxShadow: 'none',
                    padding: '10px 0',
                    borderBottom: '2px solid #002853'
                }}>

            <Toolbar styles={{display:'flex'}}>
                <div styles={{flexGrow: 1}}>
                    <div className="header_logo">
                        <CityLogo 
                            link={true}
                            linkTo="/"
                            width="70px"
                            height="70px"
                        />
                    </div>
                </div>

                <Link to="/the_team">
                    <Button color="inherit">The Team</Button>
                </Link>

                <Link to="/the_matches">
                    <Button color="inherit">Matches</Button>
                </Link>

            </Toolbar>

            </AppBar>
        )
    }
}

export default Header;