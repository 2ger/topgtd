$(document).ready(function()
{

    // activate Nestable for list 1
    $('#nestable1').nestable({
        group: 1
    });
    $('#nestable2').nestable({
        group: 1
    });
    $('#nestable3').nestable({
        group: 1
    });
    $('#nestable4').nestable({
        group: 1
    });

    //$('#nestable3').nestable();
    //$('#nestable4').nestable();

    var $expand = false;
    $('#nestable-menu').on('click', function(e)
    {
        if ($expand) {
            $expand = false;
            $('.dd').nestable('expandAll');
        }else {
            $expand = true;
            $('.dd').nestable('collapseAll');
        }
    });
    $('#nestable1,#nestable2,#nestable3,#nestable4').nestable().on('change',function(){
      var output2 = $('#nestable2').nestable('serialize');
      $('#output2').html(JSON.stringify(output2));
      var output1 = $('#nestable1').nestable('serialize');
      $('#output1').html(JSON.stringify(output1));
      var output3 = $('#nestable3').nestable('serialize');
      $('#output3').html(JSON.stringify(output3));
      var output4 = $('#nestable4').nestable('serialize');
      $('#output4').html(JSON.stringify(output4));
      console.log(output1);
    });
// 在用户表中存用户的  四个列表数据 用jason形式
// 如果变动，存新的
// 列出： 直接用

});
