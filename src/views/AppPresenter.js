import CheckLoginInteractor from '../domain/interactor/user/CheckLoginInteractor'
import StorageProvider from '../data/provider/StorageProvider'

export default class AppPresenter {
  constructor (container) {
    this.CheckLoginInteractor = new CheckLoginInteractor(container.get("AppClient"));
    this.client = container.get("AppClient");
  }

  setView (view) {
    this.view = view
  }

  checkLogin () {
    let role = ""
    let loginValidation = this.CheckLoginInteractor.execute()

    if(loginValidation){
      role = this.client.getRole();
    }

    this.view.isLogin(loginValidation, role)

  }

}
