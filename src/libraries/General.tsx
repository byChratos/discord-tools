// Returns a list of numbers with from as the first element and to as the last
// range(1, 3) => [1, 2, 3]
export function range(from: number, to: number): number[] {
    let list: number[] = new Array<number>();
    for(let i: number = from; i < to + 1; i++) {
        list.push(i);
    }
    return list;
}

// Returns the element at the relative index
// elementAtRelativeIndex([11, 12, 13, 14, 15], 13, -1) => 12
export function elementAtRelativeIndex(list: any[], element: any, relativeIndex: number): any {
    const indexOfElement = list.indexOf(element);
    let newIndex = indexOfElement + relativeIndex;

    while(newIndex < 0 || newIndex > list.length - 1) {
        if(newIndex < 0) {
            newIndex = list.length + newIndex;  
        } else if(newIndex > list.length - 1) {
            newIndex = newIndex - list.length;
        }
    }

    return list[newIndex];
}