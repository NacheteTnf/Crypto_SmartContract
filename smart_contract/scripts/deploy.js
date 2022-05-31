const main = async () => {
  const Transaction = await hre.ethers.getContractFactory("Greeter");
  const transaction = await Transaction.deploy();

  await greeter.deployed();

  console.log("Transactions deployed to:", transaction.address);
}

const runMain = async () =>{
  try{
    await main();
    process.exit(0);
  }catch (error){
    console.error(error);
    process.exit(1);
  }
}

runMain();
