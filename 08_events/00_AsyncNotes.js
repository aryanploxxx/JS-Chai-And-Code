/*

Javascript is a Synchronous Language - Onec piece of code runs after another
JS is also a Single-Threaded Language

Execution Context -> Execute one line of code at a timeout
| (single thread)
|-> console.log 1
|
|-> console.log 2

Each operation waits for the last one to get completed

*/

/*                      
                        |-> Just like a person has to read something form database, uske aage ka code chalega without waiting for data to return to database 
                        |
                        |
Blocking Code v/s Non-Blocking Code 
|                       |
|-> Block the flow      |-> Does not block the execution of the program
|   of the program      |
|                       |
|-> Read File Sync.     |-> Read File Async.

None of them are good or bad, depends on usecase
*/


// JS Engine contains only Heap Memory and Call Stack, But never used alone as it is single threaded so several problems like choking etc. arrive
 