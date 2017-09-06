$(function () {

   $(".sw").on('click',function () {     
       swal("編輯成功!", "", "success")
    });

   $(".btn-success, .btn-primary").on('click', function () {
     var edit = true;
     $('input').each(function () {
        if ($(this).val() === '') {
          edit = false;
          return;
        }
     });
     if (edit==true) {
      swal("編輯成功!", "", "success")
     }
   });

});

