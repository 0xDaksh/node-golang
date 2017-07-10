var golang = require(__dirname + '/lib/index')
	golang.build(`
		package main
		import "fmt"
		func main() {
		    fmt.Println("hello world")
		}
	`).then(() => {
		// output on terminal + directory of build
	}).catch((e) => {
		throw e // err code.
	})