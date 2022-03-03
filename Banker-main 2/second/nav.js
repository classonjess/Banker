function Nav(){
  return(
     <ul className='nav nav-tabs' id='nav-tab' role='tablist'>
     <li className='nav-item'>
       <Link className="nav-link" to="/">Home</Link>
     </li>
     <li className='nav-item'>
       <Link className="nav-link" to="/createAccount">Create Account</Link>
     </li>
     <li className="nav-item">
       <Link className='nav-link'to='/login'>Login</Link>
    </li>
    <li className="nav-item">
       <Link className='nav-link'to='/withdraw'>Withdraw</Link>
     </li>
    <li className="nav-item">
       <Link className='nav-link'to='/deposit'>Deposit</Link>
     </li>
    <li className="nav-item">
       <Link className='nav-link'to='/allData'>All data</Link>
     </li>
   </ul>
 ); 
}