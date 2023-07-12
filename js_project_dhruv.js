/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
const NFTs=[];
function mintNFT (_name_,_age_,_color_,_gender_) {
 const NFT={
    "Name":_name_,
    "Age":_age_,
    "Color":_color_,
    "Gender":_gender_

 }
 NFTs.push(NFT);
 console.log("minted:" + _name_);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i=0;i<NFTs.length;i++)
    {
        console.log("\nID:\t" + (i+1))
        console.log("\nName:" + NFTs[i].Name);
        console.log("Age:" + NFTs[i].Age);
        console.log("Color :" + NFTs[i].Color);
        console.log("Gender:" + NFTs[i].Gender);
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("\nTotal number of NFTs are:" +NFTs.length);
}

// call your functions below this line
mintNFT("Dhruv",19,"Brown","M");
mintNFT("Chris",25,"white","M");
mintNFT("BOB",23,"Black","M");
mintNFT("Isha",27,"Brown","F");
mintNFT("Jatin",20,"Brown","M");

listNFTs();
getTotalSupply();
