var express = require("express")
	, http = require("http")
	, path = require("path")
	, bodyParser = require("body-parser")
	, cookieParser = require("cookie-parser")
	, router = require("./routes/apis")
	, app = express();

app.set("port", process.env.PORT || 3001);
app.set("views", __dirname + "/views");
app.set("view engine", "html");
app.engine("html", require("hogan-express"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.use("/api", router);

app.get('/',function(req,res){
	res.render('index.html')
});

var server = http.createServer(app);
server.listen(app.get("port"));

server.on("error", function(e){
	console.log("express server error. " + e);
});

server.on("listening", function(){
	console.log("express server listening on port " + app.get("port"));
});

