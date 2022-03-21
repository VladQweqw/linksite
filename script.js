$(() => {

    // navbar
    const line = $('.line')
    const hamburger = $('.hamburger')
    let navToggle =false; 

    $('#navbarLogo').click(() => {
        removeNavClass()
    })

    $('.navlink').click(() => {
        removeNavClass()
    })

    hamburger.click(function() {

        if(navToggle) {

            line.eq(1).css('width','100%')
            line.eq(2).css('width','100%')

            removeNavClass() 
        }else {

            line.eq(1).css('width','75%')
            line.eq(2).css('width','50%')

            $('.extendedNav').addClass('extendedNavActive')
            navToggle = true; 
        }

    })

    function removeNavClass() {

        navToggle = false;

        line.eq(1).css('width','100%')
        line.eq(2).css('width','100%')

        $('.extendedNav').removeClass('extendedNavActive')  



    }

    // craetePhone people changer
    const data =  [
        {name:'Andrew' , img:'./images/guy.jpg'},
        {name:'Maddison' , img:'./images/gril.jpg'},
        {name:'Daniel' , img:'./images/iohanis.jpg'},
    
    ];
    
    let idx = 0;
    const colors = [
        'linear-gradient(45deg , #cc2b5e , #753a88)',
        'linear-gradient(25deg , #2B32B2 , #f000ff)',
        'linear-gradient(135deg ,#001eff ,#EF629F)'
    ]


    function phoneChanger(idx) {
        $('.phoneImg').attr('src',data[idx].img);
        $('.userName').text(data[idx].name)
        $('.phone').css('background',colors[idx])

    }
    phoneChanger(0)
    setInterval(() => {
       
       

        if(idx > 2) {
            idx = 0;
        }else if (idx < 0) {
            idx = 2
        }else {
            phoneChanger(idx)
            idx++
        }   


    }, 4000);
   

    //scrol listener for nav
    $(window).scroll(function () {
        if(this.scrollY > 10){
            $('.navbar').css('padding','.5rem 2rem')     
            $('#navbarLogo').css('width','80px')    
        }else{
            $('.navbar').css('padding','1rem 2rem')  
            $('#navbarLogo').css('width','90px')    
        }
    })


    // navbar anchors
    $(".navItem > a, .heroBtn").on("click", function (e) {
    e.preventDefault();
    const href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(href).offset().top }, 500);
  });


  //hero blobs moving

  
})


