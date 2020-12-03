import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import { Link ,useHistory} from 'react-router-dom'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { IconButton } from '@material-ui/core';
function Header({backbutton}) {
    const history =useHistory();
    return (
        <div className="header">
            {
                backbutton ? (
                    <IconButton onClick={()=>history.replace(backbutton)} >
                        <ArrowBackIosIcon fontSize="large" className="header_icon" />
                    </IconButton>
                ) : (
                        <IconButton>
                            <PersonIcon fontSize="large" className="header_icon" />
                        </IconButton>
                    )
            }

            <Link to='/'>
                <img
                    className="header_logo"
                    src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
                />
            </Link>
            <Link to='/chat'>
                <IconButton>
                    <ForumIcon fontSize="large" className="header_icon" />
                </IconButton>
            </Link>
        </div>
    )
}

export default Header
