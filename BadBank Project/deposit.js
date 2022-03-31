function Deposit(){
        const [show,setShow] = React.useState(true);
        const [status, setStatus] = React.useState('');
        const [deposit, setDeposit] =React.useState('');
        const [balance, setBalance] = React.useState('');
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
          ctx.users.forEach(user => {
            if (user.name === "peter"){
              user.balance = user.balance += Number(deposit);

              setBalance(ctx.users[0].balance);
              console.log(balance);
            }
          })
          ctx.users.push({deposit, balance});
          setShow(false);

        setStatus('');
        console.log(ctx.users[0].balance, deposit);
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
                     Balance: ${ctx.users[0].balance}<br/>
                     <br></br>
                     Deposit Amount<br/>
                     <input type={Number} className="form-control" id="deposit" placeholder="Enter Deposit amount" value={deposit}
                     onChange={e => setDeposit(e.currentTarget.value)} ></input><br/> 
                     <button type="submit" className="btn btn-dark" disabled={isNaN(deposit)} onClick={handleCreate}>Deposit</button>
                     </>
                   ):(
                     <>
                     <h5>Success</h5>
                     Current balance: ${ctx.users[0].balance} <br/><br/>
                     <button type="submit" className="btn btn-dark" onClick={clearForm}>Make another deposit</button>
                     </>
                   )}
                />
             )
                   }