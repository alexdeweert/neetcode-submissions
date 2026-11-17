class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rowstart = 1
    let colstart = 1
    
    //Will contain maps (so these are maps of maps)
    let rowMaps = new Map()
    let colMaps = new Map()
    let blockMaps = new Map()
    
    //we only need to start at rows 0, 3, and 6
    //only need to start at cols 0, 3, and 6
    
    for(let rowstart = 0; rowstart <= 6; rowstart+=3) {
        for(let colstart = 0; colstart <= 6; colstart += 3) {
            // console.log("rowstart: %s, colstart: %s",rowstart,colstart)
            let blockId = rowstart + "#" + colstart
            for(let i = rowstart; i < rowstart+3; i++) {
                let rowId = i
                for(let j = colstart; j < colstart+3; j++) {
                    let colId = j
                    //Blocks are identified by their row and column designation
                    //the first block has rows and columns.
                    //Whenever we print a specific group of components (with i and j iterating over 9 elements)
                    //all 9 elements will have unique block identifiers in the hash map.
                    
                    let cur = board[i][j]
                    if(cur != '.') {
                        //BLOCKS (identifiers based on key blockId)
                        if(blockMaps.has(blockId)) {
                            if(blockMaps.get(blockId).has(cur)) return false
                            else blockMaps.get(blockId).add(cur)
                        } 
                        else {
                            let tempMap = new Set()
                            tempMap.add(cur)
                            blockMaps.set(blockId,tempMap)
                        }
                        
                        //ROWS
                        if(rowMaps.has(rowId)) {
                            if(rowMaps.get(rowId).has(cur)) return false
                            else rowMaps.get(rowId).add(cur)
                        } 
                        else {
                            let tempMap = new Set()
                            tempMap.add(cur)
                            rowMaps.set(rowId,tempMap)
                        }
                        
                        //COLS
                        if(colMaps.has(colId)) {
                            if(colMaps.get(colId).has(cur)) return false
                            else colMaps.get(colId).add(cur)
                        } 
                        else {
                            let tempMap = new Set()
                            tempMap.add(cur)
                            colMaps.set(colId,tempMap)
                        }
                        
                    }
                    
                    
                    //COLS
                    // process.stdout.write(board[i][j])
                }
                // console.log()
            }
            // console.log()
        }
    }
    
    // console.log(colMaps)
    return true
    }
}
