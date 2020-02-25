$('document').ready(function () {


    $('.buttonBuy').click(function () {
        console.log('modalochka');
        $('#modal').show();

    })


    $('.close').click(function () {
        console.log('pokapoka');
        $('#modal').hide();

    })

    $('.mobileClose, #mobileMenu a').click(function () {
        console.log('pokapoka');
        $('.mobileMenu').removeClass('active');
        $('.mobileBack').removeClass('hidden')

    })


    $('#modal').click(function (event) {
        if (event.target.getAttribute('id') == "modalFlex") {
            $('#modal').hide();

        }
    })

    $('.hamburger').click(() => {
        console.log('trrrrha');
        $('.mobileMenu').toggleClass('active');
        $('.mobileBack').addClass('hidden')
        $('.mobileBack').show();
        console.log('pd');
    })

//     $('#accept').click(function () {
//         let mobile = $('.phoneNumber').val();
//         let email = $('.mail').val();
//         console.log('dfgh');
//   if ((mobile.length > 0) && (email.length > 0) && ($('.agree').is(":checked"))) {
        
//             switch ($('#sale_id').attr('value')) {
//                 case '807':
//                     ym(53175040, 'reachGoal', 'oplata_tariff_vip');
//                     $('#buy_form').submit()
//                     break;
//                 case '804':
//                     ym(53175040, 'reachGoal', 'oplata_tariff_standart');
//                     $('#buy_form').submit()
//                     break;
//                 case '801':
//                     ym(53175040, 'reachGoal', 'oplata_tariff_light');
//                     $('#buy_form').submit()
//                     break;
//             }
//         } else {

//             $('.input_required').each(function () {
//                 if (($(this).val().length == 0)) {
//                     $(this).css('border', '1px solid #ed1d25');
//                 } else {
//                     $(this).css('border', '1px solid #adadad');

//                 }
//             })
//         }
//     });


    // $('#accept').click(function () {
    //     if ($('.agree3').is(":checked")) {
    //         $('.check input~span').css('border-color', '#adadad')
    //     } else {
    //         $('.check input~span').css('border-color', 'rgb(237, 29, 37)')
    //     }
    // })

    $('form input[type="text"]').keyup(function () {
        if ($(this).length > 0) {
            $(this).css('border', '1px solid #adadad');
        } else {
            $(this).css('border', '1px solid #ed1d25');
        }
    })

    $('form input[type="checkbox"]').keyup(function () {
        if ($(this).is(":checked")) {
            $(this).css('border', '1px solid #adadad');
        } else {
            $(this).css('border', '1px solid #ed1d25');
        }
    })

    $('.input__tel').mask('+7(999)999-99-99');

     $('.keyUp').keyup(function () {
        $(this).val($(this).val().replace(/[^A-Za-zА-Яа-я\-\s]/g, ''))
     })

     $('#checkbox').change(function(){
         if ($(this).is(":checked")){
            $('.checkbox_input_block span').css('border-color', '#adadad')

         }
         else {
            $('.checkbox_input_block span').css('border-color', 'rgb(237, 29, 37)')

         }
     })

    $('#accept').click(function () {
        if (($('[name="sale[lastname]"]').val().length > 0) && ($('[name="sale[name]"]').val().length > 0) && ($('[name="sale[surname]"]').val().length > 0) && ($('[name="sale[email]"]').val().length > 0) && ($('#checkbox').is(':checked'))) {
            $('form').submit()

        } else {
            if (!$('#checkbox').is(':checked')) {
                console.log('ga')
                $('.checkbox_input_block span').css('border-color', 'rgb(237, 29, 37)')
            }
            else {
                $('.checkbox_input_block span').css('border-color', '#adadad')
            }
            $('form .input_required').each(function () {
                if ($(this).val().length > 0) {
                    $(this).css('border', '1px solid #adadad')
                } else {
                    $(this).css('border', '1px solid rgb(237, 29, 37)')
                }
            })
        }

    })


    $('header, main, .logo, .hidden').click(function (event) {
        console.log('g')
        if (($('.mobileMenu').hasClass('active')) && (event.target.getAttribute('id') !== "mobileMenu")) {
            $('.mobileMenu').removeClass('active');
            $('.mobileBack').removeClass('hidden')



        }
    })

    $("#buy_form").each(function (element) {
        rate_id = $('#buy_form #sale_id').val()
        if (rate_id) {
            $.post('ExternalSale.php?a=init&rate_id=' + rate_id + '', function (data) {
                d = JSON.parse(data);


                $('#sale_key').val(d.token);

            });
        }
    })
})