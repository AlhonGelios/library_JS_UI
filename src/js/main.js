import './lib/lib';
import $ from './lib/lib';

$('button').click(function() {
    $('div').eq(2).toggleClass('active');
});

$('div').click(function() {
    console.log($(this).index());
});

//console.log($('div').eq(2).find('.more'));
//console.log($('.some').closest('.findme').addClass('123'));
console.log($('.more').eq(0).siblings());

//console.log($('button').html('hello'));
