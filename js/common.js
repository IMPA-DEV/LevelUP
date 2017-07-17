$(function() {

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "/mail.php", //Change
            data: th.serialize()
        }).done(function() {
            $('.hid').hide();
            $('.thanks').show();
            $('.thanks .popup').animate({
                top: '30%',
                opacity: 1
            }, 800 );
            th.trigger("reset");
            $('.popup-sms').slideUp( 100 ).delay( 800 ).fadeIn( 400 );
        }).success (function(){
            $(dataLayer.push({'event': 'levelup_nadia'}));
        });

        return false;
    });

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	/* Slick Slider */
    $('.slick').slick({
        infinite: true,
        speed: 1000,
        autoplay: true,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    //Error
    $('.form-part-1 input').click(function () {
        $(this).val('');
    });

    $(".next-open").click(function(e){
        e.preventDefault();
        if($(".form-part-1 input[type='text']").val()=="" || $(".form-part-1 input[type='text']").val()=="Fill this field") {
            $(".form-part-1 input[type='text']").val('Fill this field').css('border-bottom', '2px solid #ff0000');
        }
        else if($(".form-part-1 input[type='email']").val()=="") {
            $(".form-part-1 input[type='email']").val('Fill this field').css('border-bottom', '2px solid #ff0000');
        } else {
            $('.next-hidden').show();
            $('.overlay').animate({
                opacity: 1
            }, 0, function() {
                // Animation complete.
            });
            $('.next-hidden .popup').animate({
                opacity: 1,
                top: '20%'
            }, 800, function() {
                // Animation complete.
            });
        }
    });



    /* pagescroll2id */
    $("nav a").mPageScroll2id({
        scrollSpeed: 1000,
        offset:30
    });

    /* scroll Top Line */
    $(function() {
        var header = $("#top-line");
        var firstBlock = $("#home");
        $(window).scroll(function(scrlevt) {
            scrlevt.preventDefault();
            var scroll = $(window).scrollTop();

            if (innerWidth > 900) {

                if (scroll > 0) {
                    header.addClass("header-scroll");
                    firstBlock.css("margin-top","70px");
                    $('.get-free').show('slow');
                } else {
                    header.removeClass("header-scroll");
                    firstBlock.css("margin-top","0");
                    $('.get-free').hide('slow');
                }

            } else {

                if (scroll > 0) {
                    header.addClass("header-scroll");
                    firstBlock.css("margin-top","60px");
                } else {
                    header.removeClass("header-scroll");
                    firstBlock.css("margin-top","0");
                }

            }

            return false;
        });
    });

    /* open hidden form */
    /*
    $('.next-open').click(function(e){
        e.preventDefault();
       $('.next-hidden').show();
        $('.overlay').animate({
            opacity: 1
        }, 0, function() {
            // Animation complete.
        });
        $('.next-hidden .popup').animate({
            opacity: 1,
            top: '20%'
        }, 800, function() {
            // Animation complete.
        });
    });
    */


    /* Tabs WORK */
    $('#work-b').click(function(){
        $('.work-list p').removeClass('active');
        $(this).addClass('active');
        $('.work-wrap').slideUp('slow');
        $('.work-bathroom').slideDown('slow');
    });
    $('#work-k').click(function(){
        $('.work-list p').removeClass('active');
        $(this).addClass('active');
        $('.work-wrap').slideUp('slow');
        $('.work-kitchen').slideDown('slow');
    });

    /* open hidden form */
    $('.get-free a').click(function(e){
        e.preventDefault();
        $('.quote-hidden').show().css('opacity','1');
        // $('.overlay').animate({
        //     opacity: 1
        // }, 0, function() {
        //     // Animation complete.
        // });
        $('.quote-hidden .popup').animate({
            opacity: 1,
            top: '10%'
        }, 800, function() {
            // Animation complete.
        });
    });

    /* close */
    $('.close').click(function(){
        $('.hid').hide();
    });

    /* nav menu */
    $('.nav-mobile').click(function(){
        $(this).hide();
        $('.main-nav').addClass('active');
        $('.close-mobile').show();
        $('.logo').hide();
    });
    $('nav a, .close-mobile').click(function(){
        if (innerWidth < 992){
            $('.close-mobile').hide();
            $('.main-nav').removeClass('active');
            $('.nav-mobile').show();
            $('.logo').show();
        }
    });


    /* scroll to...  left-right  gallery*/
    $(".work-start").click(function () {
        var leftPos = $('.work').scrollLeft();
        $(".work").animate({scrollLeft: leftPos - 1000}, 1000);
    });

    $(".work-end").click(function () {
        var leftPos = $('.work').scrollLeft();
        $(".work").animate({scrollLeft: leftPos + 1000}, 1000);
    });


	/* MAP */
    jQuery(document).ready(function($){
        //Местоположение: долгота, широта и коэффициент увеличения
        var latitude = 37.3522504,
            longitude = -121.8839728,
            map_zoom = 15;

        var latitude_ico = 37.3522163,
            longitude_ico = -121.8864958;

        //Адрес до иконки с маркером
        var marker_url = 'img/map-ico.png';


        var	main_color = '#007148', //основной цвет
            saturation_value= -1, //насыщенность
            brightness_value= 1; //яркость

        //Стили для элементов на карте
        var style= [
            {
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "color": "#ff8040"
                    },
                    {
                        "weight": 0.5
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "stylers": [
                    {
                        "color": "#ff8040"
                    },
                    {
                        "saturation": 30
                    },
                    {
                        "lightness": -10
                    },
                    {
                        "visibility": "on"
                    },
                    {
                        "weight": 2
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "color": "#ff8040"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.medical",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi.medical",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "weight": 6.5
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ];

        //Создание точки на карте
        var map_options = {
            center: new google.maps.LatLng(latitude, longitude),
            zoom: map_zoom,
            panControl: false,
            zoomControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            styles: style
        };
        //Инициализация карты
        var map = new google.maps.Map(document.getElementById('google-container'), map_options);
        //Добавляем свой маркер местонахождения на карту (свою иконку)
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(latitude_ico, longitude_ico),
            map: map,
            visible: true,
            icon: marker_url,
        });
    });


});

/* POPUP Gallery */
$(document).ready(function() {
    $('.work-bathroom').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });
});

$(document).ready(function() {
    $('.work-kitchen').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });
});