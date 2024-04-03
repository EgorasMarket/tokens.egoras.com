const fs = require("fs");
const path = require("path");

let BASE_NUMBER = 85;
const BASE_VAL =
  "578960446186580977117854925043439539266349923328202820197287920039565648199";
let count = 1;
let arr = [];
function generateJsonFile(data, fileName) {
  const jsonData = JSON.stringify(data, null, 2);
  const filePath = path.join(
    __dirname,
    "..",
    "json_files",
    `${BASE_VAL}${fileName}.json`
  );

  fs.writeFile(`tokens/${BASE_VAL}${fileName}.json`, jsonData, (err) => {
    if (err) {
      console.error(`Error writing ${fileName}.json:`, err);
      return;
    }
    console.log(`${fileName}.json file generated successfully!`);
  });
}

for (count; count < 2000; count++) {
  arr.push(count);
}
console.log(arr);
async function generate() {
  arr.forEach(async (data, index) => {
    let payload = {
      name: `Egostation #${index}`,
      description:
        "Egostation (ESTA) is a novel token built on the ERC404 standard within the Egochain and Ethereum ecosystems. This unique design unlocks a range of functionalities for ESTA users. Trading Flexibility: ESTA offers exceptional trading flexibility. It can be seamlessly traded on cryptocurrency exchanges as a standard ERC20 token, providing easy access for investors. Additionally, ESTA can be acquired as Non-Fungible Tokens (NFTs) on OpenSea, catering to a wider audience. NFT-Powered Charging Station Ownership: Businesses looking to establish charging stations can leverage ESTA's NFT functionality. By purchasing ESTA NFTs on OpenSea, businesses can redeem them for a physical charging station setup, streamlining the acquisition process. Staking Rewards: ESTA offers a compelling staking program. Similar to businesses establishing charging stations, token holders can benefit from block rewards in the form of EGAX tokens. Profit Sharing: ESTA goes beyond just rewards. Holders are entitled to a significant share of the profits generated. They receive 50% of the charging fees collected from stations established through redeemed NFTs, creating a passive income stream.",
      properties: [],
      royalty: 0,
      creator: [],
      image:
        "https://ipfs.io/ipfs/QmSbYQ7HSKAbfzFeCvjtdKNAeGgbUUsvDMaLUThMc5xUbu",
      fileType: "image/jpeg",
      preview: "",
    };
    await generateJsonFile(payload, `${BASE_NUMBER + index} `);
    console.log(BASE_NUMBER);
  });
}

generate();
