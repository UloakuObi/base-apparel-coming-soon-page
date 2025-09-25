import fs from "fs";
import unzipper from "unzipper";


fs.createReadStream("base-apparel-coming-soon-master.zip")
 .pipe(unzipper.Extract({ path: "." }))
 .on("close", () => console.log("Done unzipping!")); 



