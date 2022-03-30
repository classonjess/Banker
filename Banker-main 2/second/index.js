    const Route      = ReactRouterDOM.Route;
    const Link       = ReactRouterDOM.Link;
    const HashRouter = ReactRouterDOM.HashRouter;
    const UserContext = React.createContext(null);

function Spa(){
   return(
    <HashRouter>
    <h1>Welcome to BadBank</h1>
    <Nav/>
    <hr />
    <UserContext.Provider value={{users:[{ name: 'peter', balance:0}]}}>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      {/* <Route path="/products" component={Products} /> */}
      <Route path="/createAccount" component={CreateAccount} />
      <Route path="/login"component={Login} />
      <Route path="/deposit" component={Deposit} />
      <Route path="/withdraw" component={Withdraw} />
      <Route path="/balance" component={Balance} />
      <Route path="/allData" component={AllData} />
    </UserContext.Provider>
</HashRouter>
);
}

ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
)