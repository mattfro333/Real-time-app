var defaultStore = {
  props: []
}

export default function manageStore(store = defaultStore, action){
  switch(action.payload){
    case 'test':
      console.log('Redux is working')
      break;
    default:
      return store
  }
}
