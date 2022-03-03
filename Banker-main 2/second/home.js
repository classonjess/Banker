function Home(){
  return (
      <Card
        txtcolor="black"
        header="BadBank Landing Page" 
        title="Welcome to the Bank"
        text="You can use this bank"
        body={(<img src="bank.JPEG" className="img-fluid"
        alt="Responsive image"/>)}
        />
  );
}