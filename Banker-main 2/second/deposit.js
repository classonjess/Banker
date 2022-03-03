function Deposit(){
        const [show,setShow] = React.useState(true);
        const [status, setStatus] = React.useState('');
        const [deposit, setDeposit] =React.useState('');
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
            console.log(deposit);
            if (!validate(deposit,   "deposit")) return;
            ctx.users.push({deposit,balance:100})
            setShow(false);
        }
    
        function clearForm(){
            setDeposit('');
            setShow(true);
        }
        
        return(
               <Card
                 backgroundColor= "primary"
                 header="Deposit"
                 status={status}
                 body={show ? (
                     <>
                     Balance: $100<br/>
                     <br></br>
                     Deposit Amount<br/>
                     <input type={Number} className="form-control" id="deposit" placeholder="Enter Deposit amount" value={deposit}
                     onChange={e => setDeposit(e.currentTarget.value)}/><br/>
                     <button type="submit" className="btn btn-dark" onClick={handleCreate}>Deposit</button>
                     </>
                   ):(
                     <>
                     <h5>Success</h5>
                     <button type="submit" className="btn btn-dark" onClick={clearForm}>Deposited</button>
                     </>
                   )}
                />
              )
            }