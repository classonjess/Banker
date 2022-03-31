function Home(){
  return (
      <Card
        txtcolor="black"
        header="Welcome to BadBank"
        title="BadBank"
        text="Open 24/7."
        body={(<img src="bank.JPEG" className="img-fluid"
        alt="Responsive image"  />)}
        />
  );
}