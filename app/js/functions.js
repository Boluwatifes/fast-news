import $ from 'jquery';

import '../../public/assets/materialize/js/bin/materialize';

$(() => {
  $('.button-collapse').sideNav();
  $('input.autocomplete').autocomplete({
    data: {
      Apple: null,
      Microsoft: null,
      Google: 'http://placehold.it/250x250',
    },
    onAutocomplete(val) {
      $('#replace').hide();
    },
    minLength: 1,
  });
});
