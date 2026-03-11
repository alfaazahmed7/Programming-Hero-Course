// closure - A function remembers and can access variables from its outer (lexical) scope even after the outer function has finished executing.

function counter(owner) {
    let count = 0;
    function increment() {
        count = count + 1;
        console.log("value of count", owner, count);
    }
    return increment;
}
const rahimCounter = counter("rahim");
const karinCounter = counter("karim");
rahimCounter();
rahimCounter();
rahimCounter();
rahimCounter();
karinCounter();
karinCounter();
karinCounter();
rahimCounter();
rahimCounter();
rahimCounter();

// const count = counter();
// count();
// count();
// count();
// count();
// count();