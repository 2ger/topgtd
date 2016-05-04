AV.initialize('1xp3XcR1Wh2euTYwFK7xD4qA', 'd7uNUfuJg3gUNnCtBfA0Sir5');
Task = AV.Object.extend('Task');// 表名
//用户是否登陆
var currentUser = AV.User.current();
if (currentUser) {
  uid = currentUser.id;    
  console.log('已登陆:'+currentUser.id);
  localStorage.userName=currentUser.attributes.username;
} else {
  console.log('请先登陆！');
  self.location.href="signin.html";
}
//初始化
var userName = localStorage.userName;
$('#userName').text(userName);
// TASK例表  查询 0级
var user = new AV.Query(Task);
user.equalTo("uid",uid);// 查询条件
var query0 = new AV.Query(Task);
query0.equalTo("level",0);// 查询条件
var mainQuery0 = AV.Query.and(user, query0);//多条件查询
mainQuery0.find({
  success: function(results) {
    var allTask ="";
    for (var i = 0; i < results.length; i++) {
      var object = results[i];// 列出所有数据
      var task =object.attributes;
      //alert(object.id + ' - ' +task.title);
      allTask = allTask+'<li class="list-group-item dd-item dd3-item" data-id="'+object.id+'" order="'+task.order+'" level="'+task.level+'"><button data-action="collapse" type="button">Collapse</button><button data-action="expand" type="button" style="display: none;">展</button> <div class="dd-handle dd3-handle">拖</div> <div class="pull-right m-r"> <a href="#"><i class="icon-list"></i></a> </div> <a href="#" class="jp-play-me m-r-sm pull-left"> <i class="icon-check text-muted text"></i> <i class="icon-check bg-success text-active"></i> </a> <div class="clear text-ellipsis"> <span contenteditable="true" id="'+object.id+'" >'+task.title+'</span> </div><ol class="dd-list '+object.id+'"></ol> </li>';
    }
    if(allTask == ''){
      allTask = '<li class="list-group-item dd-item dd3-item" data-id="999"><button data-action="collapse" type="button">Collapse</button><button data-action="expand" type="button" style="display: none;">展</button> <div class="dd-handle dd3-handle">拖</div> <div class="pull-right m-r"> <a href="#"><i class="icon-list"></i></a> </div> <a href="#" class="jp-play-me m-r-sm pull-left"> <i class="icon-check text-muted text"></i> <i class="icon-check bg-success text-active"></i> </a> <div class="clear text-ellipsis"> <span contenteditable="true" id="999" ></span> </div><ol class="dd-list"></ol> </li>';
    }
    //alert(allTask);
    $('ol#task').append(allTask);
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});
// 查询  一级
var query1 = new AV.Query(Task);
query1.equalTo("level",1);// 查询条件
var mainQuery1 = AV.Query.and(user, query1);//多条件查询
mainQuery1.find({
  success: function(results) {
    for (var i = 0; i < results.length; i++) {
      var object = results[i];// 列出所有数据
      var task =object.attributes;
     var  childrenTask = '<li class="list-group-item dd-item dd3-item" data-id="'+object.id+'" order="'+task.order+'" level="'+task.level+'"><button data-action="collapse" type="button">Collapse</button><button data-action="expand" type="button" style="display: none;">展</button> <div class="dd-handle dd3-handle">拖</div> <div class="pull-right m-r"> <a href="#"><i class="icon-list"></i></a> </div> <a href="#" class="jp-play-me m-r-sm pull-left"> <i class="icon-check text-muted text"></i> <i class="icon-check bg-success text-active"></i> </a> <div class="clear text-ellipsis"> <span contenteditable="true" id="'+object.id+'" >'+task.title+'</span> </div><ol class="dd-list '+object.id+'"></ol> </li>';
    var parentClass = '.'+task.parentId;
    $(parentClass).append(childrenTask);
    }
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});
// 查询  二级
var query2 = new AV.Query(Task);
query2.equalTo("level",2);// 查询条件
var mainQuery2 = AV.Query.and(user, query2);//多条件查询
mainQuery2.find({
  success: function(results) {
    for (var i = 0; i < results.length; i++) {
      var object = results[i];// 列出所有数据
      var task =object.attributes;
     var  childrenTask = '<li class="list-group-item dd-item dd3-item" data-id="'+object.id+'" order="'+task.order+'" level="'+task.level+'"><button data-action="collapse" type="button">Collapse</button><button data-action="expand" type="button" style="display: none;">展</button> <div class="dd-handle dd3-handle">拖</div> <div class="pull-right m-r"> <a href="#"><i class="icon-list"></i></a> </div> <a href="#" class="jp-play-me m-r-sm pull-left"> <i class="icon-check text-muted text"></i> <i class="icon-check bg-success text-active"></i> </a> <div class="clear text-ellipsis"> <span contenteditable="true" id="'+object.id+'" >'+task.title+'</span> </div><ol class="dd-list '+object.id+'"></ol> </li>';
    var parentClass = '.'+task.parentId;
    $(parentClass).append(childrenTask);
    }
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});
// 查询  3级
var query3 = new AV.Query(Task);
query3.equalTo("level",3);// 查询条件
var mainQuery3 = AV.Query.and(user, query3);//多条件查询
mainQuery3.find({
  success: function(results) {
    for (var i = 0; i < results.length; i++) {
      var object = results[i];// 列出所有数据
      var task =object.attributes;
     var  childrenTask = '<li class="list-group-item dd-item dd3-item" data-id="'+object.id+'" order="'+task.order+'" level="'+task.level+'"><button data-action="collapse" type="button">Collapse</button><button data-action="expand" type="button" style="display: none;">展</button> <div class="dd-handle dd3-handle">拖</div> <div class="pull-right m-r"> <a href="#"><i class="icon-list"></i></a> </div> <a href="#" class="jp-play-me m-r-sm pull-left"> <i class="icon-check text-muted text"></i> <i class="icon-check bg-success text-active"></i> </a> <div class="clear text-ellipsis"> <span contenteditable="true" id="'+object.id+'" >'+task.title+'</span> </div><ol class="dd-list '+object.id+'"></ol> </li>';
    var parentClass = '.'+task.parentId;
    $(parentClass).append(childrenTask);
    }
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});
// 查询  4级
var query4 = new AV.Query(Task);
query4.greaterThanOrEqualTo("level",4);// 查询条件
var mainQuery4 = AV.Query.and(user, query4);//多条件查询
mainQuery4.find({
  success: function(results) {
    for (var i = 0; i < results.length; i++) {
      var object = results[i];// 列出所有数据
      var task =object.attributes;
     var  childrenTask = '<li class="list-group-item dd-item dd3-item" data-id="'+object.id+'" order="'+task.order+'" level="'+task.level+'"><button data-action="collapse" type="button">Collapse</button><button data-action="expand" type="button" style="display: none;">展</button> <div class="dd-handle dd3-handle">拖</div> <div class="pull-right m-r"> <a href="#"><i class="icon-list"></i></a> </div> <a href="#" class="jp-play-me m-r-sm pull-left"> <i class="icon-check text-muted text"></i> <i class="icon-check bg-success text-active"></i> </a> <div class="clear text-ellipsis"> <span contenteditable="true" id="'+object.id+'" >'+task.title+'</span> </div><ol class="dd-list '+object.id+'"></ol> </li>';
    var parentClass = '.'+task.parentId;
    $(parentClass).append(childrenTask);
    }
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});
// 任务操作
$("body").delegate('.text-ellipsis span','focus',function(){
  var  title  =   $(this).text();
  var taskId = $(this).closest('li').attr('data-id');
  localStorage.title=title;
  localStorage.taskId=taskId;
})
$("body").delegate('.text-ellipsis span','blur',function(){
  var taskId = localStorage.taskId;
  var title  = localStorage.title;
  var titlenow = $('#'+taskId).text();
  var order = $(this).closest('li').prev().attr('order');
  var level = $(this).closest('li').prev().attr('level');
  var parentId = $(this).closest('li').parent().attr('parentId');
  if(parentId == undefined){
   parentId ='';
  }
  var timestamp = (new Date()).valueOf();
  var query = new AV.Query(Task);

  if(taskId < 1000){
    var task= new Task();
    task.save({
      title: titlenow,   // 字段名：值
      order: timestamp+1,
      level: level,
      parentId: parentId,
      uid: uid   
    }, {
      success: function(object) {
         console.log(object.id+' 新增成功');
      }
    });
  }else if(title != titlenow){
      console.log(taskId+' 已更新');
      query.get(taskId, {
        success: function(post) {
          post.set('title',titlenow);
          post.save();
        },
        error: function(object, error) {
          console.log(object);
        }
      });
  } 
  console.log('标题更新：'+titlenow);

})

    // diy 按键操作
    $('.list-group-item .text-ellipsis').click(function(){//编辑变色
      $('.list-group-item').css("background","#fff");
      $(this).parent('li').css("background","#ffffdb");
    });

    localStorage.newTaskId = 1;
    $("body").on( 'keydown','.list-group-item .text-ellipsis span', function(e) {
      var shift =e.shiftKey;
      var key = e.keyCode;
      var me = $(this);
      var li = me.closest("li");
      var taskid = li.attr('data-id');
      var taskLevel = li.attr('level');
      var id = localStorage.newTaskId;
      if (key == 13) {// ENTER
        var newTask = '<li class="list-group-item dd-item dd3-item" data-id="'+id+'"> <button data-action="collapse" type="button">Collapse</button><button data-action="expand" type="button" style="display: none;">展</button> <div class="dd-handle dd3-handle">拖</div> <div class="pull-right m-r"> <a href="#"><i class="icon-list"></i></a> </div> <a href="#" class="jp-play-me m-r-sm pull-left"> <i class="icon-check text-muted text"></i> <i class="icon-check bg-success text-active"></i> </a> <div class="clear text-ellipsis"> <span  contenteditable="true"  id="'+id+'"></span> </div><ol class="dd-list"></ol> </li>';
         localStorage.newTaskId = id+1;
        li.after(newTask);
        var next = li.next();
        next.find("span").focus();
        me.closest('.list-group-item').css("backgroundColor", "#fff");
        next.css("backgroundColor", "#ffffdb");
        return false;
      }
      if (shift && key==9) {
        var left   = $(this).parent('div').prev('a').css("margin-left");
        left = parseInt(left.replace("px", ""));
        left = left-20;
        if (left<0) {
          left =0;
        }
        me.parent('div').prev('a').css("margin-left",left+'px');
        return false;
      }else if (key==9) {//tab  缩进
        var ol = li.prev().children('ol');
        var parentId = li.prev().attr('data-id');
        if (parentId != undefined && taskLevel < 4){
          ol.append(li);//缩进
          li.find("span").focus();
        // 修改当前task 的 level  parentId
          var query = new AV.Query(Task);
          query.get(taskid, {
            success: function(post) {
              post.set('parentId',parentId);
              post.increment("level");
              post.save();
              console.log('level修改');
            },
            error: function(object, error) {
              console.log(object);
            }
          });
          // 所有子task level + 1
          var query2 = new AV.Query(Task);
          query2.equalTo("parentId",taskid);// 查询条件
          query2.find({
            success: function(results) {
              for (var i = 0; i < results.length; i++) {
                var object = results[i];// 列出所有数据
                query.get(object.id, {
                  success: function(post) {
                    post.increment("level");
                    post.save();
                    console.log('子task修改level成功');
                  },
                  error: function(object, error) {
                    console.log(object);
                  }
                });
              }
            },
            error: function(error) {
              alert("Error: " + error.code + " " + error.message);
            }
          });
        }else{
        return false;
        }
        return false;
      }else if (key==38) {//上下切换  在缩进后无效
        var prev = li.prev();
        prev.closest('li').find("span").focus();
        $('.list-group-item').css("background","#fff");
        prev.css("background","#ffffdb");
        return false;
      }else if (key==40) {
        var next = li.next();
        next.find("span").focus();
        $('.list-group-item').css("background","#fff");
        next.css("background","#ffffdb");
        return false;
      }else if (key == 8 && me.text()=='') {//无内容情况下，删除li
        var prev = li.prev();
        query.get(taskId, {
          success: function(thisTask) {
            thisTask.destroy();
            console.log(thisTask.id+' 已删除')
        }})
        prev.find("span").focus();
        $('.list-group-item').css("background","#fff");
        prev.css("background","#ffffdb");
        li.remove();
      };
    });

    $('body').on('click', '.jp-play-me',  function(){// 完成操作
      var me = $(this).closest('li');
      var taskId = me.attr('data-id');
      var done =0;
      me.toggleClass('done');
      if(me.hasClass('done')){
        console.log('done '+taskId);
        $("ol#task").append(me);
       // me.remove();
        done =1;
      }else{
        console.log('undone');
      }
      var query = new AV.Query(Task);
      query.get(taskId, {
        success: function(post) {
          post.set('isDone',done);
          post.save();
        console.log('done');
        },
        error: function(object, error) {
          console.log(object);
        }
      });
    })
    // end  按键操作
    $('#logout').click(function(){
      AV.User.logOut();
      self.location.href="signin.html";
    })

