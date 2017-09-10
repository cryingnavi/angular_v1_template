define({
	"home": {
		"url": "/",
		"path": "/home",
		"name": "home",
		"views": "app-view",
		"isLogin": false
	},
	"list": {
		"url": "/list",
		"path": "/post",
		"name": "list",
		"views": "app-view"
	},
	"detail": {
		"url": "/list/:id",
		"path": "/post",
		"name": "detail",
		"views": "app-view"
	},
	"edit": {
		"url": "/edit/:id",
		"path": "/post",
		"name": "edit",
		"views": "app-view",
		"isLogin": true
	},
	"user": {
		"url": "/user/:username",
		"path": "/user",
		"name": "user",
		"views": "app-view"
	},
	"write": {
		"url": "/write",
		"path": "/post",
		"name": "write",
		"views": "app-view",
		"isLogin": true
	}
});