export function validatePostcode(postcode) {
  const errorMsg = document.getElementById('error');

  if (!postcode) {
    errorMsg.textContent = 'Please enter a postcode.';
    return false;
  }

  const ukPostcode = /^(E|EC|N|NW|SE|SW|W|WC)\d/i;

  if (!ukPostcode.test(postcode)) {
    errorMsg.textContent =
      'Please enter a valid UK postcode e.g. E1, SW1A, WC2N.';
    return false;
  }

  errorMsg.textContent = '';
  return true;
}

export function validateResponse(data) {
  if (
    !data ||
    !Array.isArray(data.restaurants) ||
    data.restaurants.length === 0
  ) {
    document.getElementById('error').textContent =
      'No restaurants found for this postcode.';
    return;
  }
}

export function showLoading() {
  document.getElementById('loading').style.display = 'block';
}

export function hideLoading() {
  document.getElementById('loading').style.display = 'none';
}
