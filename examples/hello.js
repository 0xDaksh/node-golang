var golang = require('../index')

golang.run(`
package main
import "fmt"
func main() {
    fmt.Println("hello world")
}
`)