function Withdraw(){
        const [show,setShow] = React.useState(true);
        const [status, setStatus] = React.useState('');
        const [withdraw, setWithdraw] =React.useState('');
        const ctx =React.useContext(UserContext); 
        
        function validate(field, label){
            if (!field) {
                setStatus('Error: ' + label);
                setTimeout(() => setStatus(''),3000);
                return false;
            }
             return true;
        }
    
        function handleCreate(){
            console.log(withdraw,email,password);
            if (!validate(withdraw,   "withdraw")) return;
            ctx.users.push({withdraw, balance:100})
            setShow(false);
        }
    
        function clearForm(){
            setWithdraw('');
            setShow(true);
        }
        
        return(
               <Card
                 backgroundColor= "primary"
                 header="Withdraw"
                 status={status}
                 body={show ? (
                     <>
                     Balance: $100<br/>
                     <br></br>
                     Withdraw Amount<br/>
                     <input type="input" className="form-control" id="name" placeholder="Withdraw Amount" value={withdraw}
                     onChange={e => setName(e.currentTarget.value)}/><br/>
                     <button type="submit" className="btn btn-dark" onClick={handleCreate}>Withdraw</button>
                     </>
                   ):(
                     <>
                     <h5>Success</h5>
                     <button type="submit" className="btn btn-Light" onClick={clearForm}>Add another account</button>
                     </>
                   )}
                />
              )
            }