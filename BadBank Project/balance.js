const Balance = () => {
      const ctx = React.UseContext(UserContext)
      console.log("Balance ctx", ctx)

      const user = ctx.users.fin(user =>user.email === "peter@mit.edu")
      console.log(user)
  
        
        return(
          <div>
            <p> Your account balance is ${user.balance}</p>
          </div>
        )
        }

