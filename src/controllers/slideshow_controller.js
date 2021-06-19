import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "slide" ]
  static values = { index: Number }

  // initialize() {
  // 	//console.log(this.indexValue)
  //   //console.log(typeof this.indexValue)
  //   //this.index = 0
  //   this.showCurrentSlide()
  // }

  next() {
    this.indexValue++
    //this.showCurrentSlide()
  }

  previous() {
    this.indexValue--
    //this.showCurrentSlide()
  }

  //Stimulus calls the indexValueChanged() method at initialization and in response 
  //to any change to the data-slideshow-index-value attribute

  indexValueChanged() {
    this.showCurrentSlide()
  }

  showCurrentSlide() {
    this.slideTargets.forEach((element, index) => {
      element.hidden = index != this.indexValue
    })
  }
}