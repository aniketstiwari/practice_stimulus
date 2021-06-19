import { Controller } from "stimulus"

export default class extends Controller {
	static targets = [ "name" ]

	connect() {
		console.log("sss")
	}
	greet() {
     //  const element = this.nameTarget
	    // const name = element.value
	    // console.log(`Hello, ${name}!`)
	    debugger
	    console.log(`Hello, ${this.name}!`)
  }

  get name() {
  	debugger
    return this.nameTarget.value
  }
}