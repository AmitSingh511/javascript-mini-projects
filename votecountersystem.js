const readline=require("readline");
const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
const votes=new Map();
function castevote(candidate){
    candidate=candidate.toLowerCase().trim();
    if(!candidate){
        console.log("InvalidVote");
        return;
    }
    if(votes.has(candidate)){
        votes.set(candidate,votes.get(candidate)+1);
    }
    else{
        votes.set(candidate,1);
    }
}
function findwinner(){
    let maxvotes=0;
    let winners=[];
    for(let[candidate,count] of votes){
        if(count>maxvotes){
           maxvotes=count;
           winners=[candidate];
        }else if(count === maxvotes){
            winners.push(candidate);
        }
    }
    return {winners,maxvotes};
}
function askvote(){
    r1.question("Enter candidate name(type `exit` to finish): ",(input)=>{
              if(input.toLowerCase()=== "exit"){
                console.log("\nVote Results: ");
                for(let[candidate,count] of votes){
                    console.log(candidate +" : "+ count);
                }
                const result=findwinner();
                if(result.winners.length>1){
                    console.log("\nIt is Tie between: "+result.winners.join(","));
                }
                else if(result.winners.length === 1){
                    console.log("\nWinner: "+ result.winners[0]+" with "+ result.maxvotes+" votes ");
                }
                else{
                    console.log("\nNo votes cast.")
                }
              r1.close();
              return;
            }
              castevote(input);
              askvote();
              }

    );
}
askvote();