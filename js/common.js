$(function() {

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
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
        nextArrow: $('.next')
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
        }
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
