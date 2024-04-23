/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable semi */
/* eslint-disable no-alert */
const USER_ROUTE_URL = {
  QUOTES: 'users',
  BLOGBUSTER: 'blog-users',
}
function getParams() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  return params;
}

function getAppURL() {
  const currentURL = window.location.href;
  const defaultUrl = USER_ROUTE_URL.QUOTES;
  if (currentURL.includes(USER_ROUTE_URL.BLOGBUSTER)) return USER_ROUTE_URL.BLOGBUSTER
  return defaultUrl;
}

$(document).ready(() => {
  const { token } = getParams();
  $('#token').val(token);
  const formURL = getAppURL();
  $('#resetPasswordForm').attr('action', `/pages/${formURL}/reset-password`);
});

$('#resetPasswordForm').submit(function (event) {
  /* stop form from submitting normally */
  event.preventDefault();
  const $form = $(this);
  const url = $form.attr('action');
  $.ajax({
    type: 'post',
    url,
    data: $('#resetPasswordForm').serialize(),
    contentType: 'application/x-www-form-urlencoded',
    // eslint-disable-next-line no-unused-vars
    success(responseData, textStatus, jqXHR) {
      const className = responseData.error ? 'danger' : 'success';
      $('#responseDiv').removeClass('d-none alert-danger alert-success').addClass(`alert-${className}`).text(responseData.message)
      $('#password').val('');
      $('#repeatPassword').val('');
    },
    error(jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
      console.log(errorThrown);
    },
  });
});
