const words="Bhagat Singh was one of India’s most fearless and inspiring freedom fighters. Born on September 28, 1907, in Punjab, he developed a deep love for his country at a young age. He strongly opposed British rule and believed in revolutionary action to achieve independence. Bhagat Singh, along with his companions, protested against oppressive laws and the injustice faced by Indians. His bold actions and patriotic spirit made him a symbol of courage and sacrifice. At the age of 23, he was executed by the British government, but his bravery continues to inspire generations across India today.";
const cleanwords=words.toLowerCase().replace(/[^\w\s]/g,"").split(" ");
const frequency=new Map();
for(let word of cleanwords){
    if(frequency.has(word)){
        frequency.set(word,frequency.get(word)+1);
    }else{
        frequency.set(word,1);
    }
}
console.log("Word Frequency:");
for(let[word,count]of frequency){
    console.log(word+" : "+count);
}