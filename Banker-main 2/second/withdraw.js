function Withdraw(){
        const [show,setShow] = React.useState(true);
        const [status, setStatus] = React.useState('');
        const [withdraw, setWithdraw] =React.useState('');
        const [balance, SetBalance] =React.useState('');
        const ctx = React.useContext(UserContext);
        
        function validate(field, label){
            if (!field) {
                setStatus('Error: ' + label);
                setTimeout(() => setStatus(''),3000);
                return false;
            }
             return true;
        }
    
        function handleCreate(){
            console.log(withdraw);
            if (!validate(withdraw,   "withdraw")) return;
            ctx.users.forEach(user => {
              if (user.name === "peter"){
                user.balance = user.balance + +deposit
              }
            })
            setShow(false);
        }
    
        function clearForm(){
            setWithdraw(0);
            setShow(true);
        }
        
        return(
               <Card
                 backgroundColor= "primary"
                 header="Withdraw"
                 status={status}
                 body={show ? (
                     <>
                     Balance: {ctx.users[0].balance}<br/>
                     <br></br>
                     Withdraw Amount<br/>
                     <input type={Number} className="form-control" id="withdraw" placeholder="Withdraw Amount" value={withdraw}
                     onChange={e => setWithdraw(e.currentTarget.value)}/><br/>
                     <button type="submit" className="btn btn-dark" onClick={handleCreate}>Withdraw</button>
                     </>
                   ):(
                     <>
                     <h5>Success</h5>
                     Current balance: ${ctx.users[0].balance} <br/><br/>
                     <button type="submit" className="btn btn-dark" Balance={ctx.users[0].balance} onClick={clearForm}>Make another withdraw</button>
                     </>
                   )}
                />
              )
            }