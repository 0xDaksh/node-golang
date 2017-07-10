# 💀 Golang for Node.
[![Build Status](https://travis-ci.org/DakshMiglani/node-golang.svg?branch=master)](https://travis-ci.org/DakshMiglani/node-golang)

Golang bridge for Node.js, eventually allowing you to run Golang code just directly from Node!

## Installation

```
npm install --save golang
```

## Pre-Requistes

You'd need a go-lang compiler, [Download it from Here](https://golang.org/dl/)

## API with Examples

### Run

Params:
- Input

Does:
- Creates a File
- Runs it
- Output is logged out.

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

Params:
- Input

Does:
- Creates a File.
- Builds it from the File.
- Loggs the url of the Build File.

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
```

## 💀 Contributions
Want to Improve it? Sure, Please Submit an Issue or a Pull Request :)


## 📜 License

Licensed Under MIT 2017 © to [Daksh Miglani](https://dak.sh), Please Give Credit when used :)