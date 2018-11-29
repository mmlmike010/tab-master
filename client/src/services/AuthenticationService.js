import Api from '@/services/Api'

export default {
  register(credentials){
  	//we're doing a post request to /register
  	return Api().post('register', credentials)
  }
}

