import {Outlet, Link} from 'react-router-dom';


const Menu = () => {


  

    return (
        <div className='app'>
            <header>
                MERN CRUD APPLICATION <a href="https://github.com/coding-tea" target='_blank' rel="noreferrer">@codingTea <i class="bi bi-github"></i></a>
            </header>
            <div className='menu' >
                <Link to='/'>index</Link>
                <Link to='/create'>create</Link>
            </div>
            <div className="outlet">
                <Outlet />
            </div>
        </div>
    );
}

export default Menu;
