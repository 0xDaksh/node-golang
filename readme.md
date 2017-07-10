# 💀 Golang for Node.

Golang bridge for Node.js, eventually allowing you to run Golang code just directly from Node!

## 💀 Installation

```
	npm install --save golang
```

## 💀 Pre-Requistes

You'd need a go-lang compiler, [Download it from Here](https://golang.org/dl/)

## 💀 API with Examples

### Run
```javascript
	var golang = require('golang')
	golang.run(`
		package main
		import "fmt"
		func main() {
		    fmt.Println("hello world")
		}
	`).then(() => {
		// output on the terminal
	}).catch(err => {
		throw err; // err code. 
	})
```

### Build
```javascript
	var golang = require('golang')
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