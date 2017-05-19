'use strict'

const ScreenDictionary = [
  {
    navigatorName: 'AppNavigator',
    pages: [
      { type: 'page', name: 'Home' },
      { type: 'page', name: 'Doctor' },
      { type: 'page', name: 'Patient' },
      { type: 'page', name: 'Profile' },
      { type: 'page', name: 'MyInfo' },
      { type: 'page', name: 'Setting' },
      { type: 'page', name: 'UserHelp' },
      { type: 'page', name: 'Statement' },
      { type: 'page', name: 'DoctorDetail' },
      { type: 'page', name: 'Inquiries' },
      { type: 'page', name: 'MedicalTools' },
      { type: 'page', name: 'TreatmentGuidelines' },
      { type: 'page', name: 'MyQrCode' },
      { type: 'page', name: 'InquiryDetail' },
      { type: 'page', name: 'WebViewPage' },
      { type: 'page', name: 'MedicineBook' }
    ],
    currentPage: 'Home'
  }
]

function findScreen(navigatorName, pageName) {
  const navigator = ScreenDictionary.find((item) => {
    return item.navigatorName == navigatorName
  });
  navigator.currentPage = pageName;
  const page = navigator.pages.find((item) => {
    return item.name == pageName
  });
  if (page.type == 'page') {
    return page.name;
  } else {
    const navigator = ScreenDictionary.find((item) => {
      return item.navigatorName == page.innerNavigator
    });
    return findScreen(navigator.navigatorName, navigator.currentPage)
  }
}

export const DefaultSystemState = {
  screenName: null,
  netState: 'none'
}

export function system(state = DefaultSystemState, action) {
  switch (action.type) {
    case 'setScreenName':
      return Object.assign({}, state, {
        screenName: findScreen(action.navigatorName, action.screenName),
      });
    case 'setNetInfo':
      return Object.assign({}, state, {
        netState: action.netState,
      })
    default:
      return state;
  }
}