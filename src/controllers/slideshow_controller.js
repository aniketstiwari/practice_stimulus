import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "slide" ]
  static values = { index: Number }

  initialize() {
  	//console.log(this.indexValue)
    //console.log(typeof this.indexValue)
    //this.index = 0
    this.showCurrentSlide()
  }

  next() {
    this.indexValue++
    this.showCurrentSlide()
  }

  previous() {
    this.indexValue--
    this.showCurrentSlide()
  }

  showCurrentSlide() {
    this.slideTargets.forEach((element, index) => {
      element.hidden = index != this.indexValue
    })
  }
}