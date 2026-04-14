export function validatePostcode(postcode) {
  const errorMsg = document.getElementById('error');

  if (!postcode) {
    errorMsg.textContent = 'Please enter a postcode.';
    return false;
  }

  const ukPostcode =
    /^(GIR\s?0AA|([A-Za-z][0-9]{1,2}|[A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2}|[A-Za-z][0-9][A-Za-z]|[A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z])\s?[0-9][A-Za-z]{2})$/i;

  if (!ukPostcode.test(postcode)) {
    errorMsg.textContent = 'Please enter a valid UK postcode.';
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
    return false;
  }
  document.getElementById('error').textContent = '';
  return true;
}

export function showLoading() {
  document.getElementById('loading').style.display = 'block';
}

export function hideLoading() {
  document.getElementById('loading').style.display = 'none';
}
