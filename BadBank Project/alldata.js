function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <>
    <h5>Accounts created</h5>
    {JSON.stringify(ctx)}<br/>
    </>
  );
}