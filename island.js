function getNeighbors(x, y, G)
{

  let n= G.length; let m=G[0].length;

  let ret= [];

  if(x>0 && G[x-1][y] === 1) ret.push([x-1,y]);
  if(x<n-1  && G[x+1][y] === 1) ret.push([x+1,y]);
  if(y>0 && G[x][y-1] === 1) ret.push([x,y-1]);
  if(y<m-1 && G[x][y+1] === 1) ret.push([x,y+1]);


  //console.log(ret);

  return ret;

  // Check top

  // Check bottom

  // Check left

  // Check right

  // Return neighbors

  // Your code here
}


function islandSize(x, y, G) {


  let m=G[0].length; let B = new Set();
  let Q = [[x,y]]; let cur; let ret=0;
  B.has(x*m + y);

  while(Q.length != 0)
  {
    cur = Q.shift();
    ret++;

    for(const v of  getNeighbors(cur[0], cur[1], G))
    {
       if(!B.has(v[0]*m + v[1]))
       {
         B.add(v[0]*m + v[1]);
         Q.push(v);
       }
    }
  }

  return ret-1;

  // Create a visited set to store visited nodes

  // Create a stack, put the starting node in the stack

  // Put the stringified starting node in visited

  // Initialize size to 0

  // While the stack is not empty,

    // Pop the first node

    // DO THE THING (increment size by 1)

    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!

  // return size

  // Your code here
}

module.exports = [getNeighbors, islandSize];
