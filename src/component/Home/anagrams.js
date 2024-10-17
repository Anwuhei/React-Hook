export function getAnagrams(source){
    if(source.length<2){
        return [...source]
    }
    const anagrams =[]
    const letters = [...source]
    // “a"+bll , "b"+"all","l"+"bal"所有变位词
    letters.forEach((letter,i)=>{
        const without =[...letters]
        without.splice(i,1)
        getAnagrams(without).forEach(anagram=>{//在源文本的基础上删除一个字母，递归地调用该函数
            anagrams.push(letter+anagram)
        })
    })
    return anagrams
}
export function getDistinct(anagrams){//移除数组中重复的变位词
    return [...new Set(anagrams)]
}