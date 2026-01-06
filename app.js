//Core Module
const path = require('path')

//External Module
const express = require('express');

//Local Module
const guestRouter = require("./routes/guestRouter");
const {userRouter} = require("./routes/userRouter");
const rootDir = require("./utils/pathUtil");
const {pageNotFound} = require("./controllers/error");



const app = express();


//serving ejs in website
app.set('view engine', 'ejs');
app.set('views', 'views');


//serving the form in cosnole



//serving the routes files
app.use(guestRouter);
app.use("/User", userRouter);

//serving css file
app.use(express.static(path.join(rootDir, 'public')))


//serving 404page
app.use(pageNotFound);



const port = 3001;
app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});