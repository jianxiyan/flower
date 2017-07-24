var http = require('http');
var mongodb = require('mongodb').MongoClient;
var querystring= require('querystring');
var db_str = 'mongodb://localhost:27017/flower';

http.createServer((req,res)=>{
	if(req.url!='/favicon.ico'){
		res.writeHead(200,{'content-type':'text/html;charset=utf-8','Access-Control-Allow-Origin':'*'});
		
		var dat;
		req.on('data',function(data){
			dat = data.toString();
			
		});		
		req.on('end',function(){
			
			var method = dat.split('&')[0].split('=')[1];
			//登录;0未注册,1成功,2密码错误
			if(method == 'login'){
				var userid = dat.split('&')[1].split('=')[1];
				var pass = dat.split('&')[2].split('=')[1]
				mongodb.connect(db_str,function(err,db){
			  		var conn = db.collection('info');
			  		conn.find({'userid':userid}).toArray(function(err,result){			  			
				  			if(result.length==0){
				  				res.write('0')
				  				res.end()
				  			}else{
				  				if(result[0].pass==pass){
				  					res.write('1')
				  					res.end()
				  				}else{
				  					res.write('2')
				  					res.end()
				  				}
				  			}
				  	});
			  	});
			}
			//注册;0用户已存在,1成功,2密码为空			
			if(method == 'register'){		
				var userid = dat.split('&')[1].split('=')[1];
				console.log(userid);
				var pass = dat.split('&')[2].split('=')[1];
				var phone = dat.split('&')[3].split('=')[1];
				mongodb.connect(db_str,function(err,db){
			  		var conn = db.collection('info');
			  		conn.find({'userid':userid}).toArray(function(err,dat){
			  			if(dat.length==0){					
						if(pass!=''){
							
							var data = [{userid:userid,pass:pass,phone:phone}]
							conn.insert(data,function(err,result){
								res.write('1')
								res.end()
								var con = db.collection('usersign');
								con.insert(data,function(err,result){
									
									})
							db.close() 
						})
						}else{
								res.write('2')
								res.end()							
						}						  
					}else{
						res.write('0')
						res.end()					
					}
			  		})			  	
		  		});
				
			}
			
			//查找用户基本信息
			if(method == 'findinfo'){
				var userid = dat.split('&')[1].split('=')[1];
				mongodb.connect(db_str,function(err,db){
			  		var conn = db.collection('usersign');
			  		conn.find({'userid':userid}).toArray(function(err,result){	
				  			res.write(JSON.stringify(result));
				  			res.end();
				  	});
			  	});
			}
			//修改用户信息
			
			if(method == 'updateinfo'){
				
				var userid = dat.split('&')[1].split('=')[1];
				var name = dat.split('&')[2].split('=')[1];
				name = querystring.unescape(name)
				var sign = dat.split('&')[3].split('=')[1];
				sign = querystring.unescape(sign);
				var sex = dat.split('&')[4].split('=')[1];
				sex = querystring.unescape(sex);
				var birthday = dat.split('&')[5].split('=')[1];
				birthday = querystring.unescape(birthday);
				var phone = dat.split('&')[6].split('=')[1];
				phone = querystring.unescape(phone);
				var dress = dat.split('&')[7].split('=')[1];
				dress = querystring.unescape(dress);
				
				
				mongodb.connect(db_str,function(err,db){
			  		var conn = db.collection('usersign');
			  		conn.update({'userid':userid},{$set:{"name":name,"sign":sign,"sex":sex,"birthday":birthday,"phone":phone,"dress":dress}},{safe:true},function(error,result){
			  			console.log(result);
			  		})			  	
		  		});
			}
			
			//商品列表页
			if(method == 'list'){
					mongodb.connect(db_str,function(err,db){
					var conn = db.collection('list');
					conn.find({}).toArray(function(err,result){									
					  			res.write(JSON.stringify(result));
					  			res.end();
					});
					
				})
			}
			//商品详情
			if(method == 'goods'){
					mongodb.connect(db_str,function(err,db){
					var conn = db.collection('goods');
					conn.find({}).toArray(function(err,result){									
					  			res.write(JSON.stringify(result));
					  			res.end();
					});
					
				})
			}
			//
		});
		
	}
}).listen(3000);
