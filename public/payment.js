$(document).ready(function() {
    const productDetails = JSON.parse(localStorage.getItem('productDetails'));
    let subtotal = 0;
    productDetails.forEach(product => {
        const subtotalProduct = product.quantity * product.price;
        subtotal += subtotalProduct;
        $('#creat-invoice').append(`
          <tr>
            <td>${product.name}</td>
            <td>${product.quantity}</td>
            <td>${product.price.toLocaleString()} VND</td>
            <td>${subtotalProduct.toLocaleString()} VND</td>
          </tr>
        `);
    });
    $('#subtotal').text(subtotal.toLocaleString());
    $('#total').text(subtotal.toLocaleString());
  });
$(document).ready(function(){
    var wardsByDistrict = {
        "2": ["Thanh Bình", "Thuận Phước", "Thạch Thang", "Hải Châu I", "Hải Châu II", "Phước Ninh", "Hòa Thuận Tây", "Hòa Thuận Đông", "Nam Dương", "Bình Hiên", "Bình Thuận", "Hòa Cường Bắc", "Hòa Cường Nam"],
        "3": ["Hòa Hiệp Bắc", "Hòa Hiệp Nam", "Hòa Khánh Bắc", "Hòa Khánh Nam", "Hòa Minh"],
        "4": ["An Khê", "Chính Gián", "Hòa Khê", "Tam Thuận", "Tân Chính", "Thạc Gián", "Thanh Khê Đông", "Thanh Khê Tây", "Vĩnh Trung", "Xuân Hà"],
        "5": ["Hòa An", "Hòa Phát", "Hòa Thọ Đông", "Hòa Thọ Tây", "Hòa Xuân", "Khuê Trung"],
        "6": ["An Hải Bắc", "An Hải Đông", "An Hải Tây", "Mân Thái", "Nại Hiên Đông", "Phước Mỹ", "Thọ Quang"],
        "7": ["Hòa Bắc", "Hòa Châu", "Hòa Khương", "Hòa Liên", "Hòa Nhơn", "Hòa Ninh", "Hòa Phong", "Hòa Phú", "Hòa Phước", "Hòa Sơn", "Hòa Tiến"],
        "8": ["Hoà Hải", "Hoà Quý", "Khuê Mỹ", "Mỹ An"]
    };
    $("#district").change(function(){
        var selectedDistrict = $(this).val();
        var wardOptions = "<option value='1'>Huyện/ Phường</option>";
        if(selectedDistrict in wardsByDistrict) {
            $.each(wardsByDistrict[selectedDistrict], function(index, value) {
                wardOptions += "<option value='" + (index + 2) + "'>" + value + "</option>";
            });
        }
        $("#ward").html(wardOptions);
    });
});
$(document).ready(function() {
    function checkConfirm(){
        $("#number-error").css("display","none");
        $("#name-error").css("display","none");
        $("#district-error").css("display","none");
        $("#ward-error").css("display","none");
        $("#street-error").css("display","none");
        $("#phone-error").css("display","none");
        var userName = $("#user-name").val();
        var userPhone = $("#user-phone").val();
        var district = $("#district option:selected").text();
        var ward = $("#ward option:selected").text();
        var message = $("textarea").val(); 
        var streetName = $("#name-street").val();
        var numberStreet = $("#number-street").val();
        let i=0;
        if(userName.trim()===''){
            $("#name-error").css("display","block");
            i++;
        }
        if(isNaN(userPhone) || userPhone.trim()===''){
            $("#phone-error").css("display","block");
            i++;
        }
        if(district.trim() === 'Quận/ Huyện'){
            $("#district-error").css("display","block");
            i++;
        }
        if(ward.trim()==='Phường/ Xã'){
            $("#ward-error").css("display","block");
            i++;
        }
        if (streetName.trim()===''){
            $("#street-error").css("display","block");
            i++;
        }
        if( numberStreet.trim()===''){
            $("#number-error").css("display","block");
            i++;
        }  
        if (i===0){
            $("#formsuccess").show();
        }  
    }
    $("#confirm-btn").click(function() {
        checkConfirm();
    });
    $("#cancel-order").click(function(){
        window.close();
    });
    $("#success-payment").click(function(){
        window.close();
    });
});

    
