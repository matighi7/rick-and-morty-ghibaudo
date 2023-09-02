const server= require("../src/app")
const PORT = 3001;
const {conn}= require('../models/DB_connection');


conn.sync({force:true})
.then(()=>{
   server.listen(PORT, () => {
      console.log(`Server raised in port: ${PORT}`);
   });
   }).catch((error) => console.log(error));
