// export default function ToDo({task, isDone}) {
//     return (
//         <li>Task: {task}</li>
//     )
// }

// export default function ToDo({task, isDone}) {
//     if (isDone === true) {
//         return <li>Done: {task}</li>
//     }
//     else {
//         return <li>Pending: {task}</li>
//     }
// }

// option 02
// export default function ToDo({ task, isDone }) {
//     if (isDone === true) {
//         return <li>Done: {task}</li>
//     }
//     return <li>To be done: {task}</li>
// }

// option 03 - conditional rendering
// condition ? true : false
// export default function ToDo({ task, isDone, time = 0 }) {
//     return isDone ?
//         <li>Done: {task} time: {time}</li>
//         : <li>Not Done: {task}</li>
// }

// option 04 - conditional rendering (&& - for true) 
// export default function ToDo({task, isDone, time = 0}) {
//     return isDone && <li>Done Tasks: {task} time: {time}</li>
// }

// option 05 - conditional rendering (|| for false)
// export default function ToDo({ task, isDone, time = 0 }) {
//     return isDone || <li>Not Done Tasks: {task} time: {time}</li>
// }

// export default function ToDo({task, isDone}) {
//     if (isDone === true) {
//         return null
//     }
//     else {
//         return <li>Pending: {task}</li>
//     }
// }

// option 06 - conditional rendering (using variable)
export default function ToDo({task, isDone}) {
    let listItem ;

    if (isDone === true) {
        listItem = <li>Done: {task}</li>
    }
    else {
        return <li>Pending: {task}</li>
    }
    return listItem;
}