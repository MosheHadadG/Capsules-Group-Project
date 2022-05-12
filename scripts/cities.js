export function convertHebrewToEnglish(city) {
  switch(city) {
    case 'קריית מוצקין':
      city = 'Kiryat Motzkin';
      break;
    
    case 'רמלה':
      city = 'Ramla';
      break;

    case 'תל-אביב':
      city = 'Tel Aviv';
      break;

    case 'הרצלייה':
      city = 'Herzliya';
      break;

    case 'נוף הגליל':
      city = 'Nof HaGalil';
      break;

    case 'טירה':
      city = 'Tira';
      break;

    case 'אשקלון':
      city = 'Ashqelon';
      break;

    case 'אום אלפחם':
      city = 'Umm al-Fahm';
      break;

    case 'רמת-גן':
      city = 'Ramat Gan';
      break;
      
    case 'עכו':
      city = 'Akko';
      break;

    case 'צפת':
      city = 'Safed';
      break;

    case 'עכו':
      city = 'Akko';
      break;
  }
  return city;
}