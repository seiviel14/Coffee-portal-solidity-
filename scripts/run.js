const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const coffeeContractFactory = await hre.ethers.getContractFactory("CoffeePortal");
    const coffeeContract = await coffeeContractFactory.deploy();
    await coffeeContract.deployed();

    console.log("Contract deployed to:", coffeeContract.address);
    console.log("Contract deployed by:", owner.address)

    let coffeeCount;
    coffeeCount = await coffeeContract.getTotalCoffees();

    let coffeeTxn = await coffeeContract.coffee();
    await coffeeTxn.wait();
    
    coffeeCount = await coffeeContract.getTotalCoffees();

    coffeeTxn = await coffeeContract.connect(randomPerson).coffee();
    await coffeeTxn.wait();

    coffeeCount = await coffeeContract.getTotalCoffees();
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();