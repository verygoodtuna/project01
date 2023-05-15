$(function () {

    //var --> const , let
    const option = {
        anchors: ['01', '02', '03'],

        onLeave: function (index, nextIndex, direction) {
            console.log(index, nextIndex, direction);
            $('h1 span').text(nextIndex)
            $('nav li').eq(nextIndex - 1).addClass('on')
                .siblings().removeClass('on');
            $('.section').eq(nextIndex - 1).addClass('on')
                .siblings().removeClass('on');
        },
    }

    $('.main_full').fullpage(option);

    // const num = [1, 2, 3];

    $('.section').eq(0).addClass('on');


})