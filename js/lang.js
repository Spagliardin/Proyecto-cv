function getUserCountry() {
  return fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => data.country_code)
    .catch(error => {
      console.error('Error fetching user country:', error);
      return null;
    });
}

function redirectToCountryURL(countryCode) {
  switch (countryCode) {
    case 'ES':
    case 'MX':
    case 'AR':
    case 'CO':
      window.location.href = 'https://spagliardinicolas.ar/';
      break;
    case 'IT':
      window.location.href = 'https://spagliardinicolas.ar/it';
      break;
    default:
      window.location.href = 'https://spagliardinicolas.ar/en';
  }
}

getUserCountry().then(countryCode => {
  if (countryCode) {
    redirectToCountryURL(countryCode);
  } else {
    console.error('Not found.');
  }
});