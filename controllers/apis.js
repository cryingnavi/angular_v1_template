let users = {
	super: {
		name: "와인",
		username: "super",
		isAdmin: true,
		token: "1111",
		email: "wine@naver.com"
	},
	user1: {
		name: "소주",
		username: "user1",
		isAdmin: false,
		token: "2222",
		email: "suju@naver.com"
	},
	user2: {
		name: "맥주",
		username: "user2",
		isAdmin: false,
		token: "3333",
		email: "beer@naver.com"
	}
};

let list = [{
	id: "1",
	author: "user1",
	title: "네이버 채용 홈 테스트",
	date: "2017-09-06",
	content: "네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n"
},{
	id: "2",
	author: "user1",
	title: "네이버 채용 홈 테스트",
	date: "2017-09-06",
	content: "네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n"
},{
	id: "3",
	author: "user1",
	title: "네이버 채용 홈 테스트",
	date: "2017-09-06",
	content: "네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n"
},{
	id: "4",
	author: "user2",
	title: "네이버 채용 홈 테스트",
	date: "2017-09-06",
	content: "네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n"
},{
	id: "5",
	author: "user2",
	title: "네이버 채용 홈 테스트",
	date: "2017-09-06",
	content: "네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n"
},{
	id: "6",
	author: "user2",
	title: "네이버 채용 홈 테스트",
	date: "2017-09-06",
	content: "네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n"
},{
	id: "7",
	author: "user1",
	title: "네이버 채용 홈 테스트",
	date: "2017-09-06",
	content: "네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n"
},{
	id: "8",
	author: "user1",
	title: "네이버 채용 홈 테스트",
	date: "2017-09-06",
	content: "네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n"
},{
	id: "9",
	author: "user2",
	title: "네이버 채용 홈 테스트",
	date: "2017-09-06",
	content: "네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n"
},{
	id: "10",
	author: "user2",
	title: "네이버 채용 홈 테스트",
	date: "2017-09-06",
	content: "네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n"
},{
	id: "11",
	author: "user1",
	title: "네이버 채용 홈 테스트",
	date: "2017-09-06",
	content: "네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n네이버 채용 홈 테스트\n"
}];

function login(req, res){
	try{
		res.cookie('token', users[req.body.username].token, { maxAge: 900000, httpOnly: true });
		res.json({
			"header": {
				"code": 20000
			},
			"body": {
				"token": users[req.body.username].token,
				"username": users[req.body.username].username,
				"isAdmin": users[req.body.username].isAdmin
			}
		});
	}
	catch(e){
		res.json({
			"header": {
				"code": 40000
			}
		});
	}
}

function logout(req, res){
	res.clearCookie('token');
	res.json({
		header: {
			code: 20000
		}
	});
}

function getList(req, res) {
	res.json({
		header: {
			code: 20000
		},
		body: list
	});
}

function getDetail(req, res) {
	console.log(req.params.id);

	for(var i=0; i<list.length; i++){
		if(list[i].id === req.params.id){
			return res.json({
				header: {
					code: 20000
				},
				body: list[i]
			});
		}
	}
}

function edit(req, res){
	var post = null;
	for(var i=0; i<list.length; i++){
		if(list[i].id === req.params.id){
			post = list[i];
		}
	}

	post.content = req.body.content;
	post.title = req.body.title;
	res.json({
		header: {
			code: 20000
		},
		body: post
	});
}

function del(req, res){
	var index = -1;
	for(var i=0; i<list.length; i++){
		if(list[i].id === req.params.id){
			index = i;
			break;
		}
	}

	if(index > -1){
		list.splice(index, 1);
	}

	res.json({
		header: {
			code: 20000
		}
	});
}

function getUser(req, res){
	for(var attr in users){
		if(users[attr].username === req.params.username){
			return res.json({
				header: {
					code: 20000
				},
				body: users[attr]
			});
		}
	}

	return res.json({
		header: {
			code: 40000
		}
	});
}


function create(req, res){
	list.unshift({
		id: (new Date().getTime()) + "",
		author: req.body.username,
		title: req.body.title,
		date: "2017-09-06",
		content: req.body.content,
	});
	return res.json({
		header: {
			code: 20000
		}
	});
}

module.exports = {
	getList: getList,
	getDetail: getDetail,
	edit: edit,
	del: del,
	login: login,
	logout: logout,
	getUser: getUser,
	create: create
};